#!/usr/bin/env node

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
  const url = `http://localhost:${PORT}`;
  console.log(`✓ Game server running at ${url}`);
  console.log('🌹 Opening game in your browser...');
  
  // Open browser based on platform
  const command = process.platform === 'darwin' ? 'open' :
                  process.platform === 'win32' ? 'start ""' : 'xdg-open';
  
  exec(`${command} ${url}`, (error) => {
    if (error) {
      console.log(`📱 Please open your browser and visit: ${url}`);
    }
  });
  
  console.log('\n💀 Game is running! Press Ctrl+C to stop.\n');
});

process.on('SIGINT', () => {
  console.log('\n🌙 Shutting down gracefully...');
  server.close(() => process.exit(0));
});