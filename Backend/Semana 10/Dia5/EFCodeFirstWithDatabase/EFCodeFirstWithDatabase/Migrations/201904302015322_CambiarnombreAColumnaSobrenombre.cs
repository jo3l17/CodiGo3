namespace EFCodeFirstWithDatabase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CambiarnombreAColumnaSobrenombre : DbMigration
    {
        public override void Up()
        {
            // RenameColumn("dbo.alumnoes", "sobrenombre", "sobrenombre2");
            AddColumn("dbo.Alumnoes", "sobrenombre2", c => c.String());
            Sql("UPDATE dbo.alumnoes set sobrenombre2 = sobrenombre");
            DropColumn("dbo.Alumnoes", "sobrenombre");
        }
        
        public override void Down()
        {
            // RenameColumn("dbo.alumnoes", "sobrenombre2", "sobrenombre");
            AddColumn("dbo.Alumnoes", "sobrenombre", c => c.String());
            Sql("UPDATE dbo.alumnoes set sobrenombre = sobrenombre2");
            DropColumn("dbo.Alumnoes", "sobrenombre2");
        }
    }
}
