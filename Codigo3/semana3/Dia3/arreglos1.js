// ITERANDO UN ARREGLO

var nombres = ["Jorge","Ximena","Javier","Martha"];
var saludos = [];

for(var i = 0; i<nombres.length;i++){
    // saludos[i]="Hola "+nombres[i];
    saludos.push("Hola "+nombres[i]);
}
console.log(`${saludos}`);

console.log(saludos);

//////
var apellidos = ["Garnica","Monje","Salinas"]
var salarios = [3000.00,7000.00,2500.00]
var cargos = ["Gerente","Jefe de Proyectos","Caja"]

for(var i = 0; i<apellidos.length;i++){
    console.log(`${apellidos[i]} gana ${salarios[i]} y trabaja de ${cargos[i]}`);
}

////
console.log("planilla");

var planilla =  [["Jorge",3000.00,"Gerente"],
                ["Carlos",3500.00,"Asesoria legal"],
                ["Cecilia",4000.00,"Programadora"]]
for(var i = 0; i<planilla.length;i++){
    console.log(`Sr.${planilla[i][0]} gana ${planilla[i][1]} y es ${planilla[i][2]}`);
}                

console.log("MATRIZZZZZZZ");

var planilla =  [[1,2,3],
                [90,45,67,4],
                [80,43,12]]
for(var i = 0; i<planilla.length;i++){
    for(var j = 0; j<planilla[i].length;j++){
    console.log(planilla[i][j]);
    }
}

console.log("suma");

var matriz1 = [ [1,2,3,4],
                [4,5,6,5],
                [7,8,9,6]];

var matriz2 = [ [1,2,3,4],
                [4,5,6,5],
                [7,8,9,6]];

var matriz3 = []

for(var i = 0; i<matriz1.length;i++){
    matriz3[i]=[]
    for(var j = 0; j<matriz1[i].length;j++){
        matriz3[i].push(matriz1[i][j]+matriz2[i][j]);
        console.log(matriz3[i][j]);
    }
}

var inicial =[[3,5,1],[6,7,8]];
// resultado = [[3,6],[5,7],[1,8]]
console.log(inicial);
var matrizt = [];

for(var i=0;i<inicial[0].length;i++){
    matrizt[i]=[]
    for(var j = 0;j<inicial.length;j++){
        matrizt[i][j]=inicial[j][i];
    }
}
console.log(matrizt);

