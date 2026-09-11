# 14_calling_claude.py
# Make sure to run: pip install anthropic python-dotenv
import os
from dotenv import load_dotenv
from anthropic import Anthropic

# Loads environment variables from a .env file
load_dotenv()

# Initialize the Anthropic client (automatically looks for ANTHROPIC_API_KEY)
client = Anthropic()

def ask_claude(prompt: str):
    print("Calling Claude API...")
    try:
        response = client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=1000,
            system="You are a helpful assistant.",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        print("\n--- Response ---")
        print(response.content[0].text)
        print("----------------\n")
    except Exception as e:
        print(f"API call failed: {e}")

if __name__ == "__main__":
    # We will configure the .env file with our API key before running this.
    user_prompt = "What are the top 3 new developments in AI this month?"
    ask_claude(user_prompt)
