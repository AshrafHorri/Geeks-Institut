class Pets():
    """A class to manage a collection of animal objects."""
    def __init__(self, animals):
        self.animals = animals
    def walk(self):
        """Calls the walk() method on every animal in the collection."""
        print("--- Taking all pets for a walk ---")
        for animal in self.animals:
            print(animal.walk())
        print("---------------------------------")
class Cat():
    """A general class representing a cat."""
    is_lazy = True
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def walk(self):
        """Returns a string describing the cat walking."""
        return f'{self.name} is just walking around'
class Bengal(Cat):
    """A specific breed of cat, inheriting from Cat."""
    def sing(self, sounds):
        return f'{sounds}'
class Chartreux(Cat):
    """Another specific breed of cat, inheriting from Cat."""
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
    """A Siamese breed of cat, known for being vocal."""
    def __init__(self, name, age, temperament="vocal"):
        super().__init__(name, age)
        self.temperament = temperament
    def sing(self, sounds="meow"):
        """A specific singing method for the vocal Siamese."""
        return f'{sounds}'
bengal_cat = Bengal("Leo", 4)
chartreux_cat = Chartreux("Misty", 7)
siamese_cat = Siamese("Cleo", 2)
all_cats = [bengal_cat, chartreux_cat, siamese_cat]
sara_pets = Pets(all_cats)
sara_pets.walk()
