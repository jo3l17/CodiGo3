window.addEventListener("load",function(){
    
    let factura = {
        nombre: "nombre",
        RUC:"RUC",
        fecha:"fecha",
        productos:[{
            cant:9,
            desc:"lavadaroa",
            punit:876.23,
            categoria:"electro"
        }]
    }

    var cont = 1;
    var agregar = document.getElementById("btnAgregar");
    agregar.addEventListener("click",function(event){

        event.preventDefault();

        var inputCant = document.getElementById("inputCant");
        var inputDesc = document.getElementById("inputDesc");
        var inputPunit = document.getElementById("inputPunit");
        var inputCategoria = document.getElementById("inputCategoria");

        factura.nombre = document.getElementById("inputNombre");
        factura.nombre = document.getElementById("inputRUC");
        factura.nombre = document.getElementById("inputFecha");
        factura.productos[0].cant = document.getElementById("inputCant");
        factura.productos[0].desc = document.getElementById("inputDesc");
        factura.productos[0].punit = document.getElementById("inputPunit");
        factura.productos[0].categoria = document.getElementById("inputCategoria");

        let tabla = document.getElementById("miTabla");
        let tr = document.createElement("tr");
        
        let tdNum = document.createElement("td")
        let tdCant = document.createElement("td");
        let tdDesc = document.createElement("td");
        let tdPunit = document.createElement("td");
        let tdCategoria = document.createElement("td");
        let tdSubtotal = document.createElement("td");

        tdNum.innerHTML = cont;
        tdCant.innerHTML = inputCant.value;
        tdDesc.innerHTML = inputDesc.value;
        tdPunit.innerHTML = inputPunit.value;
        tdCategoria.innerHTML = inputCategoria.value;
        tdSubtotal.innerHTML = (inputCant.value)*(inputPunit);
        
        tr.appendChild(tdNum);
        tr.appendChild(tdCant);
        tr.appendChild(tdDesc);
        tr.appendChild(tdPunit);
        tr.appendChild(tdCategoria);
        tr.appendChild(tdSubtotal);
        tabla.appendChild(tr);
        cont++;
    })
});