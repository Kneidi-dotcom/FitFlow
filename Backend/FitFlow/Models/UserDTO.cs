using System.ComponentModel.DataAnnotations;

namespace FitFlow.Models
{
    public class UserDTO
    {
        [Key]
        public int user_id { get; set; } // Datenbank generiert automatisch die ID
        [Required]
        public string Username { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string password_hash { get; set; }
        [Required]
        public string Experience { get; set; }
        public int Size { get; set; }
        public int BodyWeight { get; set; }
    }
}
