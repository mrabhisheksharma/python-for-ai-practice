# 05a - While Loops Basic
tokens_left = 50
tokens_per_generation = 15

while tokens_left >= tokens_per_generation:
    print(f"Generating text... (Tokens left: {tokens_left})")
    tokens_left -= tokens_per_generation

print(f"Generation stopped. Not enough tokens. (Remaining: {tokens_left})")
