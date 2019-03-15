using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persona
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Persona per = new Persona("71787798","Joel",20,'S');
            Console.WriteLine();
            per.MostrarInformacion();
            per.EstadoCivil = 'C';
            Console.WriteLine(per.EstadoCivil);
            per.MostrarInformacion();
            */
            /*int inicio = Environment.TickCount;
            for (int i = 0; i < 10000000; i++)
            {

            }
            int fin = Environment.TickCount;
            Console.WriteLine((fin - inicio));
            */
            /*int anio = int.Parse(Console.ReadLine());
            if ( (anio%4 == 0 && anio%100 != 0) || anio % 400==0)
            {
                Console.WriteLine($"el año {anio} es bisiesto");
            }
            else
            {
                Console.WriteLine($"el año {anio} no es bisiesto");
            }*/
            /*string hoy = DateTime.Today.DayOfWeek.ToString();
            DateTime thisDay = DateTime.Today;
            Console.WriteLine();
            Console.WriteLine(thisDay.ToString("D"));
            Console.WriteLine(hoy);*/


            /*Console.WriteLine("ingrese el primer lado del triangulo");
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            */
            /*Triangulo triangulo1 = new Triangulo();
            triangulo1.ingresarlados();
            triangulo1.calcularHipotenusa();
            triangulo1.mostrarHipotenusa();
            */
            /*int aleatorio2;
            Random ran = new Random();
            for (int i = 0; i < 10; i++)
            {
                aleatorio2 = ran.Next(198);
                if (aleatorio2 > 135)
                {
                    Console.WriteLine(aleatorio2);
                }
                else
                {
                    i--;
                }
            }*/
            /*string[] estudio = { "estudio en Tecsup ", "estudio en Cato ", "no estudio " };
            string[] opinion = { "la recomiendo ", "no la recomiendo ", "soy vago " };
            string[] nombre = { "Juan ", "Carlos ", "Frank " };
            string[] apellido = { "Suarez ", "Balboa ", "Jose " };
            Random frase = new Random();
            while (true)
            {
                Console.ReadLine();
                Console.WriteLine(nombre[frase.Next(nombre.Length)] + apellido[frase.Next(apellido.Length)] + estudio[frase.Next(apellido.Length)] + opinion[frase.Next(opinion.Length)]);
            }*/
            Trabajador a = new Trabajador();
            

        }
    }
    class Triangulo
    {
        double _LadoA;
        double _LadoB;
        double _hipotenusa;
        public void ingresarlados()
        {

            Console.WriteLine("ingrese lado A");
            _LadoA = double.Parse(Console.ReadLine());
            Console.WriteLine("ingrese lado B");
            _LadoB = double.Parse(Console.ReadLine());
        }
        public void calcularHipotenusa()
        {
            //double hipotenusa = Math.Sqrt(Math.Pow(_LadoA, 2) + Math.Pow(_LadoB, 2));
            _hipotenusa = Math.Pow(Math.Pow(_LadoA,2)+Math.Pow(_LadoB,2),0.5);
        }
        public void mostrarHipotenusa()
        {
            Console.WriteLine($"la hipotenusa es {_hipotenusa}");
        }
    }
    class Trabajador : Persona
    {
        int sueldo;

        public Trabajador(string DNI, string nombre, int edad, char estadoCivil,
            int sueldo) : base(DNI,nombre,edad,estadoCivil)
        {

        } 
    }
    class Persona
    {
        //ATRIBUTOS (CARACTERISTICAS)
        string _DNI;
        string _nombre;
        int _edad;
        char _estadoCivil;

        //CONSTRUCTORES
        public Persona(string DNI,string nombre, int edad, char estadoCivil)
        {
            _DNI = DNI;
            _nombre = nombre;
            _edad = edad;
            _estadoCivil = estadoCivil;
        }
        //MÉTODOS (ACCIONES QUE REALIZA UN OBJETO)
        void comer(string comida)
        {

        }
        public void CambiarEstadoCivil(char estadoCivil)
        {
            _estadoCivil = estadoCivil;
        }
        public char EstadoCivil
        {
            get
            {
                return _estadoCivil;
            }
            set
            {
                _estadoCivil = value;
            }
        }
        public void MostrarInformacion()
        {
            Console.WriteLine($"Nombre:{_nombre }");
            Console.WriteLine($"Edad:{_edad }");
            Console.WriteLine($"DNI:{_DNI }");
            Console.WriteLine($"Estado Civil:{_estadoCivil }");
        }

    }

}
