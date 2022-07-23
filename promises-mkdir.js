const fs = require('fs')

fs.promises.mkdir('pruebaMKDIR')
.then(() => console.log('Carpeta creada con exito desde file-system/promises-mkdir.js'))
.catch(error => console.error('error: ', error))