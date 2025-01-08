using FitFlow.DBContext;
using FitFlow.Models;

namespace FitFlow.Service
{
    public class UserService
    {
        private readonly FitFlowDbContext _context;

        public UserService(FitFlowDbContext context)
        {
            _context = context;
        }

        public List<UserDTO> GetAllUsers()
        {
            return _context.Users.ToList();
        }

        public UserDTO CreateUser(UserDTO userDto)
        {
            _context.Users.Add(userDto);
            _context.SaveChanges();
            return userDto;
        }

        public List<UserTrainingPlanDTO> GetTrainingPlansForUser(int userId)
        {
            return _context.UserTrainingPlans
                .Where(tp => tp.UserId == userId)
                .ToList();
        }
    }
}
