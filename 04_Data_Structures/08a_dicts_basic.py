# 08a - Dictionaries Basic
model_info = {
    "name": "Model-A",
    "accuracy": 91.4,
    "tags": ["nlp", "v2"]
}

print(f"Model Name: {model_info['name']}")
model_info["accuracy"] = 92.0
print(f"Updated Accuracy: {model_info['accuracy']}")


print(model_info["tags"][1])