using Microsoft.Extensions.Hosting;
using Grpc.Core;
using System.Threading.Tasks;
using System.Threading;

namespace Auth
{
    public class GrpcServerHostedService : IHostedService
    {
        private Server _server;

        public GrpcServerHostedService(Server server)
        {
            _server = server;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _server.Start();
            return Task.CompletedTask;
        }

        public async Task StopAsync(CancellationToken cancellationToken) => await _server.ShutdownAsync();
    }
}