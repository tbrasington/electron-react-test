// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer, remote, shell } = require('electron');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let manifest =document.getElementById('chooseComponent').options[document.getElementById('chooseComponent').selectedIndex].value 
    console.log(manifest);

    const { spawn } = require('child_process');
    const ls = spawn('skpm-build',['--run', '--manifest=src/'+manifest]); //, '--manifest:src/manifest2.json'
    ipcRenderer.send('did-submit-form', {});
});
