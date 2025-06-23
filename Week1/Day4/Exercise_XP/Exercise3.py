import random

from dog import Dog


class PetDog(Dog):

    def __init__(self, name, age, weight):

        super().__init__(name, age, weight)

        self.trained = False

    def train(self):

        print(self.bark())
        self.trained = True
        print(f"{self.name} is now trained!")

    def play(self, *other_dogs):

        dog_names = ", ".join(other_dogs)
        print(f"{self.name}, {dog_names} all play together")

    def do_a_trick(self):


        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]

            random_trick = random.choice(tricks)
            print(f"{self.name} {random_trick}")
        else:
            print(f"{self.name} is not trained yet.")

print("--- Testing PetDog ---")

my_pet = PetDog("Buddy", 3, 25)

print("\nAttempting a trick before training:")
my_pet.do_a_trick()

print("\nTraining the dog:")
my_pet.train()

print("\nAttempting a trick after training:")
my_pet.do_a_trick()
my_pet.do_a_trick()

print("\nTime to play:")
my_pet.play("Max", "Lucy", "Rocky")