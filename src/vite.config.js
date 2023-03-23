const { defineConfig } = require('vite');
const { createElectronLauncher } = require('vitejs-electron');

module.exports = defineConfig({
  mode: 'development',
  devServer: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  build: {
    outDir: 'dist',
    target: 'electron-renderer',
    emptyOutDir: true,
  },
  plugins: [
    createElectronLauncher({
      // Options for electron-builder
      // https://www.electron.build/configuration/configuration
      // https://www.electron.build/multi-platform-build
    })
  ]
});

  