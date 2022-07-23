const fs = require('fs')

fs.appendFile('created.txt','Creado desde node file-system/append.js', (error) => {
    if (error) {
        console.error('error:', error) 
       return
      }
  console.log('La data fue agregada!')
})