# 04a - For Loops Basic
# Processing a batch of user prompts
prompts = [
    "Write a poem about AI",
    "How far is the moon?",
    "Translate 'hello' to French"
]

for prompt in prompts:
    print(f"Processing: {prompt}")
    # Simulating API call...
    print("Done.")
