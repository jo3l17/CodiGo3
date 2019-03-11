Algoritmo sin_titulo
	definir cadena1 Como Entero
	Definir cont1 Como entero
	Definir cont2 Como entero
	Definir cont3 Como entero
	Definir contador Como Entero
	Dimension cadena1[10]
	cont1<-0
	cont2<-0
	cont3<-0
	Para contador<-0 Hasta 9 Con Paso 1 Hacer
		Escribir "ingrese el numero ",contador+1
		leer cadena1[contador]
		Si cadena1[contador]<0 Entonces
			cont1<-cont1+1
		SiNo
			Si cadena1[contador]>0 Entonces
				cont2<-cont2+1
			SiNo
				Si cadena1[contador]=0 Entonces
					cont3<-cont3+1
				SiNo
					mostrar"incorrecto"
					N<-N-1
				Fin Si
			Fin Si
		Fin Si
	Fin Para
	mostrar "hay ",cont1 " numeros negativos"
	mostrar "hay ",cont2 " numeros positivos"
	mostrar "hay ",cont3 " numeros iguales a cero"
FinAlgoritmo
