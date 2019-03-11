using System;

namespace Arreglos
{
    class Program
    {
        static void Main(string[] args)
        {
            /*int[] arregloDeEnteros = new int[5];
            float[,] arregloDosDimensiones = new float[5, 5];
            for (int i = 0; i < arregloDeEnteros.Length; i++)
            {
                Console.WriteLine("El arreglo tiene {0} en la posicion {1}", arregloDeEnteros[i],i);
            }
            int[] arregloNuevo = { 1, 2, 3 };
            */
            /*
            int[]arreglo = { 1, 2, 3 , 4 , 5 };
            for (int i = 0; i < arreglo.Length; i++)
            {
                Console.Write(arreglo[i]+"  ");
            }
            Console.WriteLine();
            for (int i = arreglo.Length; i > 0 ; i--)
            {
                Console.Write(arreglo[i-1]+"  ");
            }
            */

            /*int N = 0;
            int [] arreglo2 = new int[array.Length];
            for (int i = array.Length-1; i >= 0; i--)
            {
                arreglo2[N] = array[i];
                N++;
                
            }
            Console.WriteLine();
            Console.WriteLine("El arreglo invertido es");
            for (int i = 0; i < array.Length; i++)
            {
                Console.Write(" {0} ",arreglo2[i]);
            }
            */

            /*
            int C = 0;
            int aux;

            for (int i = arreglo.Length - 1; i >= 0; i--)
            {
                if (C >= i)
                    break;
                aux = arreglo[i];
                arreglo[i] = arreglo[C];
                arreglo[C] = aux;
                C++;
            }
            Console.WriteLine();
            foreach (var elemento in arreglo)
            {
                Console.Write(" {0} ", elemento);
            }

            Console.WriteLine();
            Console.WriteLine("El arreglo nuevo es");
            for (int i = 0; i < arreglo.Length; i++)
            {
                Console.Write(" {0} ", arreglo[i]);
            }
            */
            //en programacion los arreglos se cuentan primero filas luego columnas

            /*int[,] bidimensional;
            bidimensional = new int[10, 10];
            int[,] segundoBidi =
            {
                {4,6,2,3 },
                {2,7,2,6 },
                {9,6,0,0 }
            };

            Console.WriteLine(segundoBidi.GetLength(0));

            for (int filas = 0; filas < segundoBidi.GetLength(0); filas++)
            {
                for (int col = 0; col < segundoBidi.GetLength(1); col++)
                {
                    //segundoBidi[filas,col] =int.Parse(Console.ReadLine());
                    Console.WriteLine(" {0} ",segundoBidi[filas,col])
                }
                Console.WriteLine();
            }
            */
            /*Random aleatorio = new Random();
            Console.WriteLine("ingrese numero de Filas");
            int f = int.Parse(Console.ReadLine());
            Console.WriteLine("ingrese numero de Columnas");
            int c = int.Parse(Console.ReadLine());
            int[,] otra = new int[f,c];
           
            for (int filas = 0; filas < otra.GetLength(0); filas++)
            {
                for (int col = 0; col < otra.GetLength(1); col++)
                {
                    //otra[filas, col] = int.Parse(Console.ReadLine());
                    otra[filas, col] = aleatorio.Next(0,10);
                }
                Console.WriteLine();
            }
            for (int filas = 0; filas < otra.GetLength(0); filas++)
            {
                for (int col = 0; col < otra.GetLength(1); col++)
                {
                    Console.Write(" {0} ", otra[filas, col]);
                }
                Console.WriteLine();
            }
            */

            int[,] matriz =
            {
                {23,65,23,12,45,23 },
                {56,78,17,49,35,98 },
                {67,89,20,47,59,12 },
                {25,54,76,34,607,48 },
                {34,68,39,68,12,98 }
            };
            //int fmatriz1 = arregloDosDimensiones.GetLength(0)-1;
            //int cmatriz1 = arregloDosDimensiones.GetLength(1)-1;
            int contf = 0;
            int contc = 0;
            int suma = 0;
            int sumafinal = 0;
            int tamanio = int.Parse(Console.ReadLine());
            switch (tamanio)
            {
                //case 2
                case 2:
                    for (int f = 0; f < matriz.GetLength(0) - 1; f++)
                    {
                        for (int c = 0; c < matriz.GetLength(1) - 1; c++)
                        {

                            suma = matriz[f, c] + matriz[f, c + 1] + matriz[f + 1, c] + matriz[f + 1, c + 1];
                            //Console.WriteLine(" {0} ", suma);
                            if (suma > sumafinal)
                            {
                                sumafinal = suma;
                                contf = f;
                                contc = c;
                            }
                        }
                    }
                    Console.WriteLine("La suma mas alta es {0} ", sumafinal);
                    Console.WriteLine("Esta en las coordenadas [{0},{1}] ", contf, contc);
                    Console.WriteLine("La matriz resultante es");
                    Console.WriteLine("{0} {1}", matriz[contf, contc], matriz[contf, contc + 1]);
                    Console.WriteLine("{0} {1}", matriz[contf + 1, contc], matriz[contf + 1, contc + 1]);
                    break;
                    //case 3
                case 3:
                    for (int f = 0; f < matriz.GetLength(0) - 1; f++)
                    {
                        for (int c = 0; c < matriz.GetLength(1) - 1; c++)
                        {

                            suma = matriz[f, c] + matriz[f, c + 1] + matriz[f + 1, c] + matriz[f + 1, c + 1];
                            //Console.WriteLine(" {0} ", suma);
                            if (suma > sumafinal)
                            {
                                sumafinal = suma;
                                contf = f;
                                contc = c;
                            }
                        }
                    }
                    Console.WriteLine("La suma mas alta es {0} ", sumafinal);
                    Console.WriteLine("Esta en las coordenadas [{0},{1}] ", contf, contc);
                    Console.WriteLine("La matriz resultante es");
                    Console.WriteLine("{0} {1}", matriz[contf, contc], matriz[contf, contc + 1]);
                    Console.WriteLine("{0} {1}", matriz[contf + 1, contc], matriz[contf + 1, contc + 1]);
                    break;
                case 4:
                    //case 4
                    for (int f = 0; f < matriz.GetLength(0) - 1; f++)
                    {
                        for (int c = 0; c < matriz.GetLength(1) - 1; c++)
                        {

                            suma = matriz[f, c] + matriz[f, c + 1] + matriz[f + 1, c] + matriz[f + 1, c + 1];
                            //Console.WriteLine(" {0} ", suma);
                            if (suma > sumafinal)
                            {
                                sumafinal = suma;
                                contf = f;
                                contc = c;
                            }
                        }
                    }
                    Console.WriteLine("La suma mas alta es {0} ", sumafinal);
                    Console.WriteLine("Esta en las coordenadas [{0},{1}] ", contf, contc);
                    Console.WriteLine("La matriz resultante es");
                    Console.WriteLine("{0} {1}", matriz[contf, contc], matriz[contf, contc + 1]);
                    Console.WriteLine("{0} {1}", matriz[contf + 1, contc], matriz[contf + 1, contc + 1]);
                    break;
                default:
                    Console.WriteLine("ERROR NUMERO INVALIDO");
                    break;
            }


            Console.ReadLine();
        }
    }
}
