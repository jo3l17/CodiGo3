namespace EFCodeFirstWithDatabase.Migrations
{
   using System;
   using System.Data.Entity.Migrations;

   public partial class CambiaColumnaApodoASobrenombre : DbMigration
   {
      public override void Up()
      {
         //RenameColumn("dbo.Alumnoes", "apodo", "sobrenombre");

         AddColumn("dbo.Alumnoes", "sobrenombre", c => c.String());
         Sql("UPDATE dbo.Alumnoes set sobrenombre = apodo");
         DropColumn("dbo.Alumnoes", "apodo");
      }

      public override void Down()
      {
         //RenameColumn("dbo.Alumnoes", "sobrenombre", "apodo");
         AddColumn("dbo.Alumnoes", "apodo", c => c.String());
         Sql("UPDATE dbo.Alumnoes set apodo = sobrenombre");
         DropColumn("dbo.Alumnoes", "sobrenombre");
      }
   }
}
