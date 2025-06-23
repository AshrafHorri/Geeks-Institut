# We need the 'random' module for the bonus method.
import random

class MyList:
    """
    A custom class that wraps a list of letters and provides
    methods for reversing, sorting, and generating a random list.
    """
    
    # Step 1: Create the __init__ method.
    def __init__(self, letters):
        """
        Initializes a new MyList object.
        
        Args:
            letters (list): A list of letters to be stored.
        """
        # We perform a check to ensure the input is actually a list.
        if isinstance(letters, list):
            self.letters = letters
        else:
            # If the input is not a list, raise an error for clarity.
            raise TypeError("MyList must be initialized with a list.")

    # Step 2: Add a method to return the reversed list.
    def get_reversed_list(self):
        """
        Returns a new list that is a reversed version of the original.
        It does not modify the original list.
        """
        # Slicing with [::-1] is a common and efficient way to reverse a list.
        return self.letters[::-1]

    # Step 3: Add a method to return the sorted list.
    def get_sorted_list(self):
        """
        Returns a new list that is a sorted version of the original.
        It does not modify the original list.
        """
        # The built-in sorted() function always returns a new sorted list.
        return sorted(self.letters)

    # --- Bonus Method ---
    def generate_random_list(self):
        """
        Generates and returns a second list of the same length as the original,
        filled with random integers between 1 and 100.
        """
        # A list comprehension is used here for a concise and readable solution.
        # It reads: "Create a list containing a random integer for each item in the original list."
        # The underscore '_' is used as a variable name when we don't need to use the value itself.
        list_length = len(self.letters)
        return [random.randint(1, 100) for _ in range(list_length)]


# --- Test the MyList Class ---

# Create an instance of our custom list class
original_letters = ['z', 'a', 'p', 'b', 'd', 'c']
my_custom_list = MyList(original_letters)

print(f"Original List: {my_custom_list.letters}")

# Test the get_reversed_list method
reversed_list = my_custom_list.get_reversed_list()
print(f"Reversed List: {reversed_list}")

# Test the get_sorted_list method
sorted_list = my_custom_list.get_sorted_list()
print(f"Sorted List:   {sorted_list}")

# Verify that the original list has not been changed
print(f"Original List (unchanged): {my_custom_list.letters}")

# Test the bonus generate_random_list method
random_numbers = my_custom_list.generate_random_list()
print(f"\nGenerated Random List (same length): {random_numbers}")

