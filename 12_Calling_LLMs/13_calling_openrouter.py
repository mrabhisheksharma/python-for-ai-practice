# 13_calling_openrouter.py
# Make sure to run: pip install openai python-dotenv
import os
from dotenv import load_dotenv
from openai import OpenAI

# Loads environment variables from a .env file
load_dotenv()

# OpenRouter uses the OpenAI SDK format, just with a different base_url
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENRouter_API_KEY")
)

def ask_openrouter(prompt: str):
    print("Calling OpenRouter API...")
    try:
        response = client.chat.completions.create(
            model="meta-llama/llama-3.1-8b-instruct",
            messages=[
                {"role": "system", "content": "You are a helpful assistant.You provide summarized short answers."},
                {"role": "user", "content": prompt}
            ]
        )
        print("\n--- Response ---")
        print(response.choices[0].message.content)
        print("----------------\n")
    except Exception as e:
        print(f"API call failed: {e}")

if __name__ == "__main__":
    # We will configure the .env file with our API key before running this.
    user_prompt = "What are the fundamental concepts of AI?"
    ask_openrouter(user_prompt)
