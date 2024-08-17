using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Add shared services here

// todo: implement SignalR here
// builder.Services.AddScoped<INotificationService, NotificationService>();
//
// builder.Services.AddHttpClient("",(HttpClient client) => { client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress); });

await builder.Build().RunAsync();