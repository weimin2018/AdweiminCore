using Microsoft.EntityFrameworkCore;
using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Persistence
{
    public class BlogDbContext : DbContext
    {
        public DbSet<Post> Post { get; set; }
        public DbSet<comment> DictType{get;set;}
        public DbSet<DictTag> DictTag{get;set;}

     

        public BlogDbContext(DbContextOptions<BlogDbContext> options)
            : base(options)
        {

        }
    }
}
