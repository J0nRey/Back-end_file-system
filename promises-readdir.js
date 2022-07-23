const fs = require('fs')

fs.promises.readdir('copiado.txt')
.then(data => console.log('No se que haga: ', data))
.catch(error => console.error('error: ', error))