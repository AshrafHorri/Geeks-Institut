# --- Exercise 2: Birthdays Advanced ---

# The dictionary of birthdays
birthdays = {
    "Albert Einstein": "1879/03/14",
    "Marie Curie": "1867/11/07",
    "Isaac Newton": "1643/01/04",
    "Ada Lovelace": "1815/12/10",
    "Nikola Tesla": "1856/07/10"
}

# --- This section fulfills the first requirement ---
# Before asking for input, we print all the available names.
print("--- Welcome to the Birthday Look-up App! ---")
print("You can look up the birthdays of the following people:")

# We get all the keys (names) from the dictionary and join them into a readable string.
available_names = ", ".join(birthdays.keys())
print(available_names)
print("-" * 45)

# Ask the user for a person's name
person_name = input("Please enter the full name of the person you want to look up: ")

# We use the .get() method because it's safe. It won't crash if the name isn't found.
birthday = birthdays.get(person_name)

# --- This section fulfills the second requirement ---
# We check if the 'birthday' variable has a value.
# If the name wasn't found, 'birthday' will be None, and the 'else' block will run.
if birthday:
    # This runs if the name was found successfully.
    print(f"\nSuccess! The birthday of {person_name} is {birthday}.")
else:
    # This runs if the name was NOT found in the dictionary.
    print(f"\nSorry, we don't have the birthday information for '{person_name}'.")

