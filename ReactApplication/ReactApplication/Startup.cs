using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactApplication.Startup))]
namespace ReactApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
