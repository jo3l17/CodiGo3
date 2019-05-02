namespace EFCodeFirstWithDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class QuitaColumnaSobrenombreDeTablaAlumno : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Alumnoes", "sobrenombre");
        }

        public override void Down()
        {
            AddColumn("dbo.Alumnoes", "sobrenombre", c => c.String());
        }
    }
}
