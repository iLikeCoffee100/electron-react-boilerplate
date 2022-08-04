const { contextBridge,ipcRenderer } = require('electron')
// const robotjs = require('robotjs')


contextBridge.exposeInMainWorld('electron', {
  ipcRenderer,
})

// window.ipcRenderer = require('electron').ipcRenderer;

