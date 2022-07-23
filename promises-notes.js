// las promesas son objetos

//  Constructor : Funciones que forman objetos

//  resolved = funcion
//  Pasa la promesa de pendiente a resuelto

//  reject = funcion
//  pasa la promesa de pendiente a rechazado

const promise = new Promise((resolve, reject) => {
    const todoCool = true
    if(todoCool){
        resolve('ok')   // 'true'
    }else{
        reject('Not ok :c') // 'false'
    }
})

/* Los objetos promesa tienen dos metodos:
 -then se ejecuta cuando la preomesa se resuelve satisfactoriamente
    La funcion then tambien recibe loq ue le pasamos a la funcion resolve
 -catch que se ejecuta cuando la promesa se rechaza
    Va a recivir lo que le pasamos a la funcion reject

promesa.then(() => {})
promesa.catch(() => {}) */

//Sintaxis
//como el metodo .then regresa la misma promesa podemos hacerle .catch tambien
promise
    .then((resultado) => { console.log(resultado) }) // 'ok'
    .catch((error) => { console.error(error) }) // 'Not ok :c'
