namespace EFCodeFirstWithDatabase.Migrations
{
   using System;
   using System.Data.Entity.Migrations;

   public partial class BorraTablaAlumno : DbMigration
   {
      public override void Up()
      {
         // PARA BORRAR UNA TABLA, PRIMERO HACER UN
         // RESPALDO DE ESTA
         CreateTable(
                "dbo.__Alumnoes",
                c => new
                {
                   ID = c.Int(nullable: false, identity: true),
                   nombre = c.String(),
                   apellido = c.String(),
                })
                .PrimaryKey(t => t.ID);
         Sql("INSERT INTO dbo.__Alumnoes (nombre,apellido) " +
            "SELECT nombre , apellido FROM dbo.Alumnoes");
         DropTable("dbo.Alumnoes");
      }

      public override void Down()
      {
         CreateTable(
             "dbo.Alumnoes",
             c => new
             {
                ID = c.Int(nullable: false, identity: true),
                nombre = c.String(),
                apellido = c.String(),
             })
             .PrimaryKey(t => t.ID);
         Sql("INSERT INTO dbo.Alumnoes (nombre,apellido) " +
            "SELECT nombre , apellido FROM dbo.__Alumnoes");
         DropTable("dbo.__Alumnoes");
      }
   }
}
