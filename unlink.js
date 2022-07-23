const fs = require('fs')

fs.unlink('created.txt', (error) => {
    if (error) {
        console.error('error:', error) 
       return
      }
  console.log('La data fue eliminada!')
})