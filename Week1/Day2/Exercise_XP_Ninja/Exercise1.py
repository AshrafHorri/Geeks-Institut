# --- Exercise 1: Cars ---

# 1. Copy the string into the code.
manufacturers_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# 2. Convert it into a list.
# The .split(', ') method breaks the string into a list,
# using the comma followed by a space as the separator.
manufacturers_list = manufacturers_string.split(', ')

print("--- Initial Analysis ---")
# 3. Print out a message saying how many companies are in the list.
# The len() function gets the number of items in a list.
print(f"There are {len(manufacturers_list)} manufacturers in the list.")

# 4. Print the list of manufacturers in reverse/descending order (Z-A).
# The sorted() function can create a sorted version of a list.
# The reverse=True argument tells it to sort from Z to A.
print(f"The list in reverse order is: {sorted(manufacturers_list, reverse=True)}")

print("\n--- Name Analysis ---")

# 5. Find out how many manufacturers' names have the letter 'o' in them.
# We use a list comprehension here. It's a concise way to build a list.
# This line reads: "Create a list of 1s for each name in the list if 'o' is in the name (case-insensitive)."
# Then, sum() adds up all the 1s to get the total count.
count_with_o = sum(1 for name in manufacturers_list if 'o' in name.lower())
print(f"Number of manufacturers with the letter 'o': {count_with_o}")

# 6. Find out how many manufacturers' names do not have the letter 'i' in them.
# This uses a similar list comprehension.
# It reads: "Create a list of 1s for each name if 'i' is NOT in the name."
count_without_i = sum(1 for name in manufacturers_list if 'i' not in name.lower())
print(f"Number of manufacturers without the letter 'i': {count_without_i}")

