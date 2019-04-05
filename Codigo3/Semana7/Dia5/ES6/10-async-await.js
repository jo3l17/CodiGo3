let yo = {
    nombre: "joel",
    apellido: "valdez"
}

let getNombreYApellidos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${yo.nombre} ${yo.apellido}`)
        }, 2000);
    })
};

// let saludar = async ()=>{
//     let nombresCompletos= await getNombreYApellidos();
//     console.log(nombresCompletos);
//     /*getNombreYApellidos().then((resultado)=>{
//         nombresCompletos=resultado
//     });*/
//     return nombresCompletos;
// };
let saludar = async () =>{
    // return 1
    throw 'mensaje de error'
};

saludar().then(respuesta =>{
    console.log(respuesta)
}).catch((error)=>{
    console.log(error);
})

// saludar();


let getDatos = async ()=>{
    let respuesta = await getNombreYApellidos();
    console.log(respuesta);
    return respuesta
};
getDatos().then((respuesta)=>{
    console.log("ultima respuesta");
    console.log(respuesta);
});