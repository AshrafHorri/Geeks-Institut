
class Dog:

    def __init__(self, name, age, weight):

        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):

        return f"{self.name} is barking"

    def run_speed(self):

        if self.age == 0:
            return 0
        return (self.weight / self.age) * 10

    def fight(self, other_dog):

        my_fight_score = self.run_speed() * self.weight
        other_dog_fight_score = other_dog.run_speed() * other_dog.weight

        if my_fight_score > other_dog_fight_score:
            return f"{self.name} won the fight against {other_dog.name}!"
        elif other_dog_fight_score > my_fight_score:
            return f"{other_dog.name} won the fight against {self.name}!"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}!"



dog1 = Dog("Rocky", 5, 30)
dog2 = Dog("Sparky", 2, 15)
dog3 = Dog("Zeus", 8, 40)



print("--- Barking ---")
print(dog1.bark())
print(dog3.bark())


print("\n--- Running Speed ---")
print(f"{dog1.name}'s speed: {dog1.run_speed():.2f}")
print(f"{dog2.name}'s speed: {dog2.run_speed():.2f}")
print(f"{dog3.name}'s speed: {dog3.run_speed():.2f}")


print("\n--- Fights ---")
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))