# 00b - Program Structure
# 1. Imports (bringing in external libraries)
import time
import math

# 2. Global Variables / Configurations
APP_NAME = "Python Foundation"
VERSION = 1.0

# 3. Functions (Reusable blocks of code)
def greet_user(name: str) -> str:
    """This is a docstring. It explains what the function does."""
    return f"Hello, {name}! Welcome to {APP_NAME} v{VERSION}."

def perform_calculation(x: float, y: float) -> float:
    # A simple calculation using the math module
    return math.sqrt(x**2 + y**2)

# 4. Main Execution Block
# This prevents code from running if this file is imported as a module by another file.
if __name__ == "__main__":
    print("--- Starting Program ---")
    
    # Using the function
    greeting = greet_user("Student")
    print(greeting)
    
    # Adding a small delay for dramatic effect
    time.sleep(1)
    
    # Performing some logic
    result = perform_calculation(3.0, 4.0)
    print(f"The result of our calculation is: {result}")
    
    print("--- Program Finished ---")