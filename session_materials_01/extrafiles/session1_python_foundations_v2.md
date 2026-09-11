# Session 1: Python Foundations for the AI Era
**Track:** Upskilling Program — Foundations before GenAI/LLM/Agentic modules
**Format:** Instructor-led walkthrough with code explanation (not live-typed)
**Duration:** ~60 minutes
**Audience (pilot):** Siddesh — CSE (AI specialization), ML/TensorFlow/pandas/NumPy/scikit-learn background, new to LLMs/Transformers/GenAI, Django/FastAPI, and chatbot-building. Session written to also work for future students with less ML background.

---

## Why This Session Exists

The gap isn't "how to code" — it's the **software engineering habits** that separate a script from something you can ship, debug, and hand off to a teammate. Every topic today is a direct prerequisite for what's coming:

- **OOP** → every GenAI framework (LangChain, LlamaIndex, agent SDKs) is built as classes you'll subclass or compose.
- **Exception handling** → LLM calls fail constantly (rate limits, timeouts, malformed responses) — not optional in GenAI code.
- **Git** → team-based projects live and die by version control discipline.
- **The API demo** → this *is* the shape of every GenAI app: input → model call → parse response.

---

## 0. Opening Framing (3–5 min)

Hints to hit in your own words:

- Python isn't just the foundation for AI — it's also the go-to language for automating boring, repetitive tasks (file handling, scraping, emails, reports). Worth a one-line mention of your own experience with it.
- Optional resource pointer: **automatetheboringstuffwithpython.com** (Al Sweigart) — you did this course a few years back. Still actively maintained — 3rd edition released 2025, updated for current Python — so it's still a fair recommendation for someone who wants to build automation instincts alongside AI skills. Worth a 20-second mention + link, not a deep dive here.
- Roadmap: *Today = foundations → Next sessions = LLMs/Transformers/GenAI → Later = frameworks (Django/FastAPI) + building a chatbot.*

---

## 1. Data Structures in Python (15 min)

Concept framing: Python's built-in structures are how you hold data *before* you wrap it in a class — and dictionaries specifically are what every API response/JSON payload looks like, so this sets up both OOP and the demo later.

### 1.1 Lists (4 min)
Ordered, mutable, allows duplicates.

```python
scores = [91.4, 85.2, 78.0]
scores.append(88.9)
print(scores[0])        # indexing
print(scores[-1])       # last item
print(scores[1:3])      # slicing
```
Hint: the default "collection of things" — datasets, batches, results — almost always start life as a list.

### 1.2 Tuples (3 min)
Ordered, **immutable** — once created, can't change.

```python
coordinates = (28.7, 77.1)
name, accuracy = ("Model-A", 91.4)   # unpacking
```
Hint: use when the data shouldn't change after creation — fixed pairs/records, function returns with multiple values.

### 1.3 Dictionaries (5 min)
Key-value pairs — the shape of virtually every API request/response he'll touch going forward.

```python
model_info = {
    "name": "Model-A",
    "accuracy": 91.4,
    "tags": ["nlp", "v2"]
}
print(model_info["name"])
model_info["accuracy"] = 92.0     # update
for key, value in model_info.items():
    print(key, value)
```
Hint: direct callback — "this is exactly the shape of `messages=[{"role": "user", "content": "..."}]` in the API demo, and of `response.choices[0].message` you read back."

### 1.4 Sets (3 min)
Unordered, unique values only.

```python
tags_a = {"nlp", "v2", "prod"}
tags_b = {"nlp", "vision"}
print(tags_a & tags_b)   # intersection
print(tags_a | tags_b)   # union
```
Hint: good for a quick "when would you actually use this" — deduping a list, checking overlap/membership fast.

---

## 2. OOP Concepts — Overview (20 min)

Generic, framework-relevant examples — no ML jargon assumed, so this works whether or not a future student knows CNNs/TensorFlow.

### 2.1 Classes & Objects (5 min)
Concept: a class is a blueprint; an object is an instance holding its own state.

```python
class AIModel:
    def __init__(self, name, accuracy):
        self.name = name
        self.accuracy = accuracy

    def summary(self):
        return f"{self.name}: {self.accuracy}% accuracy"

model = AIModel("Model-A", 91.4)
print(model.summary())
```
Hint: same pattern as instantiating any object in a library — a class is just a template.

### 2.2 Abstraction (5 min)
Concept: expose *what* something does, hide *how*. Abstract base class defines a contract.

```python
from abc import ABC, abstractmethod

class BaseModel(ABC):
    @abstractmethod
    def predict(self, data):
        pass

class TextModel(BaseModel):
    def predict(self, data):
        return "positive" if "good" in data.lower() else "negative"
```
Hint: this exact pattern shows up in LangChain's `BaseLLM`/`BaseChatModel` — subclassing abstract classes is routine in GenAI frameworks.

### 2.3 Inheritance (5 min)
Concept: a subclass reuses and extends a parent's behavior instead of rewriting it.

```python
class AdvancedModel(AIModel):
    def __init__(self, name, accuracy, version):
        super().__init__(name, accuracy)
        self.version = version

    def summary(self):
        base = super().summary()
        return f"{base} | version: {self.version}"
```
Hint: keep it abstract — "a specialized model reuses everything from a general one, then adds its own extras."

### 2.4 Polymorphism (5 min)
Concept: different classes respond to the same method call in their own way.

```python
models = [AIModel("Baseline", 70.0), AdvancedModel("Advanced", 91.4, "v2")]
for m in models:
    print(m.summary())   # each calls its own version of summary()
```
Hint: this is why you can loop over a list of totally different agent tools/model wrappers later and just call `.run()` on each — polymorphism is what makes frameworks feel plug-and-play.

---

## 3. Git Basics (5 min)

Explain the concept first (why version control), then run these 7 core commands:

```bash
git init                       # start tracking a project
git clone <url>                # copy an existing repo locally
git status                     # what changed?
git add .                      # stage changes
git commit -m "message"        # snapshot with a clear message
git pull                       # get latest before you start working
git push                       # send your commits
```

Hints:
- Commit early, commit often, write messages a teammate can understand without asking.
- Always `pull` before you `push` to avoid conflicts.
- Never commit API keys — `.gitignore` your `.env` file (ties directly into the demo below).

---

## 4. Exception Handling (10 min)

### 4.1 try/except basics (5 min)
```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Something went wrong: {e}")
finally:
    print("This always runs — cleanup goes here.")
```

### 4.2 Custom exceptions (5 min)
```python
class ModelNotTrainedError(Exception):
    """Raised when prediction is attempted before training."""
    pass

class SimpleModel:
    def __init__(self):
        self.trained = False

    def predict(self, x):
        if not self.trained:
            raise ModelNotTrainedError("Call .train() before .predict()")
        return x * 2

m = SimpleModel()
try:
    m.predict(5)
except ModelNotTrainedError as e:
    print(f"Custom error caught: {e}")
```
Hint: once calling LLM APIs, try/except wraps almost every call — rate limits, timeouts, bad responses are the norm, not the exception.

---

## 5. Live Demo: Calling the OpenAI API and Reading the Response (3–4 min)

Quick note before running it — **virtual environments**: a project-local, isolated space for installed packages, so dependencies don't clash across projects. One-liner to mention:
```bash
python -m venv venv
source venv/bin/activate      # (Windows: venv\Scripts\activate)
pip install openai python-dotenv
```

Since a real API key will be used live, load it from a `.env` file instead of hardcoding it (`python-dotenv`):

```python
from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()  # reads .env → OPENAI_API_KEY
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

try:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": "What are the top 3 new developments in AI this month?"}]
    )
    print(response.choices[0].message.content)
except Exception as e:
    print(f"API call failed: {e}")
```

Hints:
- Shape to call out: **input → model call wrapped in try/except → parsed response.** This repeats in every GenAI tool built later.
- First live look at calling an LLM programmatically — bridge straight into next session's Transformers/LLM deep dive.

---

## 6. Wrap-up & Summary (5 min)

- One line each: OOP = how frameworks are structured, Exceptions = how you survive unreliable API calls, Git = how you collaborate safely, the demo = the shape of every GenAI app.
- Preview next session: LLMs, Transformers, and what's actually happening inside that `client.chat.completions.create()` call.
- Open floor: anything from today worth revisiting before moving on.
