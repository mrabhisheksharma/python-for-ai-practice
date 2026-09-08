# 09b - Set Operations (Advanced)
user_permissions = {"read", "write"}
admin_permissions = {"read", "write", "delete", "manage_users"}

# Intersection (What do they both share?)
print(f"Shared: {user_permissions & admin_permissions}")

# Difference (What does admin have that user doesn't?)
print(f"Admin only: {admin_permissions - user_permissions}")

# Union (Combine both)
all_perms = user_permissions | {"upload_files"}
print(f"All perms: {all_perms}")
