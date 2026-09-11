"""
PRACTICE ACTIVITY: Resilient Weather Logger

Goal:
1. Make a request to the Open-Meteo API for your local city's coordinates.
2. Use a try/except block and a timeout.
3. If successful, parse the JSON and write the temperature to 'weather_log.txt'.
4. If it fails, catch the error and write the error message to 'weather_log.txt'.
"""

import requests
import time

url = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&current_weather=true" # Defaulting to NYC

try:
    print("Fetching weather data...")
    response = requests.get(url, timeout=5)
    response.raise_for_status()
    
    data = response.json()
    temp = data["current_weather"]["temperature"]
    
    # Write success to log file
    with open("weather_log.txt", "a") as f:
        log_entry = f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] Success: Temperature in NYC is {temp}°C\n"
        f.write(log_entry)
        
    print("Weather logged successfully! Check weather_log.txt")
    
except requests.exceptions.RequestException as e:
    # Write failure to log file
    with open("weather_log.txt", "a") as f:
        error_entry = f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] Error: Failed to fetch weather. Details: {e}\n"
        f.write(error_entry)
        
    print("Failed to fetch weather. Check weather_log.txt for details.")
