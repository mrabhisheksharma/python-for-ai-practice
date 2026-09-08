def calculate_accuracy(correct, total):
    if total == 0:
        return 0.0
    return (correct / total) * 100

print(f"Accuracy: {calculate_accuracy(85, 100)}%")
