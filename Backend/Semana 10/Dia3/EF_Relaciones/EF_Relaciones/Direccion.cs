namespace EF_Relaciones
{
    public class Direccion
    {
        public int id { get; set; }
        public string calle { get; set; }
        public int numero { get; set; }
        public virtual Estudiante Estudiante { get; set; }
    }
}