import random

def throw_dice():
    """
    Simulates the rolling of a single six-sided die.
    
    Returns:
        int: A random integer between 1 and 6.
    """
    return random.randint(1, 6)

def throw_until_doubles():
    """
    Keeps throwing two dice until they both land on the same number.
    
    Returns:
        int: The number of throws it took to get doubles.
    """
    # Initialize a counter for the number of throws
    throw_count = 0
    
    # Start a loop that will continue until doubles are rolled
    while True:
        # Increment the throw counter for each attempt
        throw_count += 1
        
        # Roll two dice using the throw_dice() function
        dice1 = throw_dice()
        dice2 = throw_dice()
        
        # Check if the two dice are the same
        if dice1 == dice2:
            # If they are doubles, stop the loop
            break
            
    # Return the total number of throws it took
    return throw_count

def main():
    """
    Main function to run the simulation 100 times and display the results.
    """
    print("--- Running Double Dice Simulation ---")
    
    # We use a list to store the results of each of the 100 trials.
    # A list is a good choice because we need to perform calculations like sum() and len() on it.
    results_of_throws = []
    number_of_trials = 100
    
    # Loop 100 times to simulate throwing for doubles 100 times
    for _ in range(number_of_trials):
        # Call the function to get the number of throws for one trial
        throws_needed = throw_until_doubles()
        # Add the result of this trial to our collection
        results_of_throws.append(throws_needed)
        
    # After the 100 trials, calculate the statistics
    
    # Calculate the total number of throws across all trials
    total_throws = sum(results_of_throws)
    
    # Calculate the average number of throws per trial
    average_throws = total_throws / number_of_trials
    
    # Print the final results, formatted as requested
    print(f"\nTotal throws to reach 100 doubles: {total_throws}")
    # We round the average to 2 decimal places for a cleaner output
    print(f"Average throws to reach doubles: {average_throws:.2f}")
    print("------------------------------------")

# This standard line ensures that the main() function is called when the script is run
if __name__ == "__main__":
    main()
