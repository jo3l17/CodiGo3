using ExtensiondeInterfaz.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz
{
    interface ICalculadoraTrigonometrica : ICalculadoraBasica
    {
        double Seno(double a);
        double Coseno(double a);
        double Tangente(double a);
    }
}
