Algoritmo sin_titulo
	definir opcion como entero
	definir a Como Entero
	definir b Como Entero
	definir repeat como caracter

	Repetir
		escribir "elije opcion"
		escribir "1-suma"
		escribir "2-resta"
		escribir "3-salir"
		leer opcion
		Segun opcion Hacer
			1:
				escribir "primer numero"
				leer a
				escribir "segundo numero"
				leer b
				Escribir "la suma es ", a+b
			2:
				escribir "primer numero"
				leer a
				escribir "segundo numero"
				leer b
				escribir "la resta es ", a-b
			3:
				de otro modo
				Escribir "opcion no valida"
				
		Fin Segun
	hasta Que opcion=3



FinAlgoritmo
