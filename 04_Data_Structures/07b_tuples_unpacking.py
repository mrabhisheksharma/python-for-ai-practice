# 07b - Tuple Unpacking (Advanced)
# Often used when returning multiple values from a function
def get_model_stats():
    # Returns (name, accuracy, parameters_billions)
    return ("Llama-3", 92.5, 70)

name, accuracy, params = get_model_stats()
print(f"Name: {name}")
print(f"Accuracy: {accuracy}%")
print(f"Parameters: {params}B")
