Algoritmo sin_titulo
	
	Definir a,b como real
	
	Mientras Verdadero Hacer
		
		Escribir 'ingrese un numero'
		Leer a
		escribir 'ingrese el segundo numero'
		leer b
		
		
		Si a<>0 y b<>0 Entonces
			
			Escribir 'la suma es', a+b;
			Escribir 'la resta es ', a-b;
			Escribir 'el producto es ', a*b;
			Escribir 'la division es ', a/b;
			Escribir 'el residuo es ', a MOD b;
			Escribir 'la potecia es ' a^b;

			si a<0 Entonces
				Escribir 'el valor absoluto de a es ', a*(-1);
			SiNo
				escribir 'la raiz del a es ' RC(a)
				escribir 'elvalor absoluto de a es ', a;
			FinSi
			si b<0 Entonces
				Escribir 'el valor absoluto de b es ', b*(-1);
				
			SiNo
				escribir 'la raiz del b es ' RC(b);
				escribir 'el valor absoluto de b es ', b;
			FinSi
			
		SiNo
			
			Escribir 'datos incorrectos'
			
		Fin Si
		
	Fin Mientras

	
FinAlgoritmo
