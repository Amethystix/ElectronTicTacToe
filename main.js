const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
var ipc = require('electron').ipcMain;
const tictac = require('./tictactoe.js');

let win;

function createWindow(){
	//Create browser window
	win = new BrowserWindow({width: 800, height: 600});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'mainPage.html'),
		protocol: 'file',
		slashes: true
	}));

	win.webContents.on('did-finish-load', ()=> {
		win.webContents.executeJavaScriptCode(tictac.main());
	});


	win.on('closed', ()=>{
		//Delete the window
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () =>{

	if(process.platform !== 'darwin'){
		app.quit();
	}
});

app.on('activate', () => {
	if(win === null){
		createWindow();
	}
});
