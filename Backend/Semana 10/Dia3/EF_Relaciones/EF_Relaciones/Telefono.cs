using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_Relaciones
{
    public class Telefono
    {
        public int id { get; set; }
        public int numeroTelefonico { get; set; }
        public virtual Estudiante Estudiante { get; set; }
    }
}
