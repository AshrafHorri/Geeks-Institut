
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


total_cost = 0

print("--- Cinemax Ticket Booth ---")

for name, age in family.items():

    if age < 3:
        price = 0
        print(f"{name.capitalize()}'s ticket is free.")
        

    elif age <= 12:
        price = 10
        print(f"{name.capitalize()}'s ticket is $10.")
        

    else:
        price = 15
        print(f"{name.capitalize()}'s ticket is $15.")
        

    total_cost += price


print("--------------------------")
print(f"The total cost for the family is: ${total_cost}")
