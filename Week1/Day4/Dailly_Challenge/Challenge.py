import math

class Pagination:

    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = int(page_size)
        if self.page_size <= 0:
            raise ValueError("page_size must be a positive integer.")
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)
    # --- Step 3: Implement get_visible_items() Method ---
    def get_visible_items(self):
        start_index = self.current_idx * self.page_size
        end_index = start_index + self.page_size
        return self.items[start_index:end_index]

    # --- Step 4: Implement Navigation Methods ---
    def go_to_page(self, page_num):

        if 1 <= page_num <= self.total_pages:
            self.current_idx = page_num - 1
        else:
            raise ValueError(f"Invalid page number. Please choose a page between 1 and {self.total_pages}.")

        
    def next_page(self):
        """Moves to the next page, if possible. Returns self for chaining."""
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        """Moves to the previous page, if possible. Returns self for chaining."""

        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def first_page(self):
        """Navigates to the first page. Returns self for chaining."""
        self.current_idx = 0
        return self

    def last_page(self):
        """Navigates to the last page. Returns self for chaining."""
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        else:
            self.current_idx = 0
        return self

    # --- Step 5: Add a Custom __str__() Method ---
    def __str__(self):
        """
        Returns a string representation of the visible items on the current page.
        """
        visible_items = self.get_visible_items()

        return "\n".join(str(item) for item in visible_items)


# --- Step 6: Test Your Code ---
if __name__ == "__main__":
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)
    print("--- Testing get_visible_items ---")
    print(p.get_visible_items())
    print("\n--- Testing next_page ---")
    p.next_page()
    print(p.get_visible_items())
    print("\n--- Testing Method Chaining ---")
    p.next_page().next_page()
    print(f"Current Page (after chaining): {p.current_idx + 1}")
    print(p.get_visible_items())

    print("\n--- Testing last_page ---")
    p.last_page()
    print(p.get_visible_items())
    print("\n--- Testing a specific go_to_page case ---")
    p.go_to_page(7) 
    print(f"Current page index + 1: {p.current_idx + 1}")
    print("\n--- Testing go_to_page with invalid input ---")
    try:
        p.go_to_page(0)
    except ValueError as e:
        print(f"Successfully caught expected error: {e}")

    print("\n--- Testing __str__ method ---")
    p.first_page()
    print(str(p))

