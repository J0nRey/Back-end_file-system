# Back-end_file-system
File System, CallBack, promises, fs require, functions

text.js

//  fs: es la libreria o Modulo que nos ayuda a manejar el file-system de muestra computadora o nuestro servidor
//      require: funcion que se utiliza para importar modulos en nuestro codigo
//          'fs': parametro y es el nombre o la ruta del modilo que queremos usar en nuestro script y nos regresa ese modulo y podemos guardarlo en una constante
//  fs.writeFile(): escribir un archivo

const fs = require('fs')

fs.writeFile('created.txt', 'Hola desde node fs file-systen/test', 'utf8', (error) => {

    if (error) {
        console.error('No se pudo crear el archivo ', error)
        return
    }

    console.log('Se escribio el archivo')
})

/* Por cada funcion deberiamos tener un script ejecutable

fs.readFile
fs.appendFile
fs.unlink
fs.copyFile */
