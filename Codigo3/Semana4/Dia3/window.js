//Window => representa al navegador
// funcion location => obtiene la ruta actual de la url

document.write(window.location);
var url = window.location.toString();
if(url.indexOf("windows.html")!=1){
    console.log("estas en window.html");
}else{
    console.log("no estas en windows.html");
}
// innerWidth => Devuelve el ancho de la ventana en pixeles
// innerHeigth => Devuelve el alto de la ventana en pixeles
document.write(`<p>ancho de la ventana => ${window.innerWidth}</p>`);
document.write(`<p>alto de la ventana => ${window.innerHeight}</p>`);
document.write(`<p>obtener el despazamiento del navegador en el eje x ${window.scrollX}</p>`);
document.write(`<p>obtener el despazamiento del navegador en el eje y ${window.scrollY}</p>`);
// settimeOut(funcion,milisegundos)
// Ejecuta la funcion tras la cantidad de milisegundos que han pasado
var y=0;
setTimeout(function(){
        y=window.scrollY;
        console.log(y);
    }, 2000);

// setInterval(function,milisegundos)
// Ejeccuta la funcion cada cantidad de milisegundos;
var intervalo = setInterval(function(){
    console.log(new Date());
},500)
//clearInterval([Instancia de setInterval])
//termina el proceso de setInterval
setTimeout(function(){
    clearInterval(intervalo);
},5000);
console.log("codigo sincrono");



//open(url)=>Carga la pagina con una nueva direccion url
var miFuncion = function(){
    open('https://www.fb.com');
}
setTimeout(miFuncion,2000);