# 06b - List Comprehensions (Advanced)
# A concise way to create lists
temperatures_c = [22.5, 25.0, 19.8, 30.1]

# Convert Celsius to Fahrenheit
temperatures_f = [(c * 9/5) + 32 for c in temperatures_c]
print(f"Fahrenheit: {temperatures_f}")

# Filter data (e.g., finding hot days)
hot_days_c = [c for c in temperatures_c if c > 24]
print(f"Hot days (C): {hot_days_c}")
