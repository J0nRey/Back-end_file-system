const fs = require('fs')

fs.promises.writeFile('NEW.txt', 'Se crea archivo nuevo')
.then(() => {console.log('Se creo correctamente ')})
.catch(error => console.error('error: ', error))