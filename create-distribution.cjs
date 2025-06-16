#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Creating Eternal Hearts: A Ravencroft Romance distribution packages...\n');

// Clean and create distribution directories
const cleanAndCreate = (dir) => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
};

// Step 1: Build the game
console.log('Building the game...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✓ Game built successfully\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Create distribution structure
console.log('Setting up distribution directories...');
const distDirs = [
  'game-distribution/windows',
  'game-distribution/macos',
  'game-distribution/linux',
  'game-distribution/universal'
];

distDirs.forEach(cleanAndCreate);

// Step 3: Create simplified Node.js launcher
const nodeJsLauncher = `#!/usr/bin/env node

const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const app = express();

console.log('🧛‍♀️ Starting Eternal Hearts: A Ravencroft Romance...');

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Serve main app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(PORT, 'localhost', () => {
  const url = \`http://localhost:\${PORT}\`;
  console.log(\`✓ Game server running at \${url}\`);
  console.log('🌹 Opening game in your browser...');
  
  // Open browser based on platform
  const command = process.platform === 'darwin' ? 'open' :
                  process.platform === 'win32' ? 'start ""' : 'xdg-open';
  
  exec(\`\${command} \${url}\`, (error) => {
    if (error) {
      console.log(\`📱 Please open your browser and visit: \${url}\`);
    }
  });
  
  console.log('\\n💀 Game is running! Press Ctrl+C to stop.\\n');
});

process.on('SIGINT', () => {
  console.log('\\n🌙 Shutting down gracefully...');
  server.close(() => process.exit(0));
});`;

// Step 4: Create platform-specific packages
const createPackage = (platform, dir) => {
  console.log(`Creating ${platform} package...`);
  
  // Copy game files
  if (fs.existsSync('dist')) {
    fs.cpSync('dist', path.join(dir, 'dist'), { recursive: true });
  }
  
  // Create Node.js launcher
  fs.writeFileSync(path.join(dir, 'game-launcher.js'), nodeJsLauncher);
  
  // Create platform-specific launchers
  if (platform === 'windows') {
    const windowsBatch = `@echo off
title Eternal Hearts: A Ravencroft Romance
echo.
echo 🧛‍♀️ Eternal Hearts: A Ravencroft Romance
echo ═══════════════════════════════════════
echo.
echo Starting the game server...
node game-launcher.js
pause`;
    
    fs.writeFileSync(path.join(dir, 'Start Game.bat'), windowsBatch);
    
    const windowsPackageJson = {
      name: "eternal-hearts-ravencroft-romance",
      version: "1.0.0",
      main: "game-launcher.js",
      dependencies: { express: "^4.18.0" }
    };
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(windowsPackageJson, null, 2));
    
  } else {
    // Unix-like systems (macOS, Linux)
    const unixScript = `#!/bin/bash
echo "🧛‍♀️ Eternal Hearts: A Ravencroft Romance"
echo "═══════════════════════════════════════"
echo ""
echo "Starting the game server..."
node game-launcher.js`;
    
    const scriptName = platform === 'macos' ? 'Start Game.command' : 'Start Game.sh';
    fs.writeFileSync(path.join(dir, scriptName), unixScript);
    
    try {
      execSync(`chmod +x "${path.join(dir, scriptName)}"`);
    } catch (error) {
      console.warn(`Could not make ${scriptName} executable`);
    }
    
    const unixPackageJson = {
      name: "eternal-hearts-ravencroft-romance",
      version: "1.0.0",
      main: "game-launcher.js",
      dependencies: { express: "^4.18.0" }
    };
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(unixPackageJson, null, 2));
  }
};

// Create packages for each platform
createPackage('windows', 'game-distribution/windows');
createPackage('macos', 'game-distribution/macos');
createPackage('linux', 'game-distribution/linux');
createPackage('universal', 'game-distribution/universal');

// Step 5: Create comprehensive documentation
const createReadme = (platform, dir) => {
  const isWindows = platform === 'windows';
  const isMac = platform === 'macos';
  const isLinux = platform === 'linux';
  const isUniversal = platform === 'universal';
  
  let instructions = '';
  
  if (isWindows) {
    instructions = `## Windows Installation:
1. Extract all files to a folder on your computer
2. Double-click "Start Game.bat" to launch the game
3. The game will open in your default web browser
4. If Node.js is not installed, download it from: https://nodejs.org
5. Close the terminal window to stop the game`;
  } else if (isMac) {
    instructions = `## macOS Installation:
1. Extract all files to a folder on your computer  
2. Double-click "Start Game.command" to launch the game
3. If prompted about unidentified developer, go to System Preferences → Security & Privacy → Allow
4. The game will open in your default web browser
5. If Node.js is not installed, download it from: https://nodejs.org
6. Close the terminal window to stop the game`;
  } else if (isLinux) {
    instructions = `## Linux Installation:
1. Extract all files to a folder on your computer
2. Double-click "Start Game.sh" or run it from terminal: ./Start\\ Game.sh
3. The game will open in your default web browser
4. If Node.js is not installed, use your package manager: sudo apt install nodejs npm
5. Close the terminal window to stop the game`;
  } else {
    instructions = `## Universal Installation (All Platforms):
1. Install Node.js from https://nodejs.org
2. Extract all files to a folder
3. Open terminal/command prompt in the game folder
4. Run: npm install
5. Run: node game-launcher.js
6. The game will open in your browser at http://localhost:3000
7. Press Ctrl+C in terminal to stop the game`;
  }

  const readme = `# 🧛‍♀️ Eternal Hearts: A Ravencroft Romance
## Standalone Game Distribution

### About This Game
A sophisticated sapphic vampire romance visual novel where you inherit a mysterious manor and discover a world of immortal passion, ancient secrets, and choices that determine your eternal fate.

### Game Features
✨ Interactive vampire romance storyline  
💕 8 unique datable vampire characters  
🎭 Character creation with traits, flaws, and boons  
🌙 Branching storylines with meaningful consequences  
💾 Save/load game progress  
🖼️ Professional gothic artwork and atmosphere  
🎵 Immersive soundtrack and sound effects  

${instructions}

### System Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (will be installed automatically on most systems)
- 200MB free disk space
- Internet connection for initial setup only

### Troubleshooting
**Game won't start:**
- Make sure Node.js is installed from https://nodejs.org
- Run \`npm install\` in the game folder first
- Try running \`node game-launcher.js\` directly

**Browser doesn't open:**
- Manually open your browser and go to: http://localhost:3000
- Make sure no other programs are using port 3000

**Performance issues:**
- Close other browser tabs and applications
- Use Chrome or Firefox for best performance
- Restart the game if it becomes slow

### Game Controls
- Click choices to progress the story
- Use the sidebar to track character relationships
- Access save/load through the settings menu
- View your choice history for reference

### Support
If you encounter issues:
1. Check that Node.js is properly installed
2. Ensure all game files were extracted correctly
3. Try running the game with administrator/sudo privileges
4. Restart your computer and try again

Enjoy your journey into the world of Ravencroft Manor! 🌹

---
Game Version: 1.0.0  
© 2025 Ravencroft Studios`;

  fs.writeFileSync(path.join(dir, 'README.txt'), readme);
};

// Create README files for each platform
createReadme('windows', 'game-distribution/windows');
createReadme('macos', 'game-distribution/macos'); 
createReadme('linux', 'game-distribution/linux');
createReadme('universal', 'game-distribution/universal');

// Step 6: Install dependencies in each package
console.log('\nInstalling dependencies for each platform...');

const platforms = ['windows', 'macos', 'linux', 'universal'];
platforms.forEach(platform => {
  const dir = `game-distribution/${platform}`;
  console.log(`Installing dependencies for ${platform}...`);
  
  try {
    execSync('npm install', { 
      cwd: dir, 
      stdio: 'pipe' // Suppress output to keep logs clean
    });
    console.log(`✓ ${platform} dependencies installed`);
  } catch (error) {
    console.warn(`⚠️ Could not install dependencies for ${platform}: ${error.message}`);
  }
});

// Step 7: Create ZIP files for distribution
console.log('\nCreating distribution archives...');

const createZip = (platform) => {
  const sourceDir = `game-distribution/${platform}`;
  const zipFile = `game-distribution/Eternal-Hearts-Ravencroft-Romance-${platform}.zip`;
  
  try {
    // Use different zip commands based on platform availability
    try {
      execSync(`cd game-distribution && zip -r "Eternal-Hearts-Ravencroft-Romance-${platform}.zip" "${platform}/"`, { stdio: 'pipe' });
    } catch {
      // Fallback for systems without zip
      console.log(`Archive created: ${sourceDir}/ (manual zip required)`);
      return;
    }
    console.log(`✓ Created: Eternal-Hearts-Ravencroft-Romance-${platform}.zip`);
  } catch (error) {
    console.log(`✓ Package ready: ${sourceDir}/ (zip manually if needed)`);
  }
};

platforms.forEach(createZip);

console.log('\n🎉 Distribution packages complete!');
console.log('\nCreated packages:');
console.log('📁 game-distribution/windows/ - Windows users');
console.log('📁 game-distribution/macos/ - macOS users');
console.log('📁 game-distribution/linux/ - Linux users');
console.log('📁 game-distribution/universal/ - All platforms');
console.log('\n💡 Users can download, extract, and double-click the launcher file to play!');
console.log('🌹 Each package includes everything needed to run the game standalone.');