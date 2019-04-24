using System.Collections.Generic;

namespace EF_Relaciones
{
    public class Estudiante
    {
        public Estudiante()
        {
            Cursos = new HashSet<Curso>();
        }
        public int id { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public virtual ICollection<Curso> Cursos { get; set; }
        public virtual Direccion Direccion { get; set; }
        public virtual Telefono Telefono { get; set; }
    }
}