import multiprocessing
import time

def heavy_computation(num):
    print(f"Computing {num}...")
    result = sum(i*i for i in range(num))
    print(f"Result for {num}: {result}")

if __name__ == "__main__":
    processes = []
    for i in [10000000, 20000000]:
        p = multiprocessing.Process(target=heavy_computation, args=(i,))
        processes.append(p)
        p.start()
        
    for p in processes:
        p.join()
        
    print("All computations finished.")
