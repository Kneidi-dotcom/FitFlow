using System.ComponentModel.DataAnnotations;

namespace FitFlow.Models
{
    public class UserDTO
    {
        [Key]
        public int user_id { get; set; }
        public string Username { get; set; }
        public DateTime Birthdate { get; set; }
        public string Email { get; set; }
        public string password_hash { get; set; }
        public string Experience { get; set; }
        public int Size { get; set; }
        public int Bodyweight { get; set; }
    }
}
