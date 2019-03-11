Algoritmo sin_titulo
	definir contnumeros Como Entero
	definir posicion Como Entero
	definir number Como Entero
	definir buscar como entero
	definir posicionfor como entero
	Dimension contnumeros[10]
	Para posicion<-0 Hasta 9 Con Paso 1 Hacer
		Mostrar "escribir el numero", posicion +1
		leer contnumeros[posicion]
	Fin Para
	
	definir z Como Entero
	z<-0
	escribir "busca el numero"
	leer buscar
	Para posicionfor<-0 Hasta 9 Con Paso 1 Hacer
		Si buscar=contnumeros[posicionfor] Entonces
			Mostrar "el numero esta en la posicion ",posicionfor
			z<-1
		finsi
	Fin Para
	Si z=0 Entonces
		mostrar"no se encontro el numero"
	Fin Si
FinAlgoritmo
