using ExtensiondeInterfaz.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz
{
    class Calculadora : ICalculadoraCientifica
    {
        public int resultado { get; set; }

        public double Sumar(double a, double b)
        {
            return a + b;
        }
        public double Restar(double a, double b)
        {
            return a - b;
        }
        public double Multiplicacion(double a, double b)
        {
            return a * b;
        }
        public double Division(double a, double b)
        {
            return a / b;
        }

        public double Seno(double a)
        {
            return Math.Sin(a);
        }

        public double Coseno(double a)
        {
            return Math.Cos(a);
        }

        public double Tangente(double a)
        {
            return Math.Tan(a);
        }

        public double Log(double a)
        {
            return Math.Log(a);
        }

        public double Exp(double a)
        {
            return Math.Exp(a);
        }
    }
}
