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
    }
}
