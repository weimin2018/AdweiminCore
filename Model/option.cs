using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    [Table("Option")]
    public class option
    {
        [DisplayName("配置名称")]
        [Key,Column("name")]
        public string name { get; set; }

        [DisplayName("配置所属用户")]
        [Column("user")]
        [ForeignKey("user")]
        public int user { get; set; }

        [DisplayName("配置值")]
        [Column("value", TypeName = "text")]
        public string value { get; set; }
    }
}
