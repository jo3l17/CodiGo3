using ExtensiondeInterfaz.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz
{
    class Program
    {
        interface IUnaInterfaz
        {
            void UnMetodo();
        }
        interface IOtraInterfaz
        {
            void UnMetodo();
        }
        class Prueba : IUnaInterfaz, IOtraInterfaz
        {
            void IUnaInterfaz.UnMetodo()
            {
                Console.WriteLine("Ejecucion del metodo IUnaInterfaz");
            }

            void IOtraInterfaz.UnMetodo()
            {
                Console.WriteLine("Ejecucion del metodo IOtraInterfaz");
            }
        }





        static void Main(string[] args)
        {
            IUnaInterfaz p = new Prueba();
            p.UnMetodo();
            IOtraInterfaz pOtro = new Prueba();
            pOtro.UnMetodo();


            ICalculadoraCientifica miCalculadora = new Calculadora();
            var suma = miCalculadora.Sumar(4.9, 5.5);
            Console.WriteLine(suma);
            var cos = miCalculadora.Coseno(35);
            Console.WriteLine(cos);
            var log = miCalculadora.Log(1.32);
            Console.WriteLine("El logaritmo es {0}",log);

            ICalculadoraCientifica nuevaCalc = new Calculadora();
            nuevaCalc.Multiplicacion(3.0, 6.0);
            nuevaCalc = new CalculadoraCientifica();
        }
    }
}
