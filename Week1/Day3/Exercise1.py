class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
cat1 = Cat("Misty", 12)
cat2 = Cat("Shadow", 7)
cat3 = Cat("Sunny", 15)
def find_oldest_cat(cat_a, cat_b, cat_c):
    oldest = max(cat_a, cat_b, cat_c, key=lambda cat: cat.age)
    return oldest
oldest_cat_object = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat_object.name}, and is {oldest_cat_object.age} years old.")


