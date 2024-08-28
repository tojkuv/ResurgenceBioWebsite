namespace ResurgenceBioWebsite.Client.Layout;

public class MobileNavMenuService
{
    private MobileNavMenu? MobileNavMenu { get; set; }

    public bool IsMobileNavigationMenuVisible { get; set; } = false;

    public void SetMobileNavMenu(MobileNavMenu? mobileNavMenu)
    {
        MobileNavMenu = mobileNavMenu;
    }

    public void ShowDrawerNavigation()
    {
        MobileNavMenu?.ShowDrawerNavigationMenu();
        IsMobileNavigationMenuVisible = true;
    }

    public void HideDrawerNavigationMenu()
    {
        MobileNavMenu?.HideDrawerNavigationMenu();
        IsMobileNavigationMenuVisible = false;
    }
}