class MenuManager:
    """
    A class to manage a restaurant menu, allowing the addition,
    updating, and removal of dishes.
    """
    
    def __init__(self):
        """
        Initializes the MenuManager with a predefined list of dishes.
        Each dish is a dictionary containing its name, price, spice level,
        and gluten index.
        """
        self.menu = [
            {
                "name": "Soup",
                "price": 10,
                "spice_level": "B",
                "gluten_index": False
            },
            {
                "name": "Hamburger",
                "price": 15,
                "spice_level": "A",
                "gluten_index": True
            },
            {
                "name": "Salad",
                "price": 18,
                "spice_level": "A",
                "gluten_index": False
            },
            {
                "name": "French Fries",
                "price": 5,
                "spice_level": "C",
                "gluten_index": False
            },
            {
                "name": "Beef Bourguignon",
                "price": 25,
                "spice_level": "B",
                "gluten_index": True
            }
        ]

    def _find_dish(self, name):
        """
        A helper method to find a dish by its name.
        Returns the dish dictionary if found, otherwise returns None.
        """
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                return dish
        return None

    def add_item(self, name, price, spice, gluten):
        """
        Adds a new dish to the menu.
        Does not add the dish if one with the same name already exists.
        """
        if self._find_dish(name):
            print(f"Error: A dish named '{name}' already exists in the menu.")
        else:
            new_dish = {
                "name": name,
                "price": price,
                "spice_level": spice,
                "gluten_index": gluten
            }
            self.menu.append(new_dish)
            print(f"'{name}' has been added to the menu.")

    def update_item(self, name, price, spice, gluten):
        """
        Updates the details of an existing dish in the menu.
        If the dish is not found, it notifies the manager.
        """
        dish_to_update = self._find_dish(name)
        
        if dish_to_update:
            dish_to_update["price"] = price
            dish_to_update["spice_level"] = spice
            dish_to_update["gluten_index"] = gluten
            print(f"'{name}' has been updated.")
        else:
            print(f"Error: A dish named '{name}' was not found in the menu.")

    def remove_item(self, name):
        """
        Removes a dish from the menu by its name.
        If the dish is not found, it notifies the manager.
        """
        dish_to_remove = self._find_dish(name)
        
        if dish_to_remove:
            self.menu.remove(dish_to_remove)
            print(f"'{name}' has been removed from the menu.")
            # Print the updated menu for confirmation
            print("\n--- Updated Menu ---")
            for dish in self.menu:
                print(dish)
            print("--------------------")
        else:
            print(f"Error: A dish named '{name}' was not found in the menu.")

# --- Example Usage ---
# Create an instance of the MenuManager
manager = MenuManager()

# --- Test add_item ---
print("--- Adding Items ---")
manager.add_item("Pizza", 20, "A", True)      # Should add successfully
manager.add_item("Soup", 12, "B", False)       # Should show an error (already exists)
print("-" * 20)

# --- Test update_item ---
print("\n--- Updating Items ---")
manager.update_item("Salad", 20, "B", False)    # Should update successfully
manager.update_item("Pasta", 22, "A", True)    # Should show an error (doesn't exist)
print("-" * 20)

# --- Test remove_item ---
print("\n--- Removing Items ---")
manager.remove_item("Hamburger")              # Should remove successfully and print the menu
manager.remove_item("Sushi")                  # Should show an error (doesn't exist)
