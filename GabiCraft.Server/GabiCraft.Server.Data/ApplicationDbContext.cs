using Microsoft.EntityFrameworkCore;

namespace GabiCraft.Server.Data;

public sealed class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    : DbContext(options)
{
}
