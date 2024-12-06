using System.ComponentModel.DataAnnotations;

namespace FitFlow.Models
{
    public class WorkoutExerciseMappingDTO
    {
        [Key]
        public int WorkoutExerciseId { get; set; }
        public int WorkoutId { get; set; }
        public int ExerciseId { get; set; }
        public int Repetitions { get; set; }
        public int Sets { get; set; }
    }
}
