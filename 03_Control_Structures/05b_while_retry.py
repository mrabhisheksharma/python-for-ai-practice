# 05b - While Loops for Retry Logic (Advanced)
import time
import random

max_retries = 3
attempt = 0
success = False

while attempt < max_retries and not success:
    attempt += 1
    print(f"API Call Attempt {attempt}...")
    
    # Simulate a 30% chance of API success
    if random.random() > 0.7:
        success = True
        print("API Call Successful!")
    else:
        print("API Rate Limit Hit. Waiting...")
        time.sleep(1)

if not success:
    print("Failed to reach API after maximum retries.")
