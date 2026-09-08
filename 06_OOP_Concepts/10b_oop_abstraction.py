# 10d - OOP: Abstraction
from abc import ABC, abstractmethod

# Abstract Base Class (Blueprint for other classes)
class BaseModel(ABC):
    @abstractmethod
    def predict(self, data):
        pass

# We MUST implement the predict method, otherwise Python throws an error
class TextModel(BaseModel):
    def predict(self, data):
        return "positive" if "good" in data.lower() else "negative"

model = TextModel()
print(model.predict("This is a good day!"))
