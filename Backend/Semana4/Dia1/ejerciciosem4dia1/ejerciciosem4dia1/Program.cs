using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ejerciciosem4dia1
{
    class Program
    {
        static void Main(string[] args)
        {
            int valor = int.Parse(Console.ReadLine());
            linea(valor);

        }
        static void linea(int N)
        {
            for (int j = 1; j <= N; j++)
            {
                Console.Write("{0} ", j);
            }
            Console.WriteLine();
        }
        static void piramide(int N)
        {

            for (int i = 1; i < N; i++)
            {
                linea(N);
            }
            for (int i = 1; i < N; i--)
            {
                linea(N);
            }
        }
    }
}
