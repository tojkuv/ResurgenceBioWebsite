namespace ResurgenceBioWebsite.Client.Layout;

public class NavBarService
{
    private NavBar? NavBar { get; set; }

    public void SetNavBar(NavBar? navBar)
    {
        NavBar = navBar;
    }

    public void UpdateNavBarBackground(string? value = null)
    {
        NavBar?.UpdateNavBarBackground(value);
    }
}