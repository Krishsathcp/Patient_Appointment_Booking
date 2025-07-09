const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Appointment = require("./models/Appointment");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/krish_health", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Signup
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "User already exists" });

    const user = new User({ email, password });
    await user.save();
    res.json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ error: "Server error during signup" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user)
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });

    res.json({ success: true, message: "Login successful", user: { email } });
  } catch (err) {
    res.status(500).json({ error: "Server error during login" });
  }
});

// Book Appointment
app.post("/api/appointments", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: "Appointment saved" });
  } catch (err) {
    res.status(500).json({ error: "Server error saving appointment" });
  }
});

// Fetch Appointments by doctor
app.get("/api/appointments", async (req, res) => {
  try {
    const { doctor } = req.query;
    const appts = await Appointment.find({ doctor });
    res.json(appts);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching appointments" });
  }
});

// Fetch profile by email
app.get("/api/profile", async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching profile" });
  }
});

// Update profile by email
app.put("/api/profile", async (req, res) => {
  const { email, ...profileData } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const updatedUser = await User.findOneAndUpdate({ email }, profileData, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: "Server error updating profile" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
