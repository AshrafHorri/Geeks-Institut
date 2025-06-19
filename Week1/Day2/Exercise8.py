def order_pizza():

    BASE_PRICE = 10.0
    PRICE_PER_TOPPING = 2.50
    

    toppings = []
    
    print("--- Welcome to the Python Pizza Palace! ---")
    print("Enter your desired toppings one by one.")
    print("Type 'quit' when you are finished.")
    
 
    while True:

        topping_input = input("Add a topping: ")
        

        if topping_input.lower() == 'quit':
            break
        

        else:

            toppings.append(topping_input)

            print(f"--> Adding {topping_input} to your pizza.")



    final_cost = BASE_PRICE + (len(toppings) * PRICE_PER_TOPPING)


    print("\n--- Your Pizza Order is Complete ---")
    

    if toppings:
        print("Your toppings are:")

        for topping in toppings:
            print(f"- {topping.capitalize()}")
    else:
        print("You ordered a plain cheese pizza.")


    print(f"\nTotal cost: ${final_cost:.2f}")



order_pizza()
