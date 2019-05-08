using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz.Interfaces
{
    interface ICalculadoraCientifica : ICalculadoraTrigonometrica
    {
        double Log(double a);
        double Exp(double a);
    }
}
