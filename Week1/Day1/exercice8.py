sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
print(sandwich_orders)
while "Pastrami sandwich" in sandwich_orders :
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)
finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)
    #print the message client
    sandwich_type = current_sandwich.replace(" sandwich", "")
print(f"I made your (sandwich_type) sandwich")
print(finished_sandwiches)



