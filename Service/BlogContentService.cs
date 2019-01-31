using Microsoft.EntityFrameworkCore;
using Model;
using Persistence;
using System.Collections.Generic;
using System.Linq;

namespace Service
{
    public interface IBlogContentService
    {
        IEnumerable<content> GetAll();
        content Get(int id);
        bool Add(content model);
        bool Delete(int id);
        bool Update(content model);
    }
    public class BlogContentService : IBlogContentService
    {
        private readonly BlogDbContext _blogDbContext;

        public BlogContentService(BlogDbContext blogDbContext)
        {
            _blogDbContext = blogDbContext;
        }


        public IEnumerable<content> GetAll()
        {
            var result = new List<content>();
            try
            {
                result = _blogDbContext.CONTENT.ToList();
            }
            catch (System.Exception)
            {
            }
            return result;
        }

        public content Get(int id)
        {
            var result = new content();
            try
            {
                result = _blogDbContext.CONTENT.Single(x=>x.cid==id);
            }
            catch (System.Exception)
            {
            }
            return result;
        }

        public bool Add(content model)
        {
            try
            {
                _blogDbContext.Add(model);
                _blogDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }
            return true;
        }

        public bool Update(content model)
        {
            try
            {
                var originalModel = _blogDbContext.CONTENT.Single(x =>
                  x.cid == model.cid);

                originalModel.title = model.title;
                originalModel.slug = model.slug;
                originalModel.created = model.created;
                originalModel.modified = model.modified;
                originalModel.text = model.text;
                originalModel.order = model.order;

                originalModel.authorId = model.authorId;
                originalModel.template = model.template;
                originalModel.type = model.type;
                originalModel.status = model.status;
                originalModel.password = model.password;
                originalModel.commentsNum = model.commentsNum;
                originalModel.allowComment = model.allowComment;
                originalModel.allowPing = model.allowPing;
                originalModel.allowFeed = model.allowFeed;
                //外键
                originalModel.relationship = model.relationship;

                _blogDbContext.Update(originalModel);
                _blogDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }
            return true;
        }

        public bool Delete(int id)
        {
            try
            {
                _blogDbContext.Entry(new content { cid = id }).State = EntityState.Deleted;
                _blogDbContext.SaveChanges();
            }
            catch (System.Exception)
            {
                return false;
            }
            return true;
        }

    }
}
