using System;

public class Employee
{
    public string Name { get; set; } = string.Empty;
    public int EmployeeID { get; set; }
}

public class Manager : Employee
{
    public int NumberOfTeams { get; set; }
}

public class SeniorManager : Manager
{
    public string Region { get; set; } = string.Empty;
}

public class Director : SeniorManager
{
    public int NumberOfDepartments { get; set; }
}

public class VicePresident : Director
{
    public string Division { get; set; } = string.Empty;
}

public class President : VicePresident
{
    public string Company { get; set; } = string.Empty;
}

public static class EmployeeHierarchyDemo
{
    public static void Main()
    {
        var president = new President
        {
            Name = "Alex Morgan",
            EmployeeID = 1,
            NumberOfTeams = 12,
            Region = "North America",
            NumberOfDepartments = 4,
            Division = "Operations",
            Company = "Contoso"
        };

        Console.WriteLine($"{president.Name} leads {president.Company}'s {president.Division} division in {president.Region}.");
    }
}
