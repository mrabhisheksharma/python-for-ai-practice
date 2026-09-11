import requests
import time

url = "https://api.open-meteo.com/v1/forecast?latitude=26.57&longitude=74.01&current_weather=true"
max_retries = 3

print("--- Robust API Call with Retries and Exception Handling ---")

for attempt in range(max_retries):
    try:
        print(f"Attempt {attempt + 1}...")
        
        # Add timeout to prevent the program from hanging forever
        response = requests.get(url, timeout=5)
        
        # Raise an exception if the status code isn't 200 OK
        response.raise_for_status() 
        
        # If we got here, it succeeded!
        temp = response.json()["current_weather"]["temperature"]
        print(f"Success! The temperature is {temp}°C in Rajashthan")
        break  # Exit the loop on success
        
    except requests.exceptions.Timeout:
        print(f"Error: The request timed out. Retrying...")
        time.sleep(2)  # Wait before trying again
        
    except requests.exceptions.RequestException as e:
        # RequestException catches any requests-related error (Connection error, 404, etc.)
        print(f"Fatal API Error: {e}")
        break  # Exit loop immediately for non-recoverable errors
