using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Post
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime PushDate { get; set; }

        public Guid TypeId { get; set; }

        public DictType DictType { get; set; }

        public Guid TagId { get; set; }

        public DictTag DictTag{ get; set; }
    }
}
