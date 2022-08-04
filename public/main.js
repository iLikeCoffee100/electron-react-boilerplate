const { app, BrowserWindow } = require("electron");
const { ipcMain } = require("electron");
const path = require("path");
const robot = require("robotjs");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    title: "Specidex AutoJob Bot",
    frame: true,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      // enableRemoteModule: true,
      // contextIsolation: true,
      preload: path.join(__dirname + "/preload.js"),
    },
  });

  //load the index.html from a url
  win.loadURL("http://localhost:3000");

  console.log(process.versions);

  // Open the DevTools.
  win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on("anything-asynchronous", (event, arg) => {
  //execute tasks on behalf of renderer process
  console.log(arg); // prints "ping"
  fuck();
});

// Speed up the mouse.
const fuck = () => {
  robot.setMouseDelay(2);

  var twoPI = Math.PI * 2.0;
  var screenSize = robot.getScreenSize();
  var height = screenSize.height / 2 - 10;
  var width = screenSize.width;

  for (var x = 0; x < width; x++) {
    let y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
  }
};
