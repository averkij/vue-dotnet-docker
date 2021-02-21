using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace Lingtrain
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            //Custom CORS policy
            services.AddCors(options => options.AddPolicy("ApiCorsPolicy", builder =>
                {
                    // builder.WithOrigins("http://localhost:8080").AllowAnyMethod().AllowAnyHeader();
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                }));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Lingtrain API", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Lingtrain Web v1"));
            }
            app.UseHttpsRedirection();
            app.UseRouting();            
            app.UseCors("ApiCorsPolicy");

            //ConfigureAuth(app);
            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
