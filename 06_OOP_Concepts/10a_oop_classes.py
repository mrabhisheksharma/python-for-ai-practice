# 10a - OOP: Classes & Objects
class AIModel:
    def __init__(self, name, accuracy):
        self.name = name
        self.accuracy = accuracy

    def summary(self):
        return f"{self.name}: {self.accuracy}% accuracy"

model = AIModel("Model-A", 91.4)
print(model.summary())
