@echo off
title Starting Full Stack App - Krish Health

echo Launching backend...
start cmd /k "cd /d %~dp0..\server && npm install && node server.js"

timeout /t 5 /nobreak > NUL

echo Launching frontend...
start cmd /k "cd /d %~dp0..\app && npm install && npm start"

echo Full stack launched.
pause
