my_name = "achraf"
while True:
    user_input = input("Please enter a name to guess: ")
    if user_input.lower() == my_name:
        print(f"Congratulations! You guessed the name '{my_name}' correctly.")
        break
    else:
        print("That's not the correct name. Please try again!")
print("\nLoop finished. Thank you for playing!")