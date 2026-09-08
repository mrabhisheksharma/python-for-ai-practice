squares = [x**2 for x in range(5)]
even_only = [x for x in range(10) if x % 2 == 0]
print(squares)
print(even_only)

names = ["Model-A", "Model-B", "Model-C"]
accuracies = [91.4, 85.2, 78.0]
accuracy_map = {name: acc for name, acc in zip(names, accuracies)}
print(accuracy_map)

models = [{"name": "A", "accuracy": 91.4}, {"name": "B", "accuracy": 85.2}]
models.sort(key=lambda m: m["accuracy"], reverse=True)
for m in models: print(f"{m['name']}: {m['accuracy']}")
