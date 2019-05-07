namespace ConsoleApp1
{
    internal interface ITrabajador<T> where T: class
    {
        int codigoTrabajador { get; set; }
        void Trabajar();
    }
}