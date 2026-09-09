# Writing to a file
with open("data.txt", "w") as file:
    file.write("User: Hello\nAssistant: Hi there!\n")

print("File written successfully.")