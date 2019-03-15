//window.onload = function(){
//};
window.addEventListener("load",function(evento){
    var boton = document.getElementById("btn");
    var xobjetivo = document.getElementById("objetivo");
    var xinput =document.getElementById("miInput");
    var xobjetivo2 = document.getElementById("objetivo2");
    var xselect = document.getElementById("miSelect");
    var xbody = document.querySelector("body");
    var lapiz = document.getElementById("lapiz")

    xbody.addEventListener("mousemove",function(evento){
        //mousemove => cuando el mouse se mueve 1px
        //sea en X y/o en Y sobre un elemento
        console.log("X => ", evento.offsetX);
        console.log("Y => ", evento.offsetY);
        let linea = document.createElement("div");
        linea.style.width=`5px`;
        linea.style.height=`5px`;
        linea.style.backgroundColor="lightblue";
        linea.style.borderRadius="50%";
        linea.style.position="absolute";
        linea.style.left=`${evento.clientX}px`;
        linea.style.top=`${evento.clientY}px`;
        xbody.appendChild(linea);
        lapiz.style.position="absolute";
        lapiz.style.left=`${evento.clientX}px`;
        lapiz.style.top=`${evento.clientY-15}px`;
    });

    xobjetivo.addEventListener("mouseover",function(){
        // cuando el mouse se situa sobre el elemento
        this.style.backgroundColor = "red";
    });
    xobjetivo.addEventListener("mouseout",function(){
        // cuando el mouse sale del elemento
        this.style.backgroundColor = "brown";
    });
    xinput.addEventListener("focus",function(){
        // focus => cuando el cursor se ubia en el elemento
        this.style.borderBottomColor = "tomato";
        this.style.outline = "none"
    });
    xinput.addEventListener("blur",function(){
        // blur => cuando el cursor sale del elemento
        this.style.borderBottomColor = "white";
    });
    xinput.addEventListener("keydown",function(event){
        console.log("KEYDOWN Una tecla ha sido presionada");
        console.log(event.keyCode);
        console.log(event.key);
        console.log(String.fromCharCode(169));
        
    });
    xinput.addEventListener("keyup",function(event){
        console.log("KEYUP Una tecla ha sido presionada");
        console.log(event.keyCode);
        console.log(event.key);
    });
    xinput.addEventListener("keypress",function(event){
        console.log("KEYPRESS Una tecla ha sido presionada");
        console.log(event.keyCode);
        console.log(event.key);
        switch(event.key){
            case "a":
            console.log(`presionaste ${event.key}`);
            break;
            case "b":
            console.log(`presionaste ${event.key}`);
            break;
            default:
            console.log(`no presionaste ni a ni b, presionaste ${event.key}`);
            break;
        }
    });
    var a = 0;
    xobjetivo2.addEventListener("dblclick",function(){
        if (a==0){
            xobjetivo.style.borderRadius="50%";
            a=1
        }else{
            xobjetivo.style.borderRadius="0%";
            a=0;
        }
    });
    xselect.addEventListener("change",function(evento){
        console.log(evento);
        //value => el valor(value) del option seleccionado
        console.log(this.value);
        //selectedIndex => la posicion del option seleccionado
        console.log(this.selectedIndex);
        //this.options => devuleve un arreglo de las opciones  del select
        console.log(this.options);
        //this.options => this.selectedIndex
        console.log(this.options[this.selectedIndex]);
        //this.options[this.selectedIndex].innerHTML => devuelve
        //el texto interno del option <option>ESTE TEXTO</option>
        console.log(this.options[this.selectedIndex].innerHTML);
        xinput.value = this.options[this.selectedIndex].innerHTML;
    });

});