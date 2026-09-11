import requests

# 1. Simple GET request
print("--- 1. Making a GET Request ---")
url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"
response = requests.get(url)

# Print Status Code (200 OK means Success!)
print(f"Status Code: {response.status_code}")

# Print Headers
print(f"Content-Type: {response.headers.get('Content-Type')}")

# 2. Parsing the JSON response
if response.status_code == 200:
    print("\n--- 2. Parsing Nested JSON ---")
    data = response.json()  # Converts the JSON string into a Python Dictionary
    # Let's extract the specific piece of data we care about
    temp = data["current_weather"]["temperature"]
    windspeed = data["current_weather"]["windspeed"]
    
    print(f"Current Temperature: {temp}°C")
    print(f"Current Windspeed: {windspeed} km/h")
else:
    print("Failed to fetch data")
