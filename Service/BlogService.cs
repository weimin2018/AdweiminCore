using System;
using Persistence;
using Model;

namespace Service
{
    public interface IBlogService 
    {
    }
    public class BlogService:IBlogService
    {
        private readonly BlogDbContext _blogDbContext;

        public BlogService(BlogDbContext blogDbContext)
        {
            _blogDbContext = blogDbContext;
        }

        public bool Add(user model)
        {
            try
            {
                //_blogDbContext.;
                //_blogDbContext.SaveChanges();
            }
            catch
            {
                return false;
            }
            return true;
        }
    }


}
