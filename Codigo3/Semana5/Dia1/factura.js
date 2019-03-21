
window.addEventListener("load", function () {

    // let factura = {
    //     nombre: "nombre",
    //     RUC:"RUC",
    //     fecha:"fecha",
    //     productos:[{
    //         cant:9,
    //         desc:"lavadora",
    //         punit:876.23,
    //         categoria:"electro"
    //     }]
    // }
    
    var inputCant = document.getElementById("inputCant");
    var inputDesc = document.getElementById("inputDesc");
    var inputPunit = document.getElementById("inputPunit");
    var inputCategoria = document.getElementById("inputCategoria");
    var miBody = document.getElementById("miBody");
    var totalFinal = document.getElementById("totalFinal")
    var agregar = document.getElementById("btnAgregar");
    var tot = 0;
    var cont = 1;

    var factura = {
        nombre: "nombre",
        RUC: "RUC",
        fecha: "fecha",
        productos: []
    };

    function construirFactura(){
        let stringFacturaStorage = localStorage.getItem("factura");
        if(stringFacturaStorage !== null){
            let jsonFacturaStorage = JSON.parse(stringFacturaStorage);
            factura = jsonFacturaStorage;
            console.log("localstorage")
            dibujarTablaConStorage();
            llenarDatosCliente();
        }else{
            console.log("no habia storage");
        }
    }
    function llenarDatosCliente(){
        let nombre = document.getElementById("inputNombre");
        let RUC = document.getElementById("inputRUC");
        let fecha = document.getElementById("inputFecha");
        nombre.value = factura.nombre;
        RUC.value = factura.RUC;
        fecha.value = factura.fecha;
    };
    function dibujarTablaConStorage(){
        for (let i = 0; i < factura.productos.length; i++) {
            let tr = document.createElement("tr");
            let tdNum = document.createElement("td")
            tdNum.innerHTML = i+1;
            let tdCant = document.createElement("td");
            tdCant.innerHTML = factura.productos[i].cant;
            let tdDesc = document.createElement("td");
            tdDesc.innerHTML = factura.productos[i].desc;
            let tdPunit = document.createElement("td");
            tdPunit.innerHTML = factura.productos[i].punit;
            let tdSubtotal = document.createElement("td");
            tdSubtotal.innerHTML = factura.productos[i].subTotal;
            tot += +tdSubtotal.innerHTML; 
            totalFinal.innerHTML = tot;
            let xtdButton = document.createElement("td");
            let xbutton = document.createElement("button")
            xbutton.innerHTML = "Eliminar";
            xbutton.setAttribute("pos",i+1);
            xbutton.addEventListener("click",function(evento){
                let posicion = evento.target.getAttribute("pos");
                factura.productos.splice(posicion-1,1);
                localStorage.setItem("factura",JSON.stringify(factura));
                tr.removeChild(tdNum);
                tr.removeChild(tdCant);
                tr.removeChild(tdDesc);
                tr.removeChild(tdPunit);
                tr.removeChild(tdSubtotal);
                tr.removeChild(xtdButton);
                miBody.removeChild(tr);
            });
            xtdButton.appendChild(xbutton);
            tr.appendChild(tdNum);
            tr.appendChild(tdCant);
            tr.appendChild(tdDesc);
            tr.appendChild(tdPunit);
            tr.appendChild(tdSubtotal);
            tr.appendChild(xtdButton);
            miBody.appendChild(tr);
        }
    }
    
    agregar.addEventListener("click", function (event) {

        if (cont == 1) {
            factura.nombre = document.getElementById("inputNombre").value;
            factura.RUC = document.getElementById("inputRUC").value;
            factura.fecha = document.getElementById("inputFecha").value;
        }

        if (document.getElementById("inputNombre").value == ""
            || document.getElementById("inputRUC").value == ""
            || document.getElementById("inputFecha").value == ""
            || inputCant.value == ""
            || inputDesc.value == ""
            || inputPunit.value == ""
            || inputCategoria.value == "") {
            alert("no ha ingresado datos");
        } else {

            let productos = {
                cant: inputCant.value,
                desc: inputDesc.value,
                punit: inputPunit.value,
                categoria: inputCategoria.value,
                subTotal : (inputCant.value * inputPunit.value)
            }

            // productos.cant = inputCant.value;
            // productos.desc = inputDesc.value;
            // productos.punit = inputPunit.value;
            // productos.categoria = inputCategoria.value;
            factura.productos.push(productos);


            let tr = document.createElement("tr");
            let trActuales = document.querySelectorAll("table tbody tr");

            let tdNum = document.createElement("td")
            let tdCant = document.createElement("td");
            let tdDesc = document.createElement("td");
            let tdPunit = document.createElement("td");
            let tdSubtotal = document.createElement("td");

            let xtdButton = document.createElement("td");
            let xbutton = document.createElement("button")
            xbutton.innerHTML = "eliminar";
            xbutton.setAttribute("pos",trActuales.length+1);
            xbutton.addEventListener("click",function(evento){
                let posicion = evento.target.getAttribute("pos");
                factura.productos.splice(posicion-1,1);
                localStorage.setItem("factura",JSON.stringify(factura));
                tr.removeChild(tdNum);
                tr.removeChild(tdCant);
                tr.removeChild(tdDesc);
                tr.removeChild(tdPunit);
                tr.removeChild(tdSubtotal);
                tr.removeChild(xtdButton);
                miBody.removeChild(tr);
            });
            xtdButton.appendChild(xbutton);

            tdNum.innerHTML = trActuales.length+1;
            tdCant.innerHTML = inputCant.value;
            tdDesc.innerHTML = inputDesc.value;
            tdPunit.innerHTML = inputPunit.value;
            tdSubtotal.innerHTML = productos.subTotal;
            tot += +tdSubtotal.innerHTML;
            totalFinal.innerHTML = tot;

            tr.appendChild(tdNum);
            tr.appendChild(tdCant);
            tr.appendChild(tdDesc);
            tr.appendChild(tdPunit);
            tr.appendChild(tdSubtotal);
            tr.appendChild(xtdButton);
            miBody.appendChild(tr);
            cont++;

            let facturaString = JSON.stringify(factura);
            localStorage.setItem("factura", facturaString);
        }
    });
    construirFactura();
});