const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Creating final distribution packages for Eternal Hearts...\n');

// Create a complete standalone distribution
const createFinalPackage = () => {
  // Clean and create final distribution
  const finalDir = 'EternalHearts-Standalone';
  if (fs.existsSync(finalDir)) {
    fs.rmSync(finalDir, { recursive: true, force: true });
  }
  fs.mkdirSync(finalDir, { recursive: true });

  // Copy built game files
  if (fs.existsSync('dist')) {
    fs.cpSync('dist', path.join(finalDir, 'dist'), { recursive: true });
  }

  // Create embedded launcher with Express bundled
  const embeddedLauncher = `const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { exec } = require('child_process');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

console.log('🧛‍♀️ Starting Eternal Hearts: A Ravencroft Romance...');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Default to index.html for root and unknown paths
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }
  
  // Remove leading slash and construct file path
  const filePath = path.join(__dirname, 'dist', 'public', pathname.slice(1));
  
  // Check if file exists
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If file not found, serve index.html (SPA routing)
      const indexPath = path.join(__dirname, 'dist', 'public', 'index.html');
      fs.readFile(indexPath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      return;
    }
    
    // Get file extension and corresponding MIME type
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, 'localhost', () => {
  const gameUrl = \`http://localhost:\${PORT}\`;
  console.log(\`✓ Game server running at \${gameUrl}\`);
  console.log('🌹 Opening game in your browser...');
  
  // Open browser based on platform
  const openCommand = process.platform === 'darwin' ? 'open' :
                     process.platform === 'win32' ? 'start ""' : 'xdg-open';
  
  exec(\`\${openCommand} \${gameUrl}\`, (error) => {
    if (error) {
      console.log(\`📱 Please open your browser and visit: \${gameUrl}\`);
    }
  });
  
  console.log('\\n💀 Game is running! Press Ctrl+C to stop.\\n');
});

process.on('SIGINT', () => {
  console.log('\\n🌙 Shutting down gracefully...');
  server.close(() => process.exit(0));
});`;

  fs.writeFileSync(path.join(finalDir, 'game-launcher.js'), embeddedLauncher);

  // Create Windows batch launcher
  const windowsLauncher = `@echo off
title Eternal Hearts: A Ravencroft Romance
cls
echo.
echo     🧛‍♀️ Eternal Hearts: A Ravencroft Romance
echo     ═══════════════════════════════════════
echo.

:: Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo     ❌ Node.js is required to run this game.
    echo.
    echo     Please download and install Node.js from:
    echo     https://nodejs.org
    echo.
    echo     After installing Node.js, restart your computer
    echo     and try running this game again.
    echo.
    pause
    exit /b 1
)

echo     🌹 Starting game server...
echo.
echo     The game will open in your browser automatically.
echo     Keep this window open while playing.
echo.
echo     Press Ctrl+C to stop the game.
echo.

node game-launcher.js`;

  fs.writeFileSync(path.join(finalDir, 'Start Game - Windows.bat'), windowsLauncher);

  // Create macOS launcher
  const macLauncher = `#!/bin/bash

clear
echo ""
echo "    🧛‍♀️ Eternal Hearts: A Ravencroft Romance"
echo "    ═══════════════════════════════════════"
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "    ❌ Node.js is required to run this game."
    echo ""
    echo "    Please download and install Node.js from:"
    echo "    https://nodejs.org"
    echo ""
    echo "    After installing Node.js, restart your computer"
    echo "    and try running this game again."
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

echo "    🌹 Starting game server..."
echo ""
echo "    The game will open in your browser automatically."
echo "    Keep this terminal open while playing."
echo ""
echo "    Press Ctrl+C to stop the game."
echo ""

node game-launcher.js`;

  fs.writeFileSync(path.join(finalDir, 'Start Game - macOS.command'), macLauncher);

  // Create Linux launcher
  const linuxLauncher = `#!/bin/bash

clear
echo ""
echo "    🧛‍♀️ Eternal Hearts: A Ravencroft Romance"
echo "    ═══════════════════════════════════════"
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "    ❌ Node.js is required to run this game."
    echo ""
    echo "    Please install Node.js using your package manager:"
    echo "    Ubuntu/Debian: sudo apt install nodejs npm"
    echo "    Fedora: sudo dnf install nodejs npm"
    echo "    Arch: sudo pacman -S nodejs npm"
    echo ""
    echo "    Or download from: https://nodejs.org"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

echo "    🌹 Starting game server..."
echo ""
echo "    The game will open in your browser automatically."
echo "    Keep this terminal open while playing."
echo ""
echo "    Press Ctrl+C to stop the game."
echo ""

node game-launcher.js`;

  fs.writeFileSync(path.join(finalDir, 'Start Game - Linux.sh'), linuxLauncher);

  // Make Unix scripts executable
  try {
    execSync(`chmod +x "${path.join(finalDir, 'Start Game - macOS.command')}"`);
    execSync(`chmod +x "${path.join(finalDir, 'Start Game - Linux.sh')}"`);
  } catch (error) {
    console.warn('Could not make Unix scripts executable');
  }

  // Create comprehensive README
  const readme = `# 🧛‍♀️ Eternal Hearts: A Ravencroft Romance
## Standalone Game Distribution

### About This Game
A sophisticated sapphic vampire romance visual novel where you inherit the mysterious Ravencroft Manor and discover a world of immortal passion, ancient secrets, and choices that determine your eternal fate.

### Game Features
✨ Interactive vampire romance storyline with 8 unique characters
💕 Character creation system with traits, flaws, and boons  
🎭 Branching storylines with meaningful consequences
🌙 Professional gothic artwork and atmospheric backgrounds
💾 Save/load game progress locally
🖼️ Immersive visual novel experience

### Quick Start Instructions

#### Windows Users:
1. Extract all files to a folder on your computer
2. Double-click "Start Game - Windows.bat"
3. The game will open in your default web browser

#### macOS Users:
1. Extract all files to a folder on your computer
2. Double-click "Start Game - macOS.command"
3. If prompted about security, go to System Preferences → Security & Privacy → Allow
4. The game will open in your default web browser

#### Linux Users:
1. Extract all files to a folder on your computer
2. Double-click "Start Game - Linux.sh" or run it from terminal
3. The game will open in your default web browser

### System Requirements
- Node.js (download from https://nodejs.org if not installed)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 200MB free disk space
- No internet connection required after setup

### Troubleshooting

**"Node.js not found" error:**
- Download and install Node.js from https://nodejs.org
- Restart your computer after installation
- Try running the game again

**Game doesn't open in browser:**
- Manually open your browser and go to: http://localhost:3000
- Make sure no other programs are using port 3000

**Performance issues:**
- Close other browser tabs and applications
- Use Chrome or Firefox for best performance
- Restart the game if it becomes slow

### How to Play
1. Start with character creation to define your abilities
2. Read the story text and make choices by clicking buttons
3. Track character relationships in the sidebar
4. Save your progress through the settings menu
5. Explore different story paths by making different choices

### Technical Details
- The game runs a local web server on your computer
- All data is stored locally - no internet required
- Your saves are kept in your browser's local storage
- The game uses port 3000 by default

### Support
If you encounter technical issues:
1. Make sure Node.js is installed and up to date
2. Ensure all game files were extracted properly
3. Try running with administrator/sudo privileges
4. Check that no firewall is blocking the game

---
Game Version: 1.0.0
Enjoy your journey into the world of Ravencroft Manor! 🌹`;

  fs.writeFileSync(path.join(finalDir, 'README.txt'), readme);

  console.log('✓ Final distribution package created');
  return finalDir;
};

// Build the game first
console.log('Building game...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✓ Build completed\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Create final package
const packageDir = createFinalPackage();

console.log('🎉 Distribution complete!');
console.log(`\nStandalone game package created: ${packageDir}/`);
console.log('\nContents:');
console.log('📁 dist/ - Game files');
console.log('📄 game-launcher.js - Game server');
console.log('🪟 Start Game - Windows.bat - Windows launcher');
console.log('🍎 Start Game - macOS.command - macOS launcher');
console.log('🐧 Start Game - Linux.sh - Linux launcher');
console.log('📖 README.txt - Installation instructions');
console.log('\n💡 Users can download, extract, and double-click their platform launcher to play!');
console.log('🌹 No additional dependencies required beyond Node.js.');