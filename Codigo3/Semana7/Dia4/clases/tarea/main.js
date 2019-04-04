$(function () {
    var objVehiculo = new Vehiculo("123-pkd", "Rojo", "MOTO");
    //Ejecutando funciones que no retornan valor
    objVehiculo.imprimiDatos();
    //Ejecutando funciones que retornan valor
    console.log(objVehiculo.getLetrasDePlaca());
    console.log(Vehiculo.getFecha().getDay());

    //ejecutando el set del color
    objVehiculo.setColor("Azul");
    console.log(objVehiculo.getColor());

    //ejecutando get y set por ES6
    objVehiculo.categoria="Camioneta";
    console.log(objVehiculo.categoria);
    

    //usando la clase camioneta
    var objCamioneta = new Camioneta("ACM-007","GRIS","CAMIONETA",true);
    objCamioneta.imprimirDatosCamioneta();
    //console.log(objVehiculo);
    //console.log(`Placa => ${objVehiculo.placa}`);
    //console.log(`Color => ${objVehiculo.color}`);
})