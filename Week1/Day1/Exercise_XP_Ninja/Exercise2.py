# Initialize a variable to keep track of the longest valid sentence found so far.
# We start with an empty string.
longest_sentence_so_far = ""

print("--- Longest Sentence Game ---")
print("Enter the longest sentence you can without using the letter 'A'.")
print("Type 'quit' to exit the game.")
print("-" * 30)

# Start an infinite loop to keep the game running.
while True:
    # 1. Ask the user for a sentence.
    user_sentence = input("Enter a sentence: ")

    # Check if the user wants to quit the game.
    if user_sentence.lower() == 'quit':
        print("\nThanks for playing!")
        break # Exit the loop

    # 2. Check if the forbidden character 'A' (or 'a') is in the sentence.
    if 'a' in user_sentence.lower():
        print("--> Oh no, your sentence contains the letter 'A'. Please try again.")
        # 'continue' skips the rest of this loop iteration and goes back to the start.
        continue

    # 3. If the sentence is valid, check if it's a new record.
    if len(user_sentence) > len(longest_sentence_so_far):
        # Update the longest sentence with the new one.
        longest_sentence_so_far = user_sentence
        # Print a congratulations message.
        print(f"🎉 Congratulations! You set a new record with a sentence of {len(longest_sentence_so_far)} characters!")
        print(f"   The new longest sentence is: '{longest_sentence_so_far}'")
    else:
        # If it's not a new record, provide feedback.
        print(f"--> Your sentence is valid ({len(user_sentence)} chars), but the record is still {len(longest_sentence_so_far)} chars.")

