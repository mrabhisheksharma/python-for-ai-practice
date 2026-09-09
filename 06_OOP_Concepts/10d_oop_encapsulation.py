# 10b - OOP: Encapsulation
class APIClient:
    def __init__(self, api_key):
        self.__api_key = api_key  # Double underscore makes it private

    def fetch_data(self):
        # The class uses the hidden key internally
        return f"Fetching data using hidden key: ...{self.__api_key[-4:]}"

client = APIClient("sk-12345XYZ")
print(client.fetch_data())

# Trying to access it directly will crash!
print(client.__api_key) # AttributeError
