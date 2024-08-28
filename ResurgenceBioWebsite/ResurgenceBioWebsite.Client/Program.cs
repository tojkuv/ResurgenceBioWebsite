using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using ResurgenceBioWebsite.Client.Layout;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddScoped<MainLayoutService>();
builder.Services.AddScoped<NavBarService>();
builder.Services.AddScoped<MobileNavMenuService>();

await builder.Build().RunAsync();