// callbacks sintaxis
//  callback functions

function callback (error, data) {
    if(error){
        // Manejar el error
    }
    // Continuar
}


// ¿como se hace una barda?

const ejemploMuro = {
    construido:false,
    aplanado:false,
    pintado:false,
}

function construir (muro) {
    muro.construido = true
    return muro
}

function aplanar (muro) {
    muro.aplanado = true
    return muro
}

function pintar (muro) {
    muro.pintado = true
    return muro
}


const muroConstruido = construir(ejemploMuro)
console.log('muro construido: ', muroConstruido)
const muroAplanar = aplanar(muroConstruido)
console.log('muro aplanado: ', muroAplanar)
const muroPintar = pintar(muroAplanar)
console.log('muro pintado: ', muroPintar)
// proceso asincrono, un proceso detras de otro detras de otro.

console.log('----------------------------')


//  se funge como quien programa la libreria, 
//  haciendo funciones que reciben callbacks

const tiempoDeEspera = 1000

function construir1 (muro, cb) { // function var (property, callback) {
    setTimeout(()=>{
        muro.construido = true  // property.value = true
        cb(false, muro)         // callback(error, property)
    }, tiempoDeEspera)       //esperar 1000 ms
}

function aplanar2 (muro, cb) {
    setTimeout(()=>{
        muro.aplanado = true
        cb(false, muro)
    }, tiempoDeEspera)
}

function pintar3 (muro, cb) {
    setTimeout(()=>{
    muro.pintado = true
    cb(false, muro)
    }, tiempoDeEspera)
}

// Definicion de la funcion
function alConstruir (error, muroConstruido) {
    console.log('muroConstruido1: ', muroConstruido)
}

// la funcion construir recibe la definicion de una funcion
construir1(ejemploMuro, alConstruir)

/*Cuando pasamos una funcion podemos o definir la linia al vuelo
    (error, muroConstruido)=>{
        console.log('muroConstruido1: ', muroConstruido)
    }

"O" definir la funcion aparte 
    function "alConstruir" (error, muroConstruido) {
        console.log('muroConstruido1: ', muroConstruido)
    }

y pasarle la definicion de la funcion
    construir1(ejemploMuro, "alConstruir")

*/

//  se funge como quien la implementa.
//  aqui pasamos el callback
//  Definimos la funcion directamente donde la necesitamos

  construir1(ejemploMuro, (error, muroConstruido)=>{console.log('muroConstruido1: ', muroConstruido)})


/*
callback hell

function(objeto, callback)
callback => Recibe un error como primer parametro 
            y la data como segundo paametro
funcion(objeto, (error, data)=>{})

Lo primero que hay que hacer es verificar si hay un error en 
la ejecucion de la funcion... 
construir1(ejemploMuro, (error, muroConstruido)=>{
*/
construir1({}, (error, muroConstruido)=>{
    if(error) {
        console.error('No se pudo construir')
        return  // salida temprana
        }

    console.log('muro construido: ',muroConstruido)
    aplanar2(muroConstruido, (error, muroAplanado)=>{
        if(error) {
            console.error('No se pudo aplanar')
            return
            }
            console.log('Muro aplanado: ', muroAplanado)
            pintar3(muroAplanado, (error, muroPintado)=>{
            if(error) {
              console.error('No se pudo pintar')
              return
              }
            console.log('Muro pintado: ', muroPintado)
        })
    })
})

/*Falsy en JS: son valores que evaluan a falso cuando hacemos preguntas logicas sobre ellos
Ej. error == true | error == false | error == 'error'

los fasys son valores que cuando preguntamos logicamente sobre ellos 
evaluan directamente a falso
if(false) => false
if(true) => true  // true no es un falsy por que no evalua a un false, se quita de la lista

otro valor cuando preguntamos sobre evala a falso pues 
valores que representan la nada como cadenas vacias
'' => false
null => false
undefined => false
0 => false


por otro lado
truthy en JS: son valores que evaluan a truecuando hacemos preguntas logicas sobre ellos
cualquier valor que no sea falsy es un truthy

[] {} => true // el que ya exista el arreglo o el objeto me dice que existe algo

cualquier numero que sea diferente a cero 
1, 2, 3, -1, -2, -3. => true
'.' => true
true => true
*/