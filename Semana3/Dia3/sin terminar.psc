	Algoritmo sin_titulo
		definir contnumeros Como Entero
		definir posicion Como Entero
		definir number Como Entero
		definir buscar como entero
		Dimension contnumeros[10]
		dimension contposicion[10]
		
		Para posicion<-0 Hasta 9 Con Paso 1 Hacer
			Mostrar "escribir el numero", posicion
			leer contnumeros[posicion]
		Fin Para
		
		definir nposicion como entero
		definir contador Como Entero
		contador<-0
		definir z Como Entero
		z<-0
		mostrar "busca el numero"
		leer buscar
		Para posicion<-0 Hasta 9 Con Paso 1 Hacer
			Si buscar=contnumeros[posicion] Entonces
				Mostrar "el numero esta en la posicion ",posicion
				z<-1
				contador<-contador+1
			finsi
		Fin Para
		Si z=1 Entonces
			dimension contposicion[contador]
			para contador<-0 hasta contador-1 con paso 1 entonces
				mostrar "el numero se encontro en la posicion ", posicionfor
			finpara
		Sino
			Dimension contposicion[1]
			contposicion[0]<-0
			mostrar"no se encontro el numero"
		Fin Si

FinAlgoritmo

