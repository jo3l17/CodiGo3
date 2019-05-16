using EFWebAPI.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Models
{
   public class BookDTO
   {
      public int ID { get; set; }
      [Required]
      [CapitalizeFirstLetter]
      public string Title { get; set; }
   }
}
