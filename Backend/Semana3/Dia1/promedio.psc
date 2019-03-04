Algoritmo sin_titulo
	Definir cant Como Entero
	Definir cont Como Entero
	Definir nota Como Entero
	Definir promedio Como Entero
	promedio <- 0
	cont <- 1
	nota<-1
	Escribir 'ingrese cantidad de numeros que desea sacar promedio'
	leer cant
	Mientras cont<=cant Hacer
		Escribir 'notas restantes ',cant+1-cont
		Leer nota
		si  nota >= 0 y nota<=20
			cont <- cont+1
			promedio <- promedio+nota
		sino 
			escribir "ingrese la nota del 0 al 20"
		FinSi
	FinMientras
	Si cant>0 Entonces
		Escribir 'promedio ',promedio/cant
	FinSi
FinAlgoritmo

