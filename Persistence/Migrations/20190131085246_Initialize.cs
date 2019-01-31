using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Initialize : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Comment",
                columns: table => new
                {
                    coid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    cid = table.Column<int>(nullable: false),
                    created = table.Column<int>(nullable: false),
                    author = table.Column<string>(nullable: true),
                    authorId = table.Column<int>(nullable: false),
                    ownerId = table.Column<int>(nullable: false),
                    mail = table.Column<string>(nullable: true),
                    url = table.Column<string>(nullable: true),
                    ip = table.Column<string>(nullable: true),
                    agent = table.Column<string>(nullable: true),
                    text = table.Column<string>(type: "text", nullable: true),
                    type = table.Column<string>(nullable: true),
                    status = table.Column<string>(nullable: true),
                    parent = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comment", x => x.coid);
                });

            migrationBuilder.CreateTable(
                name: "Content",
                columns: table => new
                {
                    cid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    title = table.Column<string>(maxLength: 200, nullable: true),
                    slug = table.Column<string>(maxLength: 200, nullable: true),
                    created = table.Column<int>(nullable: false),
                    modified = table.Column<int>(nullable: false),
                    text = table.Column<string>(type: "text", nullable: true),
                    order = table.Column<int>(nullable: false),
                    authorId = table.Column<int>(nullable: false),
                    template = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    status = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    commentsNum = table.Column<int>(nullable: false),
                    allowComment = table.Column<string>(nullable: false),
                    allowPing = table.Column<string>(nullable: false),
                    allowFeed = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Content", x => x.cid);
                });

            migrationBuilder.CreateTable(
                name: "Meta",
                columns: table => new
                {
                    cid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(nullable: true),
                    slug = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    count = table.Column<int>(nullable: false),
                    order = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meta", x => x.cid);
                });

            migrationBuilder.CreateTable(
                name: "Option",
                columns: table => new
                {
                    name = table.Column<string>(nullable: false),
                    user = table.Column<int>(nullable: false),
                    value = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Option", x => x.name);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    uid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    name = table.Column<int>(nullable: false),
                    password = table.Column<string>(nullable: true),
                    mail = table.Column<string>(nullable: true),
                    url = table.Column<string>(nullable: true),
                    screenName = table.Column<string>(nullable: true),
                    created = table.Column<int>(nullable: false),
                    activated = table.Column<int>(nullable: false),
                    logged = table.Column<int>(nullable: false),
                    group = table.Column<string>(nullable: true),
                    authCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.uid);
                });

            migrationBuilder.CreateTable(
                name: "Relationship",
                columns: table => new
                {
                    cid = table.Column<int>(nullable: false),
                    mid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Relationship", x => new { x.cid, x.mid });
                    table.ForeignKey(
                        name: "FK_Relationship_Content_cid",
                        column: x => x.cid,
                        principalTable: "Content",
                        principalColumn: "cid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Relationship_Meta_mid",
                        column: x => x.mid,
                        principalTable: "Meta",
                        principalColumn: "cid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Relationship_mid",
                table: "Relationship",
                column: "mid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comment");

            migrationBuilder.DropTable(
                name: "Option");

            migrationBuilder.DropTable(
                name: "Relationship");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Content");

            migrationBuilder.DropTable(
                name: "Meta");
        }
    }
}
