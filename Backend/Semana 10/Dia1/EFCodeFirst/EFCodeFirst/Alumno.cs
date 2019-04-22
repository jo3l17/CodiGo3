using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFCodeFirst
{
    [Table("TablaAlumno", Schema ="administracion")]
    public class Alumno
    {
        [Key]
        [Column(Order = 0)]
        public int id_Alumno { get; set; }
        [Column("Nombre de Alumno", Order = 5)]
        [Timestamp]
        public byte[] RowVersion { get; set; }
        [MaxLength (10)]
        [MinLength(5)]
        public string nombreAlumno { get; set; }
        [Column("Nacio", Order = 2,TypeName ="Datetime2")]
        public DateTime? fechaNacimiento { get; set; }
        [Required]
        public decimal altura { get; set; }
        [NotMapped]
        [Index]
        public int Indice { get; set; }
        [NotMapped]
        private decimal peso;

        public decimal Peso
        {
            get { return peso; }
        }

        //public decimal peso { get; set; }
        

        public Curso Curso { get; set; }

    }
}
