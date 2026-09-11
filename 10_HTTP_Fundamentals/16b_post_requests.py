import requests
import json

print("--------------------------------------------------")
print(" HTTP POST REQUEST (Sending Data)")
print("--------------------------------------------------")

url = "https://jsonplaceholder.typicode.com/posts"

# The data we want to send (e.g., creating a new blog post)
data_to_send = {
    "title": "Learning Python Requests",
    "body": "POST requests are used to send data to a server.",
    "userId": 1
}

print(f"Sending POST request to: {url}")
print(f"Data payload: {data_to_send}\n")

# Make the POST request. The 'json' parameter automatically converts 
# our Python dictionary into a JSON string and sets the correct headers.
response = requests.post(url, json=data_to_send)

# 201 Created is the standard status code when a POST request successfully creates a resource
print(f"Status Code: {response.status_code}")

if response.status_code == 201:
    print("Success! The server accepted our data and created the resource.")
    
    # The server usually responds with the created object (including its new ID)
    response_data = response.json()
    print("\nServer Response:")
    print(json.dumps(response_data, indent=2))
else:
    print(f"Failed to create resource. Server responded with: {response.text}")

print("--------------------------------------------------")
