# 08b - Nested Dictionaries (JSON handling)
# Simulating an API response
api_response = {
    "id": "chatcmpl-123",
    "model": "gpt-4",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Hello! How can I help you today?"
            },
            "finish_reason": "stop"
        }
    ]
}

# Extracting deeply nested data
reply = api_response["choices"][1]
print(f"AI Reply: {reply}")
