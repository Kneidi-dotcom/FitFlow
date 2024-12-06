using FitFlow.Models;
using Microsoft.EntityFrameworkCore;

namespace FitFlow.DBContext
{
    public class FitFlowDbContext : DbContext
    {
        public DbSet<UserDTO> Users { get; set; }
        public DbSet<UserWorkoutDTO> UserWorkouts { get; set; }
        public DbSet<ExerciseCatalogDTO> ExerciseCatalog { get; set; }
        public DbSet<WorkoutExerciseMappingDTO> WorkoutExerciseMappings { get; set; }
        public DbSet<UserTrainingPlanDTO> UserTrainingPlans { get; set; }
        public DbSet<TrainingPlanWorkoutMappingDTO> TrainingPlanWorkoutMappings { get; set; }

        public FitFlowDbContext(DbContextOptions<FitFlowDbContext> options) : base(options)
        {
        }
    }
}
