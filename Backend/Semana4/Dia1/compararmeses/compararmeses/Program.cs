using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace compararmeses
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ingresa mes 1");
            int mes1 = int.Parse(Console.ReadLine())-1;
            Console.WriteLine("ingresa mes 2");
            int mes2 = int.Parse(Console.ReadLine())-1;
            string[] meses = { "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" };
            compararmeses(mes1, mes2, meses);
        }
        static void compararmeses(int N1,int N2,string[] meses)
        {
            Console.WriteLine("el mes 1 es {0}", meses[N1]);
            Console.WriteLine("el mes 2 es {0}", meses[N2]);
            if (N1 > N2)
            {
                int resultado = N2 - N1 + 12;
                Console.WriteLine("la diferencia entre {0} y {1} es {2} meses", meses[N1], meses[N2], resultado);
            }
            else
            {
                int resultado = N2 - N1;
                Console.WriteLine("la diferencia entre {0} y {1} es {2} meses", meses[N1], meses[N2], resultado);
            }
        }
    }
}
