
using System.Text.Json;
using Microsoft.Extensions.Caching.Distributed;

namespace Backend.Services;

public class RedisCacheService : ICacheService
{
    private readonly IDistributedCache _cache;
    private readonly JsonSerializerOptions _otp = new() {PropertyNameCaseInsensitive = true};
    public RedisCacheService(IDistributedCache cache)
    {
        _cache = cache;
    }
    public async Task<T?> GetAsync<T>(string key)
    {
        var json = await _cache.GetStringAsync(key);
        return json != null ? JsonSerializer.Deserialize<T>(json, _otp) : default;
    }

    public async Task RemoveAsync(string key)
    {
        await _cache.RemoveAsync(key);
    }

    public async Task SetAsync<T>(string key, T value, TimeSpan? ttl = null)
    {
        var json = JsonSerializer.Serialize(value);
        var opts = new DistributedCacheEntryOptions();
        if (ttl.HasValue) opts.SetAbsoluteExpiration(ttl.Value);
        await _cache.SetStringAsync(key, json, opts);
    }
}