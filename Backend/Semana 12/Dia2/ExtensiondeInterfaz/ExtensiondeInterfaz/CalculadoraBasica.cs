using ExtensiondeInterfaz.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz
{
    class CalculadoraBasica : ICalculadoraBasica
    {
        public int resultado { get; set; }

        public double Division(double a, double b)
        {
            return a / b;
        }

        public double Multiplicacion(double a, double b)
        {
            return a * b;
        }

        public double Restar(double a, double b)
        {
            return a - b;
        }

        public double Sumar(double a, double b)
        {
            return a + b;
        }
    }
}
