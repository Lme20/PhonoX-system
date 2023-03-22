//#     # ### ####### #     #     #####  ####### ####### #     # ######  
//#     #  #  #       #  #  #    #     # #          #    #     # #     # 
//#     #  #  #       #  #  #    #       #          #    #     # #     # 
//#     #  #  #####   #  #  #     #####  #####      #    #     # ######  
 //#   #   #  #       #  #  #          # #          #    #     # #       
  //# #    #  #       #  #  #    #     # #          #    #     # #       
   //#    ### #######  ## ##      #####  #######    #     #####  #   
/** ----------------------DESCRIPTION--------------------------*
 * This section of the code sets up the Electron window and loads
 * the main HTML file for the UI of the PhonoX system application.
 * From here, Vue components and other libraries can be imported
 * and used to build the various views and functionality of the app.
 ** -----------------------------------------------------------*/

import { app, BrowserWindow } from 'electron';

//Handles application logic

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let menuWindow;

const electron = require('electron');
const path = require('path');

// Set the path for the invisible icon
const invisibleIconPath = path.join(__dirname, './renderer/assets/img/icons/png/64x64.png');

// Set the app icon to a transparent icon
const invisibleIcon = electron.nativeImage.createFromPath(invisibleIconPath);
app.dock.setIcon(invisibleIcon);

const createWindow = () => {
  // Create the browser window.
  menuWindow = new BrowserWindow({
    width: 1152,
    height: 864,
    icon: path.join(__dirname, './renderer/assets/img/icons/png/64x64.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  menuWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  menuWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  menuWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    menuWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow);

app.on('ready', () => {
  // Set the app icon to a transparent icon
  const iconPath = path.join(__dirname, './renderer/assets/img/icons/png/64x64.png');
  const image = electron.nativeImage.createFromPath(iconPath);
  //app.dock.setIcon(invisibleIcon);
  app.dock.setIcon(image);

  createWindow();

});


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (menuWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
