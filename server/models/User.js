const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  fullName: String,
  dateOfBirth: String,
  sex: String,
  age: String,
  address: String,
  maritalStatus: String,
  phoneNumber: String,
  nationality: String,
  emergencyContact: String,
  occupation: String,
  parentName: String,
  parentPhoneNumber: String,
  parentOccupation: String,
});

module.exports = mongoose.model("User", UserSchema);
