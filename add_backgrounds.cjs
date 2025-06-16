const fs = require('fs');

// Read the game data file
let content = fs.readFileSync('client/src/data/gameData.ts', 'utf8');

// Define background mapping based on scene content and location
const backgroundMap = {
  'library': '/backgrounds/library.png',
  'music': '/backgrounds/music-room.png', 
  'piano': '/backgrounds/music-room.png',
  'garden': '/backgrounds/garden-courtyard.png',
  'courtyard': '/backgrounds/garden-courtyard.png',
  'outdoor': '/backgrounds/garden-courtyard.png',
  'dining': '/backgrounds/dining-hall.png',
  'meal': '/backgrounds/dining-hall.png',
  'bedroom': '/backgrounds/bedroom.png',
  'private': '/backgrounds/bedroom.png',
  'intimate': '/backgrounds/bedroom.png',
  'entrance': '/backgrounds/gothic-manor-entrance.png',
  'door': '/backgrounds/gothic-manor-entrance.png',
  'arrival': '/backgrounds/gothic-manor-entrance.png'
};

// Default background for most indoor scenes
const defaultBackground = '/backgrounds/grand-hall.png';

// Process scenes and add backgrounds
let processedCount = 0;
const lines = content.split('\n');
let inScene = false;
let sceneHasBackground = false;
let sceneContent = '';
let sceneStartIndex = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect scene start
  if (line.trim().match(/^id:\s*['"][^'"]+['"],?$/)) {
    if (inScene && !sceneHasBackground && sceneStartIndex >= 0) {
      // Add background to previous scene
      const characterLineIndex = findCharacterLine(lines, sceneStartIndex, i);
      if (characterLineIndex >= 0) {
        let backgroundPath = defaultBackground;
        const lowerContent = sceneContent.toLowerCase();
        
        for (const [keyword, path] of Object.entries(backgroundMap)) {
          if (lowerContent.includes(keyword)) {
            backgroundPath = path;
            break;
          }
        }
        
        lines.splice(characterLineIndex + 1, 0, `        background: '${backgroundPath}',`);
        processedCount++;
        i++; // Adjust index for inserted line
      }
    }
    
    inScene = true;
    sceneHasBackground = false;
    sceneContent = '';
    sceneStartIndex = i;
  }
  
  if (inScene) {
    sceneContent += line + '\n';
    if (line.includes('background:')) {
      sceneHasBackground = true;
    }
  }
}

function findCharacterLine(lines, startIndex, endIndex) {
  for (let i = startIndex; i < endIndex && i < lines.length; i++) {
    if (lines[i].trim().match(/^character:\s*characters\./)) {
      return i;
    }
  }
  return -1;
}

// Write the updated content back
fs.writeFileSync('client/src/data/gameData.ts', lines.join('\n'));
console.log(`Added backgrounds to ${processedCount} scenes`);
