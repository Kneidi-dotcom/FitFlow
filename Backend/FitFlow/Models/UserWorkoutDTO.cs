using System.ComponentModel.DataAnnotations;

namespace FitFlow.Models
{
    public class UserWorkoutDTO
    {
        [Key]
        public int WorkoutId { get; set; }
        public int UserId { get; set; }
        public string WorkoutName { get; set; }
        public string Description { get; set; }
        public int DurationMinutes { get; set; }
    }
}
