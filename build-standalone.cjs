#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Eternal Hearts: A Ravencroft Romance for standalone distribution...\n');

// Step 1: Build the frontend
console.log('1. Building frontend...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✓ Frontend built successfully\n');
} catch (error) {
  console.error('❌ Frontend build failed');
  process.exit(1);
}

// Step 2: Create standalone directory structure
console.log('2. Creating standalone distribution...');
const standaloneDirs = [
  'standalone/windows',
  'standalone/macos', 
  'standalone/linux',
  'standalone/universal'
];

standaloneDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Step 3: Copy built files to standalone directories
console.log('3. Copying game files...');
const copyFiles = (targetDir) => {
  // Copy dist folder
  execSync(`cp -r dist "${targetDir}/"`, { stdio: 'inherit' });
  
  // Copy launcher
  execSync(`cp standalone-launcher.js "${targetDir}/"`, { stdio: 'inherit' });
  
  // Copy necessary package files
  const packageJson = {
    name: "eternal-hearts-ravencroft-romance",
    version: "1.0.0",
    description: "A standalone vampire romance visual novel",
    main: "standalone-launcher.js",
    scripts: {
      start: "node standalone-launcher.js"
    },
    dependencies: {
      express: "^4.18.0"
    }
  };
  
  fs.writeFileSync(
    path.join(targetDir, 'package.json'), 
    JSON.stringify(packageJson, null, 2)
  );
};

// Copy to universal directory first
copyFiles('standalone/universal');

console.log('✓ Game files copied successfully\n');

// Step 4: Create platform-specific executables using pkg
console.log('4. Creating platform executables...');

const targets = [
  { platform: 'linux', target: 'node18-linux-x64', dir: 'standalone/linux', exe: 'EternalHearts-Linux' },
  { platform: 'windows', target: 'node18-win-x64', dir: 'standalone/windows', exe: 'EternalHearts-Windows.exe' },
  { platform: 'macos', target: 'node18-macos-x64', dir: 'standalone/macos', exe: 'EternalHearts-macOS' }
];

targets.forEach(({ platform, target, dir, exe }) => {
  console.log(`Building for ${platform}...`);
  try {
    // Copy files to platform directory
    copyFiles(dir);
    
    // Create executable
    execSync(
      `npx pkg standalone-launcher.js --target ${target} --output "${dir}/${exe}"`,
      { stdio: 'inherit' }
    );
    
    console.log(`✓ ${platform} executable created`);
  } catch (error) {
    console.warn(`⚠️  Could not create ${platform} executable (${error.message})`);
  }
});

// Step 5: Create simple batch/shell scripts for universal version
console.log('\n5. Creating universal launcher scripts...');

// Windows batch file
const windowsBatch = `@echo off
echo Starting Eternal Hearts: A Ravencroft Romance...
node standalone-launcher.js
pause`;

fs.writeFileSync('standalone/universal/Start-Game-Windows.bat', windowsBatch);

// Unix shell script
const unixScript = `#!/bin/bash
echo "Starting Eternal Hearts: A Ravencroft Romance..."
node standalone-launcher.js`;

fs.writeFileSync('standalone/universal/Start-Game-Unix.sh', unixScript);

// Make Unix script executable
try {
  execSync('chmod +x standalone/universal/Start-Game-Unix.sh');
} catch (error) {
  console.warn('Could not make Unix script executable');
}

// Step 6: Create README files
console.log('6. Creating documentation...');

const readmeContent = `# Eternal Hearts: A Ravencroft Romance
## Standalone Game Distribution

### System Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 100MB free disk space

### Installation Instructions

#### Windows Users:
1. Extract all files to a folder
2. Double-click "EternalHearts-Windows.exe" to start the game
   OR
3. If executable doesn't work, double-click "Start-Game-Windows.bat"

#### macOS Users:
1. Extract all files to a folder  
2. Double-click "EternalHearts-macOS" to start the game
   OR
3. If executable doesn't work, open Terminal, navigate to the game folder, and run:
   ./Start-Game-Unix.sh

#### Linux Users:
1. Extract all files to a folder
2. Double-click "EternalHearts-Linux" to start the game
   OR  
3. If executable doesn't work, open terminal, navigate to the game folder, and run:
   ./Start-Game-Unix.sh

### Universal Version (Requires Node.js):
If the platform-specific executables don't work:
1. Install Node.js from https://nodejs.org
2. Extract the "universal" folder
3. Open terminal/command prompt in that folder
4. Run: npm install
5. Run: npm start

### Troubleshooting:
- If the game doesn't open in your browser automatically, open any browser and go to: http://localhost:3000
- Close the game window/terminal to stop the game server
- Make sure no other programs are using port 3000

### Game Features:
- Interactive vampire romance visual novel
- Character creation with traits, flaws, and boons
- Branching storylines with meaningful choices
- Save/load game progress
- 8 unique datable vampire characters
- Gothic atmosphere with professional artwork

Enjoy your journey into the world of Ravencroft Manor!`;

// Create README for each platform
[...standaloneDirs, 'standalone/universal'].forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'README.txt'), readmeContent);
  }
});

console.log('✓ Documentation created\n');

console.log('🎉 Standalone distribution complete!');
console.log('\nDistribution files created in:');
console.log('- standalone/windows/ - Windows executable');
console.log('- standalone/macos/ - macOS executable'); 
console.log('- standalone/linux/ - Linux executable');
console.log('- standalone/universal/ - Cross-platform Node.js version');
console.log('\nUsers can now download and run the game by double-clicking the executable files!');