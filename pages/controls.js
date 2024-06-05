const ipc = require('electron').ipcRenderer

const closeBtn = document.getElementById("btn-shutdown")
const minimizeBtn = document.getElementById("btn-minimize")

closeBtn.addEventListener('click', ()=>{
    ipc.send('close')
})

minimizeBtn.addEventListener('click', () => {
    ipc.send('minimize')
})
