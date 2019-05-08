using ExtensiondeInterfaz.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz
{
    class CalculadoraCientifica : CalculadoraTrigonometrica, ICalculadoraCientifica
    {
        public double Exp(double a)
        {
            return Math.Exp(a);
        }

        public double Log(double a)
        {
            return Math.Log(a);
        }
    }
}
