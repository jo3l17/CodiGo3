window.addEventListener("load",function(){
    
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
        RUC:"RUC",
        fecha:"fecha",
        productos:[]
    }
    var agregar = document.getElementById("btnAgregar");
    agregar.addEventListener("click",function(event){

        event.preventDefault();



        let productos ={
            cant:"",
            desc:"",
            punit:"",
            categoria:""
        }

        if (cont==1) {
            factura.nombre = document.getElementById("inputNombre").value;
            factura.RUC = document.getElementById("inputRUC").value;
            factura.fecha = document.getElementById("inputFecha").value;
        }

        var inputCant = document.getElementById("inputCant");
        var inputDesc = document.getElementById("inputDesc");
        var inputPunit = document.getElementById("inputPunit");
        var inputCategoria = document.getElementById("inputCategoria");


        productos.cant = inputCant.value;
        productos.desc = inputDesc.value;
        productos.punit = inputPunit.value;
        productos.categoria = inputCategoria.value;
        factura.productos.push(productos)

        let miBody = document.getElementById("miBody");
        let tr = document.createElement("tr");
        
        let tdNum = document.createElement("td")
        let tdCant = document.createElement("td");
        let tdDesc = document.createElement("td");
        let tdPunit = document.createElement("td");
        // let tdCategoria = document.createElement("td");
        let tdSubtotal = document.createElement("td");

        tdNum.innerHTML = cont;
        tdCant.innerHTML = inputCant.value;
        tdDesc.innerHTML = inputDesc.value;
        tdPunit.innerHTML = inputPunit.value;
        // tdCategoria.innerHTML = inputCategoria.value;
        tdSubtotal.innerHTML = (inputCant.value)*(inputPunit.value);
        tot += +tdSubtotal.innerHTML;
        totalFinal.innerHTML = tot;
        
        tr.appendChild(tdNum);
        tr.appendChild(tdCant);
        tr.appendChild(tdDesc);
        tr.appendChild(tdPunit);
        // tr.appendChild(tdCategoria);
        tr.appendChild(tdSubtotal);
        miBody.appendChild(tr);
        cont++;

        let facturaString = JSON.stringify(factura);
        localStorage.setItem("factura",facturaString);
    })
});