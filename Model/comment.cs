using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    [Table("Comment")]
    public class Comment
    {
        [DisplayName("Comment表主键")]
        [Key,Column("Coid")]
        public int Coid { get; set; }


        [DisplayName("post表主键")]
        [Column("cid")]
        [ForeignKey("content")]
        public int Cid { get; set; }


        [DisplayName("评论生成时时间戳")]
        [Column("Created")]
        public int Created { get; set; }

        [DisplayName("评论作者")]
        [Column("Author")]
        public string Author { get; set; }


        [DisplayName("评论所属用户id")]
        [Column("AuthorId")]
        public int AuthorId { get; set; }

        [DisplayName("评论所属内容作者id")]
        [Column("OwnerId")]
        public int OwnerId { get; set; }

        [DisplayName("评论者邮件")]
        [Column("Mail")]
        public string Mail { get; set; }

        [DisplayName("评论者网址")]
        [Column("Url")]
        public string Url { get; set; }

        [DisplayName("评论者IP地址")]
        [Column("IP")]
        public string IP { get; set; }

        [DisplayName("评论者客户端")]
        [Column("Agent")]
        public string Agent { get; set; }

        [DisplayName("评论文字")]
        [Column("Text", TypeName = "text")]
        public string Text { get; set; }

        [DisplayName("评论类型")]
        [Column("Type")]
        public string Type { get; set; }


        [DisplayName("评论状态")]
        [Column("Status")]
        public string Status { get; set; }

        [DisplayName("父级评论")]
        [Column("Parent")]
        public int Parent { get; set; }
    }
}
