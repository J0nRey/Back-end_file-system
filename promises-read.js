const fs = require('fs')

fs.promises.readFile('Nuevo.txt', 'utf8')
.then(data => console.log('El archivo contiene: ', data))
.catch(error => console.error('error: ', error))