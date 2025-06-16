module.exports = {
  appId: "com.ravencroft.eternal-hearts",
  productName: "Eternal Hearts: A Ravencroft Romance",
  directories: {
    buildResources: "build",
    output: "standalone/electron-dist"
  },
  files: [
    "dist/**/*",
    "electron-main.js",
    "node_modules/**/*",
    "package.json"
  ],
  extraResources: [
    {
      from: "attached_assets",
      to: "assets",
      filter: ["*.png", "*.jpg", "*.jpeg"]
    }
  ],
  win: {
    target: "nsis",
    icon: "attached_assets/splash_1749977043861.png",
    artifactName: "${productName}-Windows-${version}.${ext}"
  },
  mac: {
    target: "dmg",
    icon: "attached_assets/splash_1749977043861.png",
    artifactName: "${productName}-macOS-${version}.${ext}",
    category: "public.app-category.games"
  },
  linux: {
    target: "AppImage",
    icon: "attached_assets/splash_1749977043861.png",
    artifactName: "${productName}-Linux-${version}.${ext}",
    category: "Game"
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: "Eternal Hearts"
  },
  dmg: {
    title: "Eternal Hearts: A Ravencroft Romance",
    icon: "attached_assets/splash_1749977043861.png"
  }
};