namespace EFCodeFirstWithDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BorrarColumnaSobrenombre2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Alumnoes", "sobrenombre2");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Alumnoes", "sobrenombre2", c => c.String());
        }
    }
}
