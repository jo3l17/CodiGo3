using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace practicafor
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Console.WriteLine("escriba un numero");
            int N1=int.Parse(Console.ReadLine());
            for (int i = 1; i <= N1; i++)
            {
                Console.WriteLine(i);
            }
            
            for (int i = 10; i > 0; i--)
            {
                Console.WriteLine(i);
            }*/

            /*for (int i = 20; i > 0; i--)
            {
                if (i % 2 != 0) { 
                Console.WriteLine(i);
                }
            }*/
            /*int multiplicacion = 1;
            int contador = 0;
            int primerNumero = int.Parse(Console.ReadLine());
            int segundoNumero = int.Parse(Console.ReadLine());
            for (int i = primerNumero; i <= segundoNumero; i++)
            {
                if (i % 2 != 0)
                {
                    multiplicacion = multiplicacion * i;
                    contador++;
                }
            };
            Console.WriteLine($"la multiplicacion es {multiplicacion}. Hay {contador} impares");
            */
            int N = int.Parse(Console.ReadLine());
            int contador = 1;
            for (int i = 0; i < N; i++)
            {
                for (int j = 1; j <= N; j++)
                {
                    Console.Write(contador+ "\t");
                    contador = contador + 1;
                    //Console.Write(j);
                }
                Console.WriteLine();
            }
            Console.WriteLine();
        }
    }
}
