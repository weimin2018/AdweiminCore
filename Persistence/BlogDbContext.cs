using Microsoft.EntityFrameworkCore;
using Model;

namespace Persistence
{
    public class BlogDbContext : DbContext
    {

        public BlogDbContext(DbContextOptions<BlogDbContext> options)
            : base(options)
        {

        }

        /// <summary>
        /// 重写 OnModelCreating 方法添加 FluentAPI 配置
        /// </summary>
        /// <param name="builder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<relationship>()
        .HasKey(cm => new { cm.cid, cm.mid });

            modelBuilder.Entity<relationship>()
                .HasOne(cm => cm.content)
                .WithMany(c => c.relationship)
                .HasForeignKey(cm => cm.cid);

            modelBuilder.Entity<relationship>()
                .HasOne(cm => cm.meta)
                .WithMany(m => m.relationship)
                .HasForeignKey(cm => cm.mid);
        }




        public DbSet<comment> COMMENT { get; set; }
        public DbSet<content> CONTENT { get; set; }
        public DbSet<meta> META { get; set; }
        public DbSet<option> OPTION { get; set; }
        public DbSet<relationship> RELATIONSHIP { get; set; }
        public DbSet<user> USER { get; set; }



    }
}
