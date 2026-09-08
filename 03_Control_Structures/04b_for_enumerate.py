# 04b - For Loops with Enumerate and Zip (Advanced)
prompts = ["Poem", "Math", "Translation"]
models = ["GPT-4", "Claude", "Gemini"]

# Enumerate gives us the index
print("--- Using Enumerate ---")
for index, prompt in enumerate(prompts):
    print(f"Task {index + 1}: {prompt}")

# Zip lets us iterate over two lists simultaneously
print("\n--- Using Zip ---")
for prompt, model in zip(prompts, models):
    print(f"Routing '{prompt}' to {model}")
