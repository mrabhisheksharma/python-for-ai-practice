# 02b - Logical Operators (Advanced)
has_gpu = True
ram_gb = 16
model_size_gb = 20

# We can run the model if we have a GPU AND enough RAM, OR if the model fits in RAM
can_run_fast = has_gpu and (ram_gb >= model_size_gb)
can_run_slow = not has_gpu and (ram_gb >= model_size_gb)

print(f"Can run fast? {can_run_fast}")
print(f"Can run slow? {can_run_slow}")
