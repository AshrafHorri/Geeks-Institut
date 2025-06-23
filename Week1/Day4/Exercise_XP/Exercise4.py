class Person:
    """
    A class to represent an individual person with a first name and age.
    The last name is assigned when the person is added to a family.
    """
    def __init__(self, first_name, age):
        """
        Initializes a new Person object.

        Args:
            first_name (str): The person's first name.
            age (int): The person's age.
        """
        self.first_name = first_name
        self.age = age
        # last_name is initialized as an empty string; it will be set by the Family class.
        self.last_name = ""

    def is_18(self):
        """
        Checks if the person is 18 years of age or older.

        Returns:
            bool: True if the person is 18 or older, otherwise False.
        """
        return self.age >= 18


# --- Step 2: Create the Family Class ---
class Family:
    """
    A class to represent a family, which manages a list of Person objects.
    """
    def __init__(self, last_name):
        """
        Initializes a new Family object.

        Args:
            last_name (str): The last name of the family.
        """
        self.last_name = last_name
        # members is initialized as an empty list to store Person objects.
        self.members = []

    def born(self, **kwargs):
        """
        Creates a new Person object, assigns the family's last name,
        and adds them to the members list.

        Args:
            **kwargs: Keyword arguments for the new person, must include 'first_name' and 'age'.
        """
        # Create a new Person instance using the provided keyword arguments.
        new_person = Person(kwargs['first_name'], kwargs['age'])
        # Assign the family's last name to the new person.
        new_person.last_name = self.last_name
        # Add the new person object to the family's members list.
        self.members.append(new_person)
        print(f"Congratulations! A new member was born: {new_person.first_name} {self.last_name}.")

    def check_majority(self, first_name):
        """
        Checks if a family member is over 18 and prints the result.

        Args:
            first_name (str): The first name of the person to check.
        """
        # Loop through the members list to find the person.
        for person in self.members:
            if person.first_name.lower() == first_name.lower():
                # If the person is found, call their is_18() method.
                if person.is_18():
                    print(f"You are over 18, {person.first_name}. Your parents, Jane and John, accept that you will go out with your friends.")
                else:
                    print(f"Sorry, {person.first_name}, you are not allowed to go out with your friends.")
                return # Exit the method once the person is found and checked.
        
        # This line will only be reached if the loop finishes without finding the person.
        print(f"Error: A person with the first name '{first_name}' was not found in the family.")

    def family_presentation(self):
        """
        Prints the family's last name followed by a list of all members.
        """
        print(f"\n--- The {self.last_name} Family ---")
        for person in self.members:
            print(f"- {person.first_name}, age {person.age}")
        print("-" * (len(self.last_name) + 14))


# --- Test the Classes ---

# Create an instance of the Family class
smith_family = Family("Smith")

# Add members to the family using the born() method
smith_family.born(first_name="Michael", age=35)
smith_family.born(first_name="Sarah", age=32)
smith_family.born(first_name="Kevin", age=19)
smith_family.born(first_name="Emily", age=16)

# Display the family's information
smith_family.family_presentation()

# Check the majority status of different members
print("\n--- Checking Majority ---")
smith_family.check_majority("Kevin")   # Should be allowed
smith_family.check_majority("Emily")   # Should not be allowed
smith_family.check_majority("David")   # Should not be found
