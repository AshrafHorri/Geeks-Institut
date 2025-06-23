import random

# Bonus 2: Initialize counters for wins and losses outside the loop
wins = 0
losses = 0

# Bonus 1: Start a loop that allows the user to play multiple times
while True:
    # 1. Ask the user to input a number or to quit
    user_input = input("Guess a number from 1 to 9 (or type 'quit' to exit): ")

    # Check if the user wants to quit the game
    if user_input.lower() == 'quit':
        break # Exit the loop

    # --- Game Logic ---
    try:
        # Convert the user's input to an integer
        user_guess = int(user_input)

        # Validate if the number is in the correct range
        if not 1 <= user_guess <= 9:
            print("Invalid input. Please enter a number between 1 and 9.")
            continue # Skip the rest of this loop iteration and ask again

        # 2. Get a random number between 1 and 9
        random_number = random.randint(1, 9)
        print(f"The random number was: {random_number}") # Show the number for clarity

        # 3. & 4. Compare the numbers and print the result
        if user_guess == random_number:
            print("--> Winner! You guessed correctly.")
            wins += 1 # Increment the win counter
        else:
            print("--> Better luck next time.")
            losses += 1 # Increment the loss counter

    except ValueError:
        # This runs if the user enters text that is not a number and not 'quit'
        print("Invalid input. Please enter a number or 'quit'.")
    
    # Add a separator for the next round
    print("-" * 20)


# --- After the loop ends ---
# Bonus 2: Tally up and display the final score
print("\n--- Game Over ---")
total_games = wins + losses
print(f"You played {total_games} games.")
print(f"Wins: {wins}")
print(f"Losses: {losses}")
print("Thanks for playing!")