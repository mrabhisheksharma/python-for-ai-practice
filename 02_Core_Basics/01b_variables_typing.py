# 01b - Variables with Type Hinting (Advanced)
# In modern Python (especially for AI), type hints are highly recommended.
model_name: str = "Claude-Fable-5"
accuracy: float = 92.4
is_active: bool = True
tags: list[str] = ["vision", "text"]

def get_model_info(name: str, acc: float) -> str:
    return f"{name} operates at {acc}% accuracy."

print(get_model_info(model_name, accuracy))
