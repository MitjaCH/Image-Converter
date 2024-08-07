const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const Jimp = require('jimp');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Image Converter',
        icon: path.join(__dirname, 'assets/icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
    Menu.setApplicationMenu(null);
}

app.on('ready', createWindow);

ipcMain.handle('convert-image', async (event, { filePath, format }) => {
    try {
        const image = await Jimp.read(filePath);
        const outputFile = path.join(path.dirname(filePath), `output.${format}`);
        await image.writeAsync(outputFile);
        return outputFile;
    } catch (error) {
        console.error('Error converting image:', error);
        return null;
    }
});
