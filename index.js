const { app, BrowserWindow, ipcMain } = require('electron')
//const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 380,
        height: 600,
        frame: false,
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('main.html')
    win.setResizable(false)

    win.webContents.openDevTools()

    ipcMain.on('minimize', () => {
        win.minimize()
    })

    ipcMain.on('close', () => {
        app.quit()
    })
}

app.whenReady().then(() => {
    createWindow()
    console.log("Window wurde erstellt")
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})