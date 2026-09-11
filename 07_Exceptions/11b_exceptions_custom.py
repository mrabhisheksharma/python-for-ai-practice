# 11b - Custom Exceptions (Advanced)
class RateLimitError(Exception):
    pass

def make_api_call(usage_count):
    if usage_count > 100:
        raise RateLimitError("You have exceeded your API quota.")
    return "Success"

print(make_api_call(150))