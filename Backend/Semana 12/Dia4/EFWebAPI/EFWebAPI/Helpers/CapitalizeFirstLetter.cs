using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFWebAPI.Helpers
{
    public class CapitalizeFirstLetter : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var firstLetter = value.ToString()[0].ToString();

            //if (char.IsUpper(value.ToString(), 0))
            if (firstLetter == firstLetter.ToUpper())
                return ValidationResult.Success;
            else
                return new ValidationResult("First letter must be uppercase");
        }
    }
}
