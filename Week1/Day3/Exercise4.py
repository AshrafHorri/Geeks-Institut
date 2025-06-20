class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.animal_groups = {}
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")
    def get_animals(self):
        print(f"\n--- Animals in {self.name} ---")
        if not self.animals:
            print("The zoo is currently empty.")
        else:
            for animal in self.animals:
                print(f"- {animal}")
        print("------------------------" + "-" * len(self.name))
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"\n{animal_sold} has been sold.")
        else:
            print(f"\n{animal_sold} could not be found in the zoo.")
    def sort_animals(self):
        self.animals.sort()
        self.animal_groups = {}
        for animal in self.animals:
            first_letter = animal[0]
            if first_letter not in self.animal_groups:
                self.animal_groups[first_letter] = [animal]
            else:
                self.animal_groups[first_letter].append(animal)
        print("\nAnimals have been sorted and grouped.")
    def get_groups(self):
        print("\n--- Animal Groups ---")
        if not self.animal_groups:
            print("No groups have been created yet. Please run sort_animals() first.")
        else:
            for letter, animals_list in self.animal_groups.items():
                print(f"{letter}: {animals_list}")
        print("---------------------")
ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Lion")
ramat_gan_safari.sell_animal("Tiger")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
