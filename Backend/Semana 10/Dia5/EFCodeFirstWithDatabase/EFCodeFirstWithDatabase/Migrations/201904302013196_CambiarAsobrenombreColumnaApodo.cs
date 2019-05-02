namespace EFCodeFirstWithDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CambiarAsobrenombreColumnaApodo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Alumnoes", "sobrenombre", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Alumnoes", "sobrenombre");
        }
    }
}
