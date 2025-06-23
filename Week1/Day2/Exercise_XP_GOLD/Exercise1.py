# --- Exercise 1: Birthday Look-up ---

# 1. Create and initialize the birthdays dictionary.
birthdays = {
    "Albert Einstein": "1879/03/14",
    "Marie Curie": "1867/11/07",
    "Isaac Newton": "1643/01/04",
    "Ada Lovelace": "1815/12/10",
    "Nikola Tesla": "1856/07/10"
}

# 2. Print a welcome message for the user.
print("--- Welcome to the Birthday Look-up App! ---")
print("You can look up the birthdays of the following people:")

# Print the available names for the user to see.
# .keys() gets all the keys (names) from the dictionary.
# ", ".join(...) combines them into a single string.
available_names = ", ".join(birthdays.keys())
print(available_names)
print("-" * 45)

# 3. Ask the user for a person's name.
person_name = input("Please enter the full name of the person you want to look up: ")

# 4. Get the birthday and print it with a nice message.
# We use the .get() method here. It's a safe way to access dictionary keys.
# If the key exists, it returns the value.
# If the key does not exist, it returns None (or a default value if you provide one),
# which prevents the program from crashing.

birthday = birthdays.get(person_name)

# 5. Check if a birthday was found and print the appropriate message.
if birthday:
    # This block runs if the .get() method found a value.
    print(f"\nSuccess! The birthday of {person_name} is {birthday}.")
else:
    # This block runs if the .get() method returned None (name not found).
    print(f"\nSorry, we don't have the birthday for '{person_name}'. Please check the name and try again.")

