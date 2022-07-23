 function construir (muro) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            muro.construido = true

            if(muro.construido){
                resolve(muro)       // true
            }else{
                const error = new Error('No se pudo construir') // false
                reject(error)
            }

        }, 1000)
    })
}

function aplanar (muro) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            muro.aplanado = true

            const error = muro.aplanado
            ? null
            : new Error('No se pudo aplanar')

            if (error) {
                reject(error)
                return
            }

            resolve(muro)
        }, 2000)
    })
}

function pintar (muro) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            muro.pintado = true

            const error = muro.pintado
            ? null
            : new Error('No se pudo pintar')

            if (error) return reject(error) // inline if

            resolve(muro)
        }, 2000)
    })
}

/* const promesaDeConstruccion = construir({})
// constante X = ejecutar la funcion({genetar un OBJETO promesa}) 

promesaDeConstruccion
    .then((muroConstruido)=>{console.log('muro Construido: ', muroConstruido)})
    .catch((error)=>{console.error('Error al construir: ', error)}) */

    //  promises hell
    //promesas dentro de promesas dentro de promesas

/*     construir({})
    .then((muroConstruido)=>{
        console.log('muro Construido: ', muroConstruido)

        aplanar(muroConstruido)
            .then((muroAplanado)=>{
                console.log('muro aplanado: ', muroAplanado)
            
                pintar(muroAplanado)
                    .then((muroPintado)=>{
                        console.log('muro pintado: ', muroPintado)
                })
                .catch((error)=>{
                    console.error('Error al pintar: ', error)
                })
            })
            .catch((error)=>{
                console.error('Error al aplanar: ', error)
            })
    })
    .catch((error)=>{
        console.error('Error al construir: ', error)
    }) */




    /* async y await
    async marca a una funcion que se ejecuta asincronamente.
    await espera el resultado de una promesa.

    Una funcion marcada como asincrona regresa una promesa

    para poder usar await nesesitamos una funcion a la que marcaremos
    como asincrona
  
    
  funcion sin await  
   async function principal () {
       const muroConstruido = construir({})
       console.log('muro construido: ', muroConstruido)
   }

   principal()

   Resultado en la TERMINAL
    muro construido:  Promise { <pending> }
*/

async function principal () {
    const muroConstruido = await construir({})
    console.log('muro Construido: ', muroConstruido)

    const muroAplanado = await aplanar(muroConstruido)
    console.log('muro Aplanado: ', muroAplanado)

    const muroPintado = await pintar(muroAplanado)
//  const muroPintado = await pintar(await aplanar( await construir({})))
    console.log('muro Pintado: ', muroPintado)

}

principal()
    .then(() => console.log('Todo cool'))
    .catch((error) => {
        console.error('Algo salio mal: ', error)
    })


filehandle.writeFile(data, options)