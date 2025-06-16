#!/bin/bash

clear
echo ""
echo "    🧛‍♀️ Eternal Hearts: A Ravencroft Romance"
echo "    ═══════════════════════════════════════"
echo ""
echo "    Starting game server..."
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "    ❌ Node.js not found!"
    echo "    Please install Node.js from https://nodejs.org"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

# Build and start the game
echo "    Building game files..."
npm run build
if [ $? -ne 0 ]; then
    echo "    ❌ Build failed!"
    read -p "Press Enter to exit..."
    exit 1
fi

echo "    ✓ Build complete"
echo "    🌹 Starting game server..."
echo ""
echo "    The game will open in your browser automatically."
echo "    Keep this terminal open while playing."
echo ""
echo "    Press Ctrl+C to stop the game."
echo ""

node standalone-launcher.cjs