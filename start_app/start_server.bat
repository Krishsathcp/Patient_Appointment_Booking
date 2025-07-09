@echo off
title Starting Backend Server - Krish Health
echo Starting backend server...

cd /d "%~dp0..\server"
npm install
node server.js

pause
