const fs = require('fs')

fs.promises.writeFile('created.txt', 'Hola...')
.then(() => {
    console.log('Todo cool')
})
.catch( error => console.error('error: ', error))

async function principal () {
//  Agregados a la carpeta raiz
    await fs.promises.writeFile('created.txt', 'Hola . . . ' )
    await fs.promises.appendFile('created.txt', 'agregado . . .')
}

principal()
    .then(()=>console.log('Creado y modificado'))
    .catch(error => console.error('error: ', error))


/* 
Por cada funcion deberiamos tener un script ejecutable fs.promises
fs.readFile     *
fs.appendFile   *
fs.unlink       *
fs.copyFile     *
mkdir           
rmdir <- Si funciona solo con carpetas vacias
readdir*/ 