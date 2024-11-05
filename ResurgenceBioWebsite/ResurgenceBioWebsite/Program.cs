using System.Diagnostics;
using Microsoft.FluentUI.AspNetCore.Components;
using ResurgenceBioWebsite.Client.Layout;
using ResurgenceBioWebsite.Client.Pages;
using ResurgenceBioWebsite.Components;
using Tailwind;

var builder = WebApplication.CreateBuilder(args);

// note: enable detailed errors
builder.Services.AddServerSideBlazor().AddCircuitOptions(options =>
{
	options.DetailedErrors = true;
});

// Add services to the container.
builder.Services.AddRazorComponents()
	.AddInteractiveServerComponents()
	.AddInteractiveWebAssemblyComponents();

builder.Services.AddScoped<MainLayoutService>();
builder.Services.AddScoped<MobileNavMenuService>();
builder.Services.AddScoped<NavBarService>();

builder.Services.AddHttpClient();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseWebAssemblyDebugging();
}
else
{
	app.UseExceptionHandler("/Error", createScopeForErrors: true);
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
	.AddInteractiveServerRenderMode()
	.AddInteractiveWebAssemblyRenderMode()
	// Add additional assembles of the components from the shared library here
	.AddAdditionalAssemblies(typeof(ResurgenceBioWebsite.Client._Imports).Assembly);

app.Run();
