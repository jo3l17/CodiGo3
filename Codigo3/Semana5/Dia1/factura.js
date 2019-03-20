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

    var totalFinal = document.getElementById("totalFinal")
    var tot = 0;
    var cont = 1;

    let factura = {
        nombre: "nombre",
        RUC: "RUC",
        fecha: "fecha",
        productos: []
    }
    function construirFactura(){
        let stringFacturaStorage = localStorage.getItem("factura");
        if(stringFacturaStorage != null){
            let jsonFacturaStorage = JSON.parse(stringFacturaStorage);
            factura = jsonFacturaStorage;
            dibujarTablaConStorage();
        }else{
            console.log("no habia storage");
        }
    }

    function dibujarTablaConStorage(){
        for (let i = 0; i < factura.productos.Length; i++) {
            let tr = document.createElement("tr");
            let tdNum = document.createElement("td")
            tdNum.innerHTML = i+1;
            let tdCant = document.createElement("td");
            tdCant.innerHTML = productos[i].cant;
            let tdDesc = document.createElement("td");
            tdDesc.innerHTML = productos[i].desc;
            let tdPunit = document.createElement("td");
            tdPunit = productos[i].punit;

            tr.appendChild(tdNum);
            tr.appendChild(tdCant);
            tr.appendChild(tdDesc);
            tr.appendChild(tdPunit);

            miBody.appendChild(tr);
        }
    }
    var agregar = document.getElementById("btnAgregar");
    agregar.addEventListener("click", function (event) {

        if (cont == 1) {
            factura.nombre = document.getElementById("inputNombre").value;
            factura.RUC = document.getElementById("inputRUC").value;
            factura.fecha = document.getElementById("inputFecha").value;
        }

        var inputCant = document.getElementById("inputCant");
        var inputDesc = document.getElementById("inputDesc");
        var inputPunit = document.getElementById("inputPunit");
        var inputCategoria = document.getElementById("inputCategoria");

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
                categoria: inputCategoria.value
            }

            // productos.cant = inputCant.value;
            // productos.desc = inputDesc.value;
            // productos.punit = inputPunit.value;
            // productos.categoria = inputCategoria.value;
            factura.productos.push(productos);

            let miBody = document.getElementById("miBody");
            let tr = document.createElement("tr");

            let tdNum = document.createElement("td")
            let tdCant = document.createElement("td");
            let tdDesc = document.createElement("td");
            let tdPunit = document.createElement("td");
            let tdSubtotal = document.createElement("td");

            tdNum.innerHTML = cont;
            tdCant.innerHTML = inputCant.value;
            tdDesc.innerHTML = inputDesc.value;
            tdPunit.innerHTML = inputPunit.value;
            tdSubtotal.innerHTML = (inputCant.value) * (inputPunit.value);
            tot += +tdSubtotal.innerHTML;
            totalFinal.innerHTML = tot;

            tr.appendChild(tdNum);
            tr.appendChild(tdCant);
            tr.appendChild(tdDesc);
            tr.appendChild(tdPunit);
            tr.appendChild(tdSubtotal);
            miBody.appendChild(tr);
            cont++;

            let facturaString = JSON.stringify(factura);
            localStorage.setItem("factura", facturaString);
        }
    });
    construirFactura();
});