namespace EFCodeFirstWithDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BorrarTablaAlumno : DbMigration
    {
        public override void Up()
        {
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
            
        }
    }
}
