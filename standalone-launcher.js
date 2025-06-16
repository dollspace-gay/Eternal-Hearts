#!/usr/bin/env node

import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIME type mapping
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function serveFile(filePath, res) {
  try {
    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }

    const data = fs.readFileSync(filePath);
    const mimeType = getMimeType(filePath);
    
    res.writeHead(200, { 
      'Content-Type': mimeType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  } catch (error) {
    console.error('Error serving file:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal server error');
  }
}

function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // Handle root path
    if (pathname === '/') {
      pathname = '/index.html';
    }

    // Remove leading slash
    if (pathname.startsWith('/')) {
      pathname = pathname.substring(1);
    }

    // Construct file path
    let filePath;
    
    // Check if it's a static asset
    if (pathname.startsWith('assets/') || pathname.startsWith('backgrounds/')) {
      filePath = path.join(__dirname, 'public', pathname);
    } else if (pathname === 'index.html') {
      filePath = path.join(__dirname, 'public', 'index.html');
    } else {
      // For API routes or other paths, serve index.html (SPA behavior)
      filePath = path.join(__dirname, 'public', 'index.html');
    }

    serveFile(filePath, res);
  });

  return server;
}

function startGame() {
  const PORT = 3000;
  const server = createServer();
  
  server.listen(PORT, '127.0.0.1', () => {
    console.log(`🎮 Eternal Hearts: A Ravencroft Romance`);
    console.log(`📡 Game server running at http://localhost:${PORT}`);
    console.log(`🌟 Open your web browser and navigate to the URL above to play!`);
    console.log(`💀 Press Ctrl+C to stop the game server`);
  });

  // Open browser automatically on supported platforms
  const opener = {
    darwin: 'open',
    win32: 'start',
    linux: 'xdg-open'
  };
  
  const command = opener[process.platform];
  if (command) {
    setTimeout(() => {
      exec(`${command} http://localhost:${PORT}`, (error) => {
        if (error) {
          console.log('Note: Could not automatically open browser. Please manually navigate to http://localhost:3000');
        }
      });
    }, 1000);
  }

  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down game server...');
    server.close(() => {
      console.log('👋 Game server stopped. Thank you for playing!');
      process.exit(0);
    });
  });
}

// Start the game if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startGame();
}

export { startGame, createServer };