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

## 4. Homework — One Basic, One Advanced, Per Topic Covered So Far

### Core Basics
- **Basic:** Write a script that converts a temperature from Celsius to Fahrenheit using variables and prints the result along with `type()` of each variable.
- **Advanced:** Take several mixed-type "raw" values (e.g. `"85"`, `92.5`, `"True"`), safely cast each to the right type, and compute a weighted score using arithmetic + comparison operators.

### Control Structures
- **Basic:** Print FizzBuzz for numbers 1–30 using `if/elif/else` inside a `for` loop.
- **Advanced:** Simulate a "flaky API call" retry loop using `while` + `break`/`continue` — stop after 3 successful calls or 5 total attempts, whichever comes first.

### Data Structures
- **Basic:** Build a list of 5 dictionaries, each representing a model (`name`, `accuracy`), and loop through to print each.
- **Advanced:** From that list, use a set to find tags common across all models (add a `"tags"` key to each dict first), then use a dict comprehension to build a `name → accuracy` map sorted by accuracy descending.

### Functions & Modules
- **Basic:** Write `calculate_accuracy(correct, total)` with safe handling for `total == 0`; test with at least 3 input pairs.
- **Advanced:** Using only `random` and `math` (no external libraries), simulate 10 random accuracy scores and write a function that returns their mean and standard deviation.

### Comprehensions & Lambdas
- **Basic:** Take an existing `for` loop that filters a list (e.g. keep only accuracies above 80) and rewrite it as a one-line list comprehension.
- **Advanced:** Given a list of model dicts with `accuracy` and `epochs`, use `sorted()` with a `lambda` key to rank them by accuracy-per-epoch (`accuracy / epochs`).

### OOP
- **Basic:** *(Already in deck — Exercise 1)* `Student` class with `name`, `scores` list, and `average()` method.
- **Advanced:** Build an abstract `BaseEvaluator` (using `abc`) with an abstract `score()` method, then create two subclasses with different scoring strategies — demonstrates abstraction + polymorphism together.

### Exceptions
- **Basic:** *(Already in deck — Exercise 2)* Custom `EmptyScoresError` raised inside `average()`.
- **Advanced:** Add a second custom exception `InvalidScoreError` (raised when a score is outside 0–100), handle both in separate `except` blocks, and add a `finally` block that logs the attempt regardless of outcome.

### Git *(kept as currently taught — no branch yet)*
- **Basic:** *(Already in deck — Exercise 4)* Init a repo, add a `.gitignore` excluding `.env`, first commit.
- **Advanced:** Make 3 separate commits across small incremental changes, then run `git log --oneline` to review the commit history.

### File Handling (Text + JSON)
- **Basic:** Write a dict to a JSON file, read it back, and print one specific key's value.
- **Advanced:** Write a script that reads an existing JSON file containing a list of past "runs," appends a new entry without overwriting the old ones, and saves it back (read-modify-write pattern).

### Concurrency
- **Basic:** *(Already in deck pattern)* Use `threading` to fire 3 mock API calls concurrently.
- **Advanced:** Measure and compare total execution time for the same 3 calls run sequentially vs. via threads using `time.time()`.

### Calling API (Basic Call + File-based Refactor)
- **Basic:** Run the file-based demo as-is with your own question in `prompt.txt`.
- **Advanced:** Extend it so each run *appends* the question + response as a new entry to a JSON "history" file instead of overwriting `response.txt` each time — combines the JSON file handling and API sections into one exercise.
