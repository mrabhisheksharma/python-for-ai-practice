# 08c - Dict Advanced: safe .get() and Comprehensions
config = {"timeout": 30, "retries": 3}

# Using .get() prevents KeyError if the key doesn't exist
# It returns a default value instead.
max_tokens = config.get("max_tokens", 1000)
print(f"Max tokens to use: {max_tokens}")

# Dictionary comprehension
names = ["Rajesh", "Tarun", "Priya"]
name_lengths = {name: len(name) for name in names}
print(name_lengths)
