def get_full_name(first_name, last_name, middle_name=None):
    """
    Constructs a full name from first, last, and an optional middle name.
    
    Args:
        first_name (str): The person's first name.
        last_name (str): The person's last name.
        middle_name (str, optional): The person's middle name. Defaults to None.
        
    Returns:
        str: The formatted full name.
    """
    # Capitalize each part of the name for proper formatting
    first = first_name.capitalize()
    last = last_name.capitalize()
    
    # Check if a middle_name was provided. 
    # An empty string "" would also be considered "not provided".
    if middle_name:
        # If a middle name exists, include it in the full name.
        middle = middle_name.capitalize()
        full_name = f"{first} {middle} {last}"
    else:
        # If no middle name is provided, only use the first and last name.
        full_name = f"{first} {last}"
        
    return full_name

# --- Test Cases ---

# Example 1: With a middle name
full_name_with_middle = get_full_name(first_name="marouan", middle_name="abdelmounim", last_name="zakaria")
print(f"Calling with middle name: {full_name_with_middle}") # Expected: John Hooker Lee

# Example 2: Without a middle name
full_name_without_middle = get_full_name(first_name="ahmed", last_name="abdelhafid")
print(f"Calling without middle name: {full_name_without_middle}") # Expected: Bruce Lee

# Example 3: Another test
my_full_name = get_full_name(first_name="achraf", last_name="horri")
print(f"Another test without middle name: {my_full_name}")

# Example 4: Another test with a middle name
another_full_name = get_full_name("yassine", "hellan", "youssef") # Using positional arguments
print(f"Another test with middle name: {another_full_name}")
