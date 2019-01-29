using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    [Table("Relationship")]
    public class relationship
    {
        [DisplayName("内容主键")]
        [Column("cid")]
        public int cid { get; set; }

        [DisplayName("项目主键")]
        [Column("mid")]
        public int mid { get; set; }
    }
}
