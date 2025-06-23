# --- Exercise 3: Check the Index ---

# The list of names provided in the exercise
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# 1. Ask a user for their name
user_name = input("Please enter a name to search for: ")

# 2. Check if the name is in the list
#    The 'in' keyword is a simple and readable way to check for existence.
if user_name in names:
    
    # 3. If the name is found, use the .index() method
    #    This method searches the list and returns the index of the first match.
    first_index = names.index(user_name)
    
    # Print the result with a nicely-formatted message
    print(f"The name '{user_name}' was first found at index: {first_index}")
    
else:
    # This block runs if the name was not found in the list
    print(f"Sorry, the name '{user_name}' is not in the list.")

