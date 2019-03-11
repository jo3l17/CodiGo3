using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cualquiera
{
    class Program
    {
        static void Main(string[] args)
        {
            /*// DEFINIR NUMERO COMO ENTERO
            int numero;
            numero = 9;
            //DEFINIR REAL COMO REALES
            float flotante = 8.0f;
            //DOUBLE ES COMO FLOAT PERO CON EL DOBLE DE PRECISIÓN
            double doble = 1234.6789;

            //ESCRIBIR NUMERO, FLOTANTE, DOBLE
            Console.WriteLine("ESTE ES UN ENTERO "+ numero);
            Console.WriteLine("ESTE ES UN DOBLE " + doble);
            Console.WriteLine("ESTE ES UN FLOTANTE " + flotante);

            Console.WriteLine("ESTOS SON NUMEROS " + numero+ " "+flotante+ " "+doble);
            Console.WriteLine("ESTOS SON NUMEROS {0} {1} {2}", numero, flotante, doble);

            // DEFINIR FLAG COMO LOGICO
            bool flag=true;
            //DEFINIR SALUDO COMO TEXTO
            string nombre;
            int edad;

            Console.WriteLine("ingresa tu nombre");
            nombre = Console.ReadLine();
            Console.WriteLine("Tu nombre es: {0}", nombre);

            Console.WriteLine("ingresa tu edad");
            edad = int.Parse(Console.ReadLine());
            Console.WriteLine("Tu edad: {0}", edad);

            //SI <CONDICION> ENTONCES <OPERACIONES>
            if (edad >= 18)
            {
                Console.WriteLine("Eres mayor de Edad");
            }
            else
            {
                Console.WriteLine("No puedes pasar niño rata");
            }
            */

            /*int x = 12, y = 12;
            int resultado;
            //RESULTADO <- X + Y
            resultado = x + y;
            resultado = x - y;
            resultado = x / y;
            resultado = x * y;
            resultado = x % y;

            Console.WriteLine("X es {0} - Y es {1}", x, y);
            y = --x;
            Console.WriteLine("X es {0} - Y es {1}", x, y);

            Console.WriteLine("El resultado es {0}", resultado);
            x++; //x=x+1
            */
            /*
            //impar o par
            float N;
            Console.WriteLine("ingrese el numero");
            N = float.Parse(Console.ReadLine());
            if(N%2==0){
                Console.WriteLine("par");
            }
            else
            {
                Console.WriteLine("impar");
            }
            */
            //PARA <VARIABLE> <-0 HASTA <NUMERO> CON PASO <NUMERO>
            /*int num;
            //PARA
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("estoy en la vuelta {0} ", ++i);
            }
            //FIN PARA
            */
            /*
            float N;
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("ingrese el numero");
                N = float.Parse(Console.ReadLine());
                if (N % 2 == 0)
                {
                    Console.WriteLine("par");
                }
                else
                {
                    Console.WriteLine("impar");
                }
            }
            */
            float N;
            float M;
            Console.WriteLine("ingrese el numero");
            N = float.Parse(Console.ReadLine());
            M = 1;
            for (int i = 1; i <= N; i++)
            {
                M = M * i;
            }
            Console.WriteLine("El factorial es {0}",M);
            //FIN PARA

            //DEFINIR ARREGLO COMO ENTERO
            // DIMENSION ARREGLO[10]
            int[] arreglo;
            arreglo = new int[10];
            for (int i = 0; i < arreglo.Length; i++)
            {
                Console.WriteLine("En la posision {0} del arreglo hay {1}",i,arreglo[i]);
            }
            

            // Detener el cierre de la aplicacion
            Console.ReadLine();
        }
    }
}