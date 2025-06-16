@echo off
title Eternal Hearts: A Ravencroft Romance
cls
echo.
echo     🧛‍♀️ Eternal Hearts: A Ravencroft Romance
echo     ═══════════════════════════════════════
echo.
echo     Starting game server...
echo.

:: Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo     ❌ Node.js not found!
    echo     Please install Node.js from https://nodejs.org
    echo.
    pause
    exit /b 1
)

:: Build and start the game
echo     Building game files...
call npm run build
if %errorlevel% neq 0 (
    echo     ❌ Build failed!
    pause
    exit /b 1
)

echo     ✓ Build complete
echo     🌹 Starting game server...
echo.
echo     The game will open in your browser automatically.
echo     Keep this window open while playing.
echo.
echo     Press Ctrl+C to stop the game.
echo.

node standalone-launcher.cjs