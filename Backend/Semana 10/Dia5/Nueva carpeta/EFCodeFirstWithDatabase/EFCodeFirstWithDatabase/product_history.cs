namespace EFCodeFirstWithDatabase
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("production.product_history")]
    public partial class product_history
    {
        [Key]
        [Column(Order = 0)]
        public int product_id { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(255)]
        public string product_name { get; set; }

        [Key]
        [Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int brand_id { get; set; }

        [Key]
        [Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int category_id { get; set; }

        [Key]
        [Column(Order = 4)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public short model_year { get; set; }

        [Key]
        [Column(Order = 5)]
        public decimal list_price { get; set; }
    }
}
