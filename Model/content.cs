using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    [Table("Content")]
    public class content
    {
        [DisplayName("post表主键")]
        [Key, Column("cid")]
        public int cid { get; set; }

        [DisplayName("内容标题")]
        [Column("title"), StringLength(200)]
        public string title { get; set; }

        [DisplayName("内容缩略名")]
        [Column("slug"), StringLength(200)]
        public string slug { get; set; }

        [DisplayName("内容生成时时间戳")]
        [Column("created")]
        public int created { get; set; }

        [DisplayName("内容更改时时间戳")]
        [Column("modified")]
        public int modified { get; set; }

        [DisplayName("内容文字")]
        [Column("text", TypeName = "text")]
        public string text { get; set; }

        [DisplayName("排序")]
        [Column("order")]
        public int order { get; set; }

        [DisplayName("内容所属用户id")]
        [Column("authorId")]
        public int authorId { get; set; }

        [DisplayName("内容使用的模板")]
        [Column("template")]
        public string template { get; set; }

        [DisplayName("内容类别")]
        [Column("type")]
        public string type { get; set; }

        [DisplayName("内容状态")]
        [Column("status")]
        public string status { get; set; }

        [DisplayName("内容保护密码")]
        [Column("password")]
        public string password { get; set; }

        [DisplayName("内容所属评论数")]
        [Column("commentsNum")]
        public int commentsNum { get; set; }

        [DisplayName("是否允许评论")]
        [Column("allowComment")]
        public char allowComment { get; set; }

        [DisplayName("是否允许ping")]
        [Column("allowPing")]
        public char allowPing { get; set; }

        [DisplayName("允许出现在聚合中")]
        [Column("allowFeed")]
        public char allowFeed { get; set; }

        public ICollection<relationship> relationship { get; set; }

    }
}
