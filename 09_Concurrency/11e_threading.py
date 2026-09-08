import threading
import time

def api_call_simulation(task_id):
    print(f"Task {task_id} starting...")
    time.sleep(1)
    print(f"Task {task_id} completed!")

# Running sequentially takes 3 seconds
# Running with threads takes 1 second
threads = []
for i in range(3):
    t = threading.Thread(target=api_call_simulation, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print("All tasks finished.")
