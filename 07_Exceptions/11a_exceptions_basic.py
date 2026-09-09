# 11a - Exceptions Basic
try:
    # Simulating a division by zero error
    result = 10 / 1
except ZeroDivisionError:
    print("Error: You cannot divide by zero!")
finally:
    print("This block always runs, regardless of errors.")