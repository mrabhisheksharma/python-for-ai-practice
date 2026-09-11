import threading
import time

# -------------------------------------------------------------------------
# Web Server Simulation: Multithreaded Client Request Handling
#
# Real-World Scenario:
# - Client 1 sends a request that triggers a slow database query (takes 3s).
# - Client 2 sends a fast request (takes 1s).
# - Client 3 sends a fast request (takes 1s).
#
# Without Threads (Sequential):
#   Client 2 is blocked and must wait 3s before its request even starts!
#   Total time: 3s + 1s + 1s = 5s.
#
# With Multithreading:
#   While Thread-1 is WAITING on Client 1's I/O, Thread-2 immediately
#   serves Client 2, and Thread-3 serves Client 3 concurrently!
#   Total time: ~3s (the duration of the longest wait).
# -------------------------------------------------------------------------

def handle_client(client_name, wait_time):
    """Simulates a worker thread handling an incoming client request."""
    thread_name = threading.current_thread().name
    print(f"[{thread_name}] Received request from {client_name}...")
    print(f"[{thread_name}] {client_name} is WAITING on I/O ({wait_time}s)...")
    
    # time.sleep() simulates waiting for network/database/external API (I/O Bound)
    # Python releases the GIL during I/O sleep so other threads run concurrently!
    time.sleep(wait_time)
    
    print(f"[{thread_name}] --> [COMPLETED] Finished serving {client_name} in {wait_time}s\n")

if __name__ == "__main__":
    print("=" * 65)
    print(" WEB SERVER: THREAD POOL HANDLING CONCURRENT CLIENT REQUESTS")
    print("=" * 65)
    
    requests = [
        ("Client 1 (Slow Database Query)", 3),
        ("Client 2 (Fast Cache Lookup)", 1),
        ("Client 3 (Fast Web Page)", 1),
    ]

    start_time = time.time()

    # Dispatch each incoming client request to a separate worker thread
    threads = []
    for i, (client_name, wait_time) in enumerate(requests, start=1):
        t = threading.Thread(
            target=handle_client,
            args=(client_name, wait_time),
            name=f"Thread-{i}"
        )
        threads.append(t)
        t.start()
        # Small stagger (0.05s) to simulate clients arriving one after another
        time.sleep(0.05)

    # Wait for all threads to complete their work
    for t in threads:
        t.join()

    total_time = round(time.time() - start_time, 2)
    print("=" * 65)
    print(f" All clients served in {total_time}s (instead of 5.0s sequentially)!")
    print(" Key Takeaway:")
    print(" While Thread-1 was paused waiting on Client 1's I/O, Thread-2 and")
    print(" Thread-3 simultaneously served Client 2 and Client 3 without blocking.")
    print("=" * 65)
