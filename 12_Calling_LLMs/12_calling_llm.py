# 12_calling_llm.py
# Make sure to run: pip install openai python-dotenv
import os
from dotenv import load_dotenv
from openai import OpenAI

# Loads environment variables from a .env file
load_dotenv()

# The client automatically looks for the OPENAI_API_KEY environment variable
client = OpenAI()

def ask_assistant(prompt: str):
    print("Calling OpenAI API...")
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
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
    user_prompt = "What are the top 3 new developments in AI this month?"
    ask_assistant(user_prompt)
