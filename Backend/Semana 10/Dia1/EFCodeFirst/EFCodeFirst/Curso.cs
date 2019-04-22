using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCodeFirst
{
    [Table("TablaCurso",Schema="administracion")]
    public class Curso
    {
        public int CursoId { get; set; }
        public string nombreCurso { get; set; }
        public string año { get; set; }

        public ICollection<Alumno> Alumnos { get; set; }
    }
}
