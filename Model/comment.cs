using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    [Table("Comment")]
    public class comment
    {
        [DisplayName("comment表主键")]
        [Column("coid")]
        public int coid { get; set; }


        [DisplayName("post表主键")]
        [Column("cid")]
        public int cid { get; set; }


        [DisplayName("评论生成时时间戳")]
        [Column("created")]
        public int created { get; set; }

        [DisplayName("评论作者")]
        [Column("created")]
        public string author { get; set; }


        [DisplayName("评论所属用户id")]
        [Column("authorId")]
        public int authorId { get; set; }

        [DisplayName("评论所属内容作者id")]
        [Column("ownerId")]
        public int ownerId { get; set; }

        [DisplayName("评论者邮件")]
        [Column("mail")]
        public string mail { get; set; }

        [DisplayName("评论者网址")]
        [Column("url")]
        public string url { get; set; }

        [DisplayName("评论者ip地址")]
        [Column("ip")]
        public string ip { get; set; }

        [DisplayName("评论者客户端")]
        [Column("agent")]
        public string agent { get; set; }

        [DisplayName("评论文字")]
        [Column("text", TypeName = "text")]
        public string text { get; set; }

        [DisplayName("评论类型")]
        [Column("type")]
        public string type { get; set; }


        [DisplayName("评论状态")]
        [Column("status")]
        public string status { get; set; }

        [DisplayName("评论状态")]
        [Column("parent")]
        public int parent { get; set; }
    }
}
