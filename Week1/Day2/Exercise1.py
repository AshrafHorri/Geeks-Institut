keys = ['name', 'age', 'city']
values = ["Achraf", 28, "Casablanca"]
person = dict(zip(keys, values))
print(person)
# Output: {'name': 'Achraf', 'age': 28, 'city': 'Casablanca'}
# The code creates a dictionary by zipping together two lists: keys and values.
# The keys list contains the names of the fields, and the values list contains the corresponding values.
# The zip function pairs each key with its correspo,ding value, and the dict function converts these pairs into a dictionary.
# The resulting dictionary is then printed to the console.
