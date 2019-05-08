using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz
{
    class CalculadoraTrigonometrica : CalculadoraBasica, ICalculadoraTrigonometrica
    {
        public double Coseno(double a)
        {
            return Math.Cos(a);
        }

        public double Seno(double a)
        {
            return Math.Sin(a);
        }

        public double Tangente(double a)
        {
            return Math.Tan(a);
        }
    }
}
