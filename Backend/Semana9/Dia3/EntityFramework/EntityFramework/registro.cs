//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EntityFramework
{
    using System;
    using System.Collections.Generic;
    
    public partial class registro
    {
        public int idRegistro { get; set; }
        public Nullable<int> idUsuario { get; set; }
        public string vehiculoPlaca { get; set; }
        public Nullable<int> idCobro { get; set; }
    
        public virtual cobro cobro { get; set; }
        public virtual usuario usuario { get; set; }
        public virtual vehiculo vehiculo { get; set; }
    }
}
