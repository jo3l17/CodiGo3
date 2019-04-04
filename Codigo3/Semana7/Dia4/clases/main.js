$(function(){

    var objVehiculo1 = new Vehiculo("QWE-123","Rojo","moto");
    // ejecutando funciones que no retornan valor
    console.log(objVehiculo1);
    console.log(`Placa => ${objVehiculo1.placa}`);
    console.log(`color => ${objVehiculo1.color}`);

    objVehiculo1.imprimirDatos();

    // ejectutando funciones que retornan valor
    console.log(objVehiculo1.getLetrasDePlaca())
    console.log(objVehiculo1.placa)
    console.log(Vehiculo.getFecha().getDay());

    // esto no deberia ser asi, se debe hacer con get y set
    objVehiculo1.color="Azul"
    objVehiculo1.imprimirDatos();
    
    // ejecutando un setter y getter
    objVehiculo1.setColor("Verde");
    console.log(objVehiculo1.getColor());

    // ejecutando un setter ES6
    objVehiculo1.categoria = "Camioneta";
    // ejecutando un getter ES6
    console.log(objVehiculo1.categoria);
    objVehiculo1.imprimirDatos();

    
    // las funciones estaticas son exclusivas de las clases, no de los objetos
    // console.log(objVehiculo1.getFecha().getDay()); ERROR

    var objCamioneta1 = new Camioneta("ACM-007","Verde","Camioneta",true);
    objCamioneta1.imprimirDatosCamioneta();

});