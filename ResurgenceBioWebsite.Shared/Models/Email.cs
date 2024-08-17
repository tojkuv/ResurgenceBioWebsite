using System.ComponentModel.DataAnnotations;

namespace ResurgenceBioWebsite.Shared.Models;

public class Email
{
    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email address.")]
    public string EmailAddress { get; set; }
}