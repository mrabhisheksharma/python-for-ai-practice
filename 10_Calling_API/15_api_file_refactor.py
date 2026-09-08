from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

with open("prompt.txt", "r") as f:
    prompt = f.read().strip()

try:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    reply = response.choices[0].message.content

    with open("response.txt", "w") as f:
        f.write(reply)

    print("Response saved to response.txt")
except Exception as e:
    print(f"API call failed: {e}")
