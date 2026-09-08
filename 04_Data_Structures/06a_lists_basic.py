# 06a - Lists Basic
# Ordered, mutable collection of items
models = ["GPT-3.5", "GPT-4", "Claude-3"]

models.append("Gemini-1.5")
print(f"All models: {models}")

# Accessing elements
print(f"First model: {models[0]}")
print(f"Last model: {models[-1]}")


models[0] = "Deepseek"
print(models)