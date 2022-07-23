const fs = require('fs')

//fs.promises.rmdir('pruebaMKDIR', ['recursive: true', 'force: true'])
fs.promises.rmdir('pruebaMKDIR') // solo borra la carpeta bacia
.then(() => console.log('Carpeta eliminada con exito desde file-system/promises-mkdir.js'))
.catch(error => console.error('error: ', error))

//PENDIENTE