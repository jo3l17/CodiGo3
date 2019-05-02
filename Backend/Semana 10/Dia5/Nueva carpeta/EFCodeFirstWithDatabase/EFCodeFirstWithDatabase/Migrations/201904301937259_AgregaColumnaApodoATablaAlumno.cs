namespace EFCodeFirstWithDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AgregaColumnaApodoATablaAlumno : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Alumnoes", "apodo", c => c.String(nullable:true));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Alumnoes", "apodo");
        }
    }
}
