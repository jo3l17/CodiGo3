using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_FluentAPI
{
    public class Address
    {
        public int idAddress { get; set; }
        public int number { get; set; }
        public string street { get; set; }
        public int idEstudiante { get; set; }
        public Student Student { get; set; }
    }
}
