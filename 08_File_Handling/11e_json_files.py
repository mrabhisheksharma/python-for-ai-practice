import json

result = {"model": "gpt-4o-mini", "accuracy": 91.4, "tags": ["nlp", "v2"]}

# Writing JSON
with open("result.json", "w") as f:
    json.dump(result, f, indent=2)

# Reading JSON
with open("result.json", "r") as f:
    loaded = json.load(f)

print(loaded["model"])
