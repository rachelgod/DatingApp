using System;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace API.Entities;

public class AppUser
{
    [Key]
    public int Id { get; set; }

    public required string UserName { get; set; }

    public required byte[] PasswordHash { get; set; }

    public required byte[] PasswordSalt { get; set; }
}
