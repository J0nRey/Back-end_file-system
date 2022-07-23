const fs = require('fs')

fs.readFile('Nuevo.txt', 'utf8', (error, data) => {
  if (error) {
      console.error('error:', error) 
     return
    }
  console.log(data)
})

