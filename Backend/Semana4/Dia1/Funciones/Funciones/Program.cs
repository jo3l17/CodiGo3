using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Funciones
{
    class Program
    {

        //variable publica:
        //public static float centigrados = 0;
        static void Main(string[] args)
        {
            //MostrarBienvenida();
            //MostrarBienvenidaConNombre("Christian");
            //int primerNumero = 10, segundoNumero = 5;
            //MostrarMayor(primerNumero, segundoNumero);
            int[] arregloEnMain = { 1, 2, 3, 4, 5 };
            Console.WriteLine("arreglo en main {0} {1} {2} {3} {4} ",arregloEnMain[0], arregloEnMain[1], arregloEnMain[2], arregloEnMain[3], arregloEnMain[4]);
            ModificarArreglo(arregloEnMain);
            Console.WriteLine("arreglo en main {0} {1} {2} {3} {4} ", arregloEnMain[0], arregloEnMain[1], arregloEnMain[2], arregloEnMain[3], arregloEnMain[4]);
            //int a = int.Parse(Console.ReadLine());
            //positivoNegativo(a);

            SumarNumeros(3, 4, 5, 3, 2);
            int[] arr = { 2, 3, 45, 6 };
            SumarNumeros(444, 99);
            SumarDosNumeros(numero2:5555,numero1:88);
            //SumarNumeros(arr);
            MostrarNumero(3);
            //MostrarNumero(3, 5);
            Console.WriteLine("ingrese grados en farenheit");
            float f = float.Parse(Console.ReadLine());
            float gradoscelcius = Farenheitcentigrados(f);
            if (gradoscelcius > 37)
            {
                Console.WriteLine("esta enfermo, su temperatura es de {0}°C", gradoscelcius);
            }
            else
            {
                Console.WriteLine("su temperatura es de {0}°C", gradoscelcius);
            }

            /*if (centigrados > 37)
            {
                Console.WriteLine("esta enfermo, su temperatura es de {0}°C", centigrados);
            }
            else
            {
                Console.WriteLine("su temperatura es de {0}°C", centigrados);
            }*/
        }
        static void MostrarBienvenida()
        {
            Console.WriteLine("Bienvenido a la funcion");
        }
        static void MostrarBienvenidaConNombre(string nombre)
        {
            Console.WriteLine("Bienvenido {0}", nombre);
        }
        static void MostrarMayor(int numero1,int numero2)
        {
            if (numero1 > numero2)
                Console.WriteLine("el primer numero es mayor");
            if (numero2 > numero1)
                Console.WriteLine("el segundo numero es mayor");
            else
                Console.WriteLine("los numeros " +
                    "son iguales");
        }
        static void positivoNegativo (int N1)
        {
            if (N1 < 0)
                Console.WriteLine("el numero {0} es negativo",N1);
            else
                Console.WriteLine("el numero {0} es positivo",N1);
        }
        static void ModificarArreglo(int [] arregloModificado)
        {
            arregloModificado[0] = 999999;
            arregloModificado[1] = 333333;
            arregloModificado[2] = 000000;
            arregloModificado[3] = -55555
;
        }
        static void SumarDosNumeros(int numero1, int numero2 = 9)
        {

        }
        static void SumarNumeros(int r, int s, params int[] numeros)
        {
            int resultado = 0;
            foreach (var elemento in numeros)
            {
                resultado = resultado + elemento;
            }
            Console.WriteLine("el resulutado es {0}",resultado);
        }
        static void MostrarNumero(int numero1)
        {
            Console.WriteLine("Mostrar un entero "+numero1);
        }
        static void MostrarNumero(int numero1, int numero2=4)
        {
            Console.WriteLine("Mostrar dos enteros "+numero1 +"   "+numero2);
        }
        static float Farenheitcentigrados(float farenheit)
        {
            float c = (farenheit - 32) * 5 / 9;
            return c;
        }
    }
}
