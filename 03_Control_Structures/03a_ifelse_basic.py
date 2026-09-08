# 03a - If/Else Basic
user_input = "tell me weather today"
intent = "unknown"

if "joke" in user_input.lower():
    intent = "entertainment"
elif "weather" in user_input.lower():
    intent = "information"
else:
    intent = "general_chat"

print(f"Detected intent: {intent}")
    