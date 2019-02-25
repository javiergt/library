using System.Threading.Tasks;
using Grpc.Core;
using static Library.AuthService;
using Library;
using Microsoft.EntityFrameworkCore;

namespace Auth
{
    class AuthServiceImpl : AuthServiceBase
    {
        public override async Task<AddUserResponse> AddUser(AddUserRequest request, ServerCallContext context)
        {
            using (var db = new AuthDbContext())
            {
                var user = new User { FirstName = request.FirstName, LastName = request.LastName, Email = request.Email };
                db.Users.Add(user);
                await db.SaveChangesAsync();
                return new AddUserResponse { Id = user.Id };
            }

            throw new RpcException(new Status(StatusCode.Internal, ""));
        }

        public override async Task<GetUserResponse> GetUser(GetUserRequest request, ServerCallContext context)
        {
            using (var db = new AuthDbContext())
            {
                var user = await db.Users.SingleOrDefaultAsync(u => u.Id == request.Id);

                if (user == null)
                {
                    throw new RpcException(new Status(StatusCode.NotFound, $"User not found: {request.Id}"));
                }

                return new GetUserResponse { Id = user.Id, FirstName = user.FirstName, LastName = user.LastName, Email = user.Email };
            }

            throw new RpcException(new Status(StatusCode.Internal, ""));
        }

        public override async Task ListUsers(ListUsersRequest request, IServerStreamWriter<ListUsersResponse> responseStream, ServerCallContext context)
        {
            using (var db = new AuthDbContext())
            {
                foreach (var user in db.Users)
                {
                    await responseStream.WriteAsync(new ListUsersResponse { Id = user.Id, FirstName = user.FirstName, LastName = user.LastName, Email = user.Email});
                }
            }
        }
    }
}