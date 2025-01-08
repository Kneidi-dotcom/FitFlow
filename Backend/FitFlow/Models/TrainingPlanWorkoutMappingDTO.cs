using System.ComponentModel.DataAnnotations;

namespace FitFlow.Models
{
    public class TrainingPlanWorkoutMappingDTO
    {
        [Key]
        public int TpWorkoutId { get; set; }
        public int TrainingPlanId { get; set; }
        public int WorkoutId { get; set; }
    }
}
