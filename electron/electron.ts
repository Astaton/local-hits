import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  //Create the browser window.electron
  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true, // <--- flag
      nodeIntegrationInWorker: true // <---  for web workers
    },
    width: 800
  });

  //and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.maximize();

  //Open the DevTools like chrome ctr + shift + j
  // mainWindow.webContents.openDevTools();

  //Emitted when the window is closed
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

//This method will be called when Electron has finished
//initialized and is ready to create browser windows.
//Some APIs can only be used after this event occurs.
app.on("ready", () => {
  //On OS X it is common for applications and their menu bar
  //to stay active until the user quits explictly with Cmd + Q
  if (process.platform !== "darwin") {
    createWindow();
  }
});
