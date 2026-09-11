# Session 2 Additions — Comprehensions, Lambdas, JSON File Handling & Refactor Demo

Content to layer onto the existing presentation. Everything already built (Intro, Core Basics, Control Structures, Data Structures, Functions & Modules, OOP, Git, Exceptions, File Handling — text, Concurrency, Calling API) stays as-is. Git stays untouched for now — no `branch` added yet.

---

## 1. List & Dict Comprehensions + Lambda Functions

*New topic — fits naturally as a 3rd sub-pane inside the existing "Functions & Modules" section, alongside Functions and Modules & Packages.*

### 1.1 List Comprehensions
```python
squares = [x**2 for x in range(5)]
even_only = [x for x in range(10) if x % 2 == 0]
```
Hint: same result as a `for` loop + `.append()`, just condensed to one line — the "Pythonic" way once the pattern is familiar.

### 1.2 Dict Comprehensions
```python
names = ["Model-A", "Model-B", "Model-C"]
accuracies = [91.4, 85.2, 78.0]
accuracy_map = {name: acc for name, acc in zip(names, accuracies)}
```
Hint: directly reusable in the Data Structures + API sections — building a lookup dict from two parallel lists is common when processing API results.

### 1.3 Lambda Functions
```python
square = lambda x: x ** 2

models = [{"name": "A", "accuracy": 91.4}, {"name": "B", "accuracy": 85.2}]
models.sort(key=lambda m: m["accuracy"], reverse=True)
```
Hint: a lambda is a throwaway, unnamed function — mainly used inline as a `key=` for `sort()`/`sorted()`, or with `map()`/`filter()`. Not meant to replace regular `def` functions for anything reused.

---

## 2. File Handling — Add JSON (extends existing section)

Keep the existing text-file sub-pane as-is; add this as a second sub-pane ("JSON Files") next to it, same sub-nav pattern already used elsewhere in the deck.

```python
import json

result = {"model": "gpt-4o-mini", "accuracy": 91.4, "tags": ["nlp", "v2"]}

# Writing JSON
with open("result.json", "w") as f:
    json.dump(result, f, indent=2)

# Reading JSON
with open("result.json", "r") as f:
    loaded = json.load(f)

print(loaded["model"])
```
Hint: `json.dump`/`json.load` work directly with file objects — pair with `try/except json.JSONDecodeError` if the file might be malformed. This is also the same shape as parsing an API response (dict-like access), so it's a good callback to the Calling API section.

---

## 3. Hands-on Demo: Refactor — Read Prompt from File, Save Response to File

*New sub-pane inside the existing "Calling API" section. Keep the current basic call untouched as sub-pane 1 ("Basic Call"); add this as sub-pane 2 ("File-based Refactor").*

`prompt.txt`:
```
What are the top 3 new developments in AI this month?
```

```python
from dotenv import load_dotenv
import os
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

with open("prompt.txt", "r") as f:
    prompt = f.read().strip()

try:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    reply = response.choices[0].message.content

    with open("response.txt", "w") as f:
        f.write(reply)

    print("Response saved to response.txt")
except Exception as e:
    print(f"API call failed: {e}")
```
Hint: same input → model call → parsed response shape as before — only difference is the prompt now comes from a file and the output is persisted instead of just printed. Sets up file-based I/O as the norm for anything beyond a one-off script.

---

## 4. Homework — One Basic, One Advanced (Combined Capstones)

Two exercises total, each pulling together several topics from the session rather than one per topic — closer to what a student would actually build.

### Basic: "Model Score Tracker"
Combines: Core Basics, Control Structures, Data Structures, Functions, File Handling (JSON).

- Store a handful of model scores as a list of dicts (`name`, `accuracy`).
- Write a function `grade(score)` that returns `"Excellent"` / `"Good"` / `"Needs work"` using `if/elif/else`.
- Loop through the list, print each model's name + grade.
- Save the full list (with an added `"grade"` key per entry) to a JSON file.
- Read the JSON file back and print a one-line summary (e.g. count of "Excellent" models).

### Advanced: "AI Query History Tool"
Combines: OOP (abstraction), Exceptions (custom), Comprehensions & Lambdas, File Handling (JSON read-modify-write), Calling API (file-based refactor), Concurrency.

- Define an abstract `BaseHandler` (using `abc`) with an abstract `run(prompt)` method; implement a subclass that wraps the OpenAI call from the file-based demo, wrapped in `try/except` raising a custom `APICallError` on failure.
- Read a list of 2–3 prompts from a file (one per line).
- Use `threading` to fire the calls concurrently instead of one at a time; measure and print total time taken.
- Use a list comprehension or `lambda`+`sorted()` to order the results by response length (or any other simple metric).
- Append each `{prompt, response, timestamp}` result to a persistent `history.json` file using the read-modify-write pattern (don't overwrite past runs).
