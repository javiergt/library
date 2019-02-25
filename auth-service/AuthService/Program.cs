using Grpc.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace Auth
{
    class Program
    {
        const int port = 8080;

        static async Task Main(string[] args)
        {
            using (var db = new AuthDbContext())
            {
                db.Database.Migrate();
            }

            var hostBuilder = new HostBuilder()
                .ConfigureServices((hostContext, services) =>
                {
                    Server server = new Server
                    {
                        Services = { Library.AuthService.BindService(new AuthServiceImpl()) },
                        Ports = { new ServerPort("localhost", port, ServerCredentials.Insecure) }
                    };
                    services.AddSingleton<Server>(server);
                    services.AddHostedService<GrpcServerHostedService>();
                }).UseConsoleLifetime().Build();

            await hostBuilder.RunAsync();
        }
    }
}
