using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensiondeInterfaz.Interfaces
{
    interface ICalculadoraBasica
    {
        int resultado { get; set; }

        double Sumar(double a, double b);
        double Restar(double a, double b);
        double Multiplicacion(double a, double b);
        double Division(double a, double b);
    }
}
