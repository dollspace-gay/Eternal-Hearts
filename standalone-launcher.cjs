#!/usr/bin/env node

const express = require('express');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

// Standalone launcher for Eternal Hearts: A Ravencroft Romance
// This creates a self-contained executable that runs the game locally

const PORT = 3000;
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the main application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

function startServer() {
  const server = app.listen(PORT, 'localhost', () => {
    console.log(`Eternal Hearts: A Ravencroft Romance is starting...`);
    console.log(`Opening game in your default browser...`);
    
    // Open the game in the default browser
    const url = `http://localhost:${PORT}`;
    
    try {
      // Cross-platform browser opening
      if (process.platform === 'darwin') {
        execSync(`open "${url}"`);
      } else if (process.platform === 'win32') {
        execSync(`start "" "${url}"`);
      } else {
        execSync(`xdg-open "${url}"`);
      }
    } catch (error) {
      console.log(`Please open your browser and navigate to: ${url}`);
    }
    
    console.log(`\nGame is running! Close this window to stop the game.`);
    console.log(`If the browser doesn't open automatically, go to: ${url}`);
  });

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\nShutting down game server...');
    server.close(() => {
      process.exit(0);
    });
  });

  process.on('SIGTERM', () => {
    server.close(() => {
      process.exit(0);
    });
  });
}

// Check if dist folder exists
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  console.error('Game files not found! Please ensure the game has been built properly.');
  process.exit(1);
}

startServer();