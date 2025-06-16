const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const express = require('express');
const { spawn } = require('child_process');

// Electron wrapper for Eternal Hearts: A Ravencroft Romance
// Provides a native desktop experience

let mainWindow;
let serverProcess;
const PORT = 3000;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    icon: path.join(__dirname, 'assets', 'icon.png'), // Optional game icon
    title: 'Eternal Hearts: A Ravencroft Romance',
    show: false, // Don't show until ready
    titleBarStyle: 'default'
  });

  // Remove menu bar for a cleaner game experience
  Menu.setApplicationMenu(null);

  // Start the Express server
  startGameServer().then(() => {
    // Load the game
    mainWindow.loadURL(`http://localhost:${PORT}`);
    
    // Show window when ready
    mainWindow.once('ready-to-show', () => {
      mainWindow.show();
      
      // Focus the window
      if (process.platform === 'darwin') {
        app.dock.show();
      }
    });
  }).catch(error => {
    console.error('Failed to start game server:', error);
    app.quit();
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
    if (serverProcess) {
      serverProcess.kill();
    }
  });

  // Handle external links (open in default browser)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    require('electron').shell.openExternal(url);
    return { action: 'deny' };
  });
}

function startGameServer() {
  return new Promise((resolve, reject) => {
    const app = express();
    
    // Serve static files from dist directory
    app.use(express.static(path.join(__dirname, 'dist')));
    
    // Serve main app for all routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
    
    const server = app.listen(PORT, 'localhost', (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`Game server running on port ${PORT}`);
        resolve();
      }
    });
    
    // Store server reference for cleanup
    serverProcess = server;
  });
}

// App event handlers
app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', () => {
    // On macOS, re-create window when dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // On macOS, keep app running even when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  // Clean up server when quitting
  if (serverProcess) {
    serverProcess.close();
  }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    require('electron').shell.openExternal(navigationUrl);
  });
});