import threading, time

def handle_client(name, wait_time):
    print(f"Serving {name} (waiting {wait_time}s)...")
    time.sleep(wait_time) # Simulating I/O
    print(f"Finished {name}!")

requests = [("Client 1", 3), ("Client 2", 1), ("Client 3", 1)]
threads = []

for name, wait in requests:
    t = threading.Thread(target=handle_client, args=(name, wait))
    threads.append(t)
    t.start()

for t in threads: t.join()
