using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Herencia
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Autor unAutor = new Autor("Mark", "Douglas", "ndouglas@lnve.st");
            //se deben enviar argumentos acorde con el constructor
            AutorDePeriodico dePeriodico = new AutorDePeriodico("Jhon", "Smith", "js@gmail.com", "The New York Times");
            Console.WriteLine(dePeriodico.ObtenerPeriodico());*/
            /*FiguraGeometrica miFigura = new FiguraGeometrica("azul");
            Console.WriteLine(miFigura.GScolor);
            //miFigura.GScolor = "verde";
            //Console.WriteLine(miFigura.GScolor);
            circulo miCirculo = new circulo("rojo", 4);
            Console.WriteLine(miCirculo.obtenerArea());

            cuadrado miCuadrado = new cuadrado("azul", 6);
            Console.WriteLine(miCuadrado.obtenerArea());
            Console.WriteLine(miCuadrado.obtenerPerimetro());

            rectangulo miRectangulo = new rectangulo("amarillo", 5, 7);
            Console.WriteLine(miRectangulo);
            Console.WriteLine(miRectangulo.obtenerArea());
            Console.WriteLine(miRectangulo.obtenerPerimetro());

            rectangulo miRectangulo2 = new rectangulo("celeste", 8, 5);
            Console.WriteLine(miRectangulo2);

            triangulo miTriangulo = new triangulo("verde", 6, 8);
            Console.WriteLine(miTriangulo.obtenerArea());
            Console.WriteLine(miTriangulo.obtenerPerimetro());*/

            //FiguraGeometrica miFigura = new FiguraGeometrica("azul", 3);
            rectangulo rectanguloOBJ = new rectangulo("verde", 4, 3);
            Console.WriteLine(rectanguloOBJ.obtenerArea());
        }
    }
    class Autor
    {
        //por defecto todo es privado
        public string _nombre;
        public string _apellido;
        public string _email;

        //EL CONSTRUCTOR SIEMPRE DEBE SER PUBLICO
        public Autor(string nombre, string apellido, string email)
        {
            this._nombre = nombre;
            this._apellido = apellido;
            this._email = email;
        }
        public string ObtenerCorreo()
        {
            return _email;
        }
    }
    // el operador dos puntos (:) indica herencia
    class AutorDePeriodico : Autor
    {
        public string _periodico;
        // el constructor padre(base)...
        public AutorDePeriodico(string nombre, string apellido, string email, string periodico) : base(nombre, apellido, email)
        {
            this._periodico = periodico;
        }
        public string ObtenerPeriodico()
        {
            //se puede acceder a los metodos y atributos de la clase padre con la palabra base
            Console.WriteLine(base.ObtenerCorreo());
            Console.WriteLine(base._email);
            return _periodico;
        }
    }
    //CLASE ABSTRACTA - CLASE INCOMPLETA
    abstract class FiguraGeometrica
    {
        protected string _color;

        public FiguraGeometrica(string color)
        {
            _color = color;
        }

        // get y set generado por c#
        // public string Color { get => _color; set => _color = value; }

        public string GScolor
        {
            get
            {
                return _color;
            }
            set
            {
                _color = value;
            }
        }

        abstract public double obtenerArea();
        abstract public double obtenerPerimetro();
    }
    class cuadrado: FiguraGeometrica
    {
        double _lado;
        public cuadrado(string color, double lado) : base(color)
        {
            _lado = lado;
        }
        public override double obtenerArea()
        {
            return _lado*_lado;
        }
        public override double obtenerPerimetro()
        {
            return _lado * 4;
        }
    }
    class circulo : FiguraGeometrica
    {
        double _radio;
        public circulo(string color, double radio) : base(color)
        {
            _radio = radio;
        }
        //metdos abstractos es clase padre deben ser implementados obligatoriamente
        //en las clases hijas
        public override double obtenerArea()
        {
            return Math.PI * Math.Pow(_radio, 2);
        }
        public override double obtenerPerimetro()
        {
            return 0;
        }
    }
    class rectangulo : FiguraGeometrica
    {
        double _Base;
        double _altura;
        public rectangulo(string color, double Base, double altura) : base(color)
        {
            _Base = Base;
            _altura = altura;
        }
        public override double obtenerArea()
        {
            
            return _Base * _altura;
        }
        public override double obtenerPerimetro()
        {
            return (_Base + _altura) * 2;
        }
        //se cambia el comportamiento de la funcion tostring
        public override string ToString()
        {
            return $"Rectangulo [base={_Base}, altura = {_altura}]";
        }
    }
    class triangulo : FiguraGeometrica
    {
        double _Base;
        double _altura;
        public triangulo(string color, double Base, double altura): base(color)
        {
            _Base = Base;
            _altura = altura;
        }
        public override double obtenerArea()
        {
            return (_Base * _altura)/2;
        }
        public override double obtenerPerimetro()
        {
            return (_Base)* 3;
        }
    }
}
