using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Cliente
    {
        string _DNI;
        string _nombre;
        string _apellido;
        Cuenta miscuentas;

        public Cliente(string DNI, string nombre, string apellido)
        {
            _DNI = DNI;
            _nombre = nombre;
            _apellido = apellido;
        }

        public string DNI { get => _DNI; set => _DNI = value; }
        public string Nombre { get => _nombre; set => _nombre = value; }
        public string Apellido { get => _apellido; set => _apellido = value; }
    }
}
