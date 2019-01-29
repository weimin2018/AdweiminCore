using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    [Table("Meta")]
    public class meta
    {
        [DisplayName("项目主键")]
        [Key, Column("cid")]
        public int mid { get; set; }

        [DisplayName("名称")]
        [Column("name")]
        public string name { get; set; }

        [DisplayName("项目缩略名")]
        [Column("slug")]
        public string slug { get; set; }

        [DisplayName("项目类型")]
        [Column("type")]
        public string type { get; set; }

        [DisplayName("选项描述")]
        [Column("description")]
        public string description { get; set; }

        [DisplayName("项目所属内容个数")]
        [Column("count")]
        public int count { get; set; }

        [DisplayName("项目排序")]
        [Column("order")]
        public int order { get; set; }


    }
}
