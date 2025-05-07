@echo off
echo ============================
echo Starting backend setup...
echo ============================

cd backend
echo Installing backend dependencies...
call npm install >nul 2>&1 || rem ignore error
echo Starting backend server in new window...
start cmd /k "npm run dev"

cd ..
echo ============================
echo Starting frontend setup...
echo ============================

cd frontend
echo Installing frontend dependencies...
call npm install >nul 2>&1 || rem ignore error
echo Starting frontend server...
npm run dev
