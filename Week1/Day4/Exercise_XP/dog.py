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

        my_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if my_score > other_score:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"