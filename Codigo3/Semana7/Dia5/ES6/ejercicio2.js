'use strict';
let duenios = [{ id: 1, duenio: "Jorge" },
{ id: 2, duenio: "Martha" },
{ id: 3, duenio: "Javier" },
{ id: 4, duenio: "Yo" },
{ id: 5, duenio: "Juan" },
{ id: 6, duenio: "Miguel" },
{ id: 7, duenio: "Jose" }];
let terrenos = [{ id: 1, area: 100 }, { id: 2, area: 300 }, { id: 3, area: 400 }, { id: 4, area: 400 }, { id: 5, area: 400 }];
let habitaciones = [{ nro: 1, nroHab: 3 }, { nro: 2, nroHab: 5 }, { nro: 3, nroHab: 4 }, { nro: 4, nroHab: 6 }];

let getDueniosByiId = (id) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < duenios.length; i++) {
            if (duenios[i].id === id) {
                resolve(duenios[i])
                return;
            }
        }
        reject("no se encontro un dueño con ese id");
    })

}

let getTerrenosById = (objduenio) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < terrenos.length; i++) {
            if (objduenio.id === terrenos[i].id) {
                resolve(terrenos[i])
                return;
            }
        }
        reject("no tiene un terreno")
    });
}

let getHabitacionesByiId = (objterreno) => {
    return new Promise((resolve, reject) => {

        for (let i = 0; i < habitaciones.length; i++) {
            if (objterreno.id === habitaciones[i].nro) {
                resolve(habitaciones[i])
                return;
            }
        }
        reject("no hay habitaciones en este terreno")
    });
}

getDueniosByiId(5).then((objduenio) => {
    getTerrenosById(objduenio).then((objterreno) => {
        getHabitacionesByiId(objterreno).then((objhabitaciones) => {
            console.log(`el duenio ${objduenio.duenio}`);
            console.log(`tiene un terreno de ${objterreno.area}m2`);
            console.log(`y tiene ${objhabitaciones.nroHab} habitaciones`);
        }).catch((error) => {
            console.log(`el duenio ${objduenio.duenio}`);
            console.log(`tiene un terreno de ${objterreno.area}m2`);
            console.log(error);
        });
    }).catch((error) => {
        console.log(`el duenio ${objduenio.duenio}`);
        console.log(error);
    });
}).catch((error) => {
    console.log(error);
});