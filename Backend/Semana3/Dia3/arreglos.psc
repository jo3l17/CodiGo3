Algoritmo Arreglos
	Definir cadena1 Como texto
	definir contador Como Entero
	definir invitados Como Entero
	Escribir "cuantos invitados tendra"
	leer invitados
	dimension cadena1[invitados]
	// 0 1 2 3 4
	
	Para contador<-0 Hasta invitados-1 Con Paso 1 paso Hacer
		escribir "ingrese invitado nro ",contadord+1
		leer cadena1[contador]
	Fin Para
	Mostrar "la lista de invitados es:"
	Para contador<-0 Hasta invitados-1 Con Paso 1 paso Hacer
		mostrar cadena1[contador]
	Fin Para

FinAlgoritmo

