let promesa = () => {
    return new Promise((resolve, reject) => {
        // todo mi codigo asincrono
        // tanto a la funcion resolve como reject
        // se puede enviar 1 parametro como maximo.
        // Dar una respuesta positiva
        // resolve("BIEN");
        // Dar una respuesta negativa
        // reject("MAl");
        setTimeout(()=>{
            resolve("Promesa Finalizada")
        },3000);
    });
}
// then() => responde a la ejecucion de la funcion
// resolve() => enviada desde la promesa

// carch() => responde a la ejecucion de la funcion
// reject()=> enviada desde la promesa
promesa().then((respuesta) => {
    console.log(respuesta);
    console.log("linea 2");
    
}).catch((respuesta) => {
    console.log(respuesta);
    
});
