namespace ResurgenceBioWebsite.Client.Layout;

public class MainLayoutService
{
    private MainLayout? MainLayout { get; set; }

    public void SetMainLayout(MainLayout? mainLayout)
    {
        MainLayout = mainLayout;
    }

    public void DisableInteractivity(bool value)
    {
        MainLayout?.TogglePageInteractivity(value);
    }
}