# 10c - OOP: Inheritance & Polymorphism
class AIModel:
    def __init__(self, name, accuracy):
        self.name = name
        self.accuracy = accuracy

    def summary(self):
        return f"{self.name}: {self.accuracy}% accuracy"

class AdvancedModel(AIModel):
    def __init__(self, name, accuracy, version):
        super().__init__(name, accuracy)
        self.version = version

    def summary(self):
        # Polymorphism: overriding the parent's behavior
        base = super().summary()
        return f"{base} | version: {self.version}"

models = [AIModel("Baseline", 70.0), AdvancedModel("Advanced", 91.4, "v2")]
for m in models:
    print(m.summary())
