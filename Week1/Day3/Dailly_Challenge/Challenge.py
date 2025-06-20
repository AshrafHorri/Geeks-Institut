class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count
    def get_info(self): 
        output = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            output += f"{animal} : {count}\n"
        output += "\n    E-I-E-I-O!"
        return output

    

    def get_animal_types(self):

        return sorted(self.animals.keys())

    def get_short_info(self):
    
        animal_types = self.get_animal_types()
        animal_strings = []

    
        for animal in animal_types:
            if self.animals[animal] > 1:
                animal_strings.append(f"{animal}s")
            else:
                animal_strings.append(animal)

    
        if len(animal_strings) > 1:
    
            animal_list_str = ", ".join(animal_strings[:-1]) + f" and {animal_strings[-1]}"
        elif len(animal_strings) == 1:
            animal_list_str = animal_strings[0]
        else:
            return f"{self.name}'s farm has no animals."

        return f"{self.name}'s farm has {animal_list_str}."


macdonald = Farm("McDonald")


macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep') 
macdonald.add_animal('sheep') 
macdonald.add_animal('goat', 12)


print(macdonald.get_info())

print("\n--- Bonus ---")
print(f"Sorted animal types: {macdonald.get_animal_types()}")
print(macdonald.get_short_info())
bennetts_farm = Farm("Bennett")
bennetts_farm.add_animal('horse')
print(bennetts_farm.get_short_info())