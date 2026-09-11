# Instructor Notes: Python Chapter 2

## 1. Introduction
**Goal:** Transition students from writing isolated local scripts to interacting with the outside world (the internet and APIs).
**Key Message:** "Up until now, our code lived in a bubble. Today, we're opening the doors. We'll learn how to fetch real-world data and how to handle the chaos of the internet."

## 2. Concurrency
**Goal:** Explain how to do multiple things at once.
**Analogy - The Office:**
- **Multithreading (I/O Bound):** Multiple workers at *one* shared desk. They share the same documents (memory). It's great for tasks where you're waiting around (like downloading data/waiting for an API response), but they have to coordinate so they don't talk over each other.
- **Multiprocessing (CPU Bound):** Entirely separate private offices with their own workers and documents. They don't share memory, meaning true parallel execution. Great for heavy data crunching.

*Note: Refer to the office metaphor image on the presentation screen (click the bulb icon).*

**Technical Example (Web Server Thread Pool):**
- Walk through the Web Server diagram on the right side:
  - Explain that **Client 1** triggers a slow 3-second database query. **Thread 1** picks it up and enters an I/O wait.
  - While Thread 1 is paused, Python releases the GIL. **Thread 2** immediately picks up **Client 2** (a fast 1-second query) and finishes serving them before Client 1's query even finishes!
  - Emphasize: *Multithreading prevents your server from freezing while waiting on external systems (APIs, databases, disks).*

## 3. HTTP Fundamentals
**Goal:** Demystify how the internet works under the hood.
- **GET vs POST:** 
  - *GET* is like reading a public noticeboard (fetching data).
  - *POST* is like dropping a sealed envelope into a mail slot (sending data, like a password or an LLM prompt).
- **Status Codes (The Traffic Lights of the Web):**
  - `200 OK`: Green light (Success).
  - `400/401`: User error (Bad request or unauthorized).
  - `429`: Too many requests (You're talking too fast, slow down).
  - `500`: Server error (The API provider is having a bad day).
- **Nested JSON Parsing:** Explain that JSON is just Python dictionaries inside lists and other dictionaries. We extract data by following the path down the tree.

## 4. Robust APIs
**Goal:** Teach defensive programming. The internet is unreliable; our code must be prepared for it.
- **Timeouts:** Never let a script wait forever. Set a timeout (e.g., `timeout=5`).
- **Retries & Exceptions:** Introduce the `try/except` block specifically for network calls. 
  - *Metaphor:* Calling a friend. If the line is busy (timeout), you don't throw your phone away (crash). You wait 2 seconds and try again (retry loop).

## 5. Calling APIs (Advanced & LLMs)
**Goal:** Show how basic HTTP requests evolve into powerful AI integrations.
- **LLM File Prompting:** Walk through the OpenAI SDK example. Explain that the SDK is just doing the `requests.get/post` stuff under the hood, making our lives easier. Highlighting how we read a prompt from a file makes the code highly modular.
- **Open-Meteo Hands-On:** Have students find their city's latitude and longitude and pull the live windspeed. It’s their first "real" internet integration.

## 6. Summary & Practice Activity
**Practice: "Resilient Weather Logger"**
- **Objective:** Students must combine everything: `requests`, nested JSON parsing, `try/except` blocks, timeouts, and File I/O (`weather_log.txt`).
- **Instructor Cue:** Walk around and encourage them to intentionally trigger failures (e.g., turning off Wi-Fi or providing a bad URL) just to see their `except` block catch the error and log it successfully!
