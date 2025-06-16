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

// Find all scene blocks that don't have backgrounds
const sceneRegex = /{\s*id:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"][^}]*?(?={\s*id:|$)/gs;
let matches;
let processedCount = 0;

while ((matches = sceneRegex.exec(content)) !== null) {
  const sceneBlock = matches[0];
  const sceneId = matches[1];
  const sceneTitle = matches[2];
  
  // Skip if already has background
  if (sceneBlock.includes('background:')) {
    continue;
  }
  
  // Skip character definitions (not actual scenes)
  if (sceneId === 'lilith' || sceneId === 'morgana' || sceneId === 'seraphina' || 
      sceneId === 'valentina' || sceneId === 'celeste' || sceneId === 'raven' || 
      sceneId === 'isadora' || sceneId === 'luna' || sceneId === 'elena' || 
      sceneId === 'umbra' || sceneId === 'chapter1' || sceneId === 'chapter2') {
    continue;
  }
  
  // Determine appropriate background
  let backgroundPath = defaultBackground;
  const lowerText = (sceneBlock + sceneTitle).toLowerCase();
  
  for (const [keyword, path] of Object.entries(backgroundMap)) {
    if (lowerText.includes(keyword)) {
      backgroundPath = path;
      break;
    }
  }
  
  // Add background to scene
  const characterMatch = sceneBlock.match(/character:\s*characters\.[^,]+,/);
  if (characterMatch) {
    const newSceneBlock = sceneBlock.replace(
      characterMatch[0],
      characterMatch[0] + '\n        background: \'' + backgroundPath + '\','
    );
    content = content.replace(sceneBlock, newSceneBlock);
    processedCount++;
  }
}

// Write the updated content back
fs.writeFileSync('client/src/data/gameData.ts', content);
console.log(`Added backgrounds to ${processedCount} scenes`);
