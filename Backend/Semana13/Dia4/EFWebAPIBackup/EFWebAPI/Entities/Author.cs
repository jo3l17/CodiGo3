using EFWebAPI.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Entities
{
   public class Author : IValidatableObject
   {
      public int ID { get; set; }
      [Required]
      //[CapitalizeFirstLetter]
      [StringLength(50, ErrorMessage = "El campo nombre debe tener 50 caracteres")]
      public string name { get; set; }
      [Range(18,110)]
      public int age { get; set; }
      //[CreditCard]
      public string creditCard { get; set; }
      [Url]
      public string website { get; set; }

      public ICollection<Book> Books { get; set; }

      public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
      {
         var firstLetter = name.ToString()[0].ToString();
         //if (char.IsUpper(value.ToString(), 0))
         if (firstLetter != firstLetter.ToUpper())
            yield return new ValidationResult("La primera letra debe" +
               "ser mayúscula", new string[] { nameof(name) });

         /*
         IEnumerable<int> GetNumbers(){
            yield return 1;
            yield return 2;
            yield return 3;
         }
         foreach (var item in GetNumbers())
         {

         }
         */
      }
   }
}
