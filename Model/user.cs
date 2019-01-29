using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model
{
    [Table("User")]
    public class user
    {
        [DisplayName("user表主键")]
        [Key, Column("uid")]
        public int uid { get; set; }

        [DisplayName("用户名称")]
        [Column("name")]
        public int name { get; set; }

        [DisplayName("用户密码")]
        [Column("password")]
        public string password { get; set; }

        [DisplayName("用户邮箱")]
        [Column("mail")]
        public string mail { get; set; }

        [DisplayName("用户主页")]
        [Column("url")]
        public string url { get; set; }

        [DisplayName("用户显示的名称")]
        [Column("screenName")]
        public string screenName { get; set; }

        [DisplayName("用户注册时时间戳")]
        [Column("created")]
        public int created { get; set; }

        [DisplayName("最后活动时间戳")]
        [Column("activated")]
        public int activated { get; set; }

        [DisplayName("上次登录最后活跃时间")]
        [Column("logged")]
        public int logged { get; set; }

        [DisplayName("用户组")]
        [Column("group")]
        public string group { get; set; }

        [DisplayName("用户登录验证码")]
        [Column("authCode")]
        public string authCode { get; set; }

    }
}
