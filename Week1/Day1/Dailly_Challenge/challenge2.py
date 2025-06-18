def remove_consecutive_duplicates():
    """
    Asks the user for a string and displays a new string
    with any consecutive duplicate letters removed.
    """
    
    # 1. Ask the user for a string.
    user_string = input("Enter a word: ")
    
    # Handle the case of an empty string.
    if not user_string:
        print("The new word is: ")
        return
        
    # 2. Create an empty list to build our new word.
    #    We will join it into a string at the end.
    new_word_chars = []
    
    # 3. Loop through the user's string using an index.
    for i in range(len(user_string)):
        
        # 4. Check the condition to add the character.
        #    - If it's the first character (index 0), always add it.
        #    - Otherwise, only add it if it's different from the previous character.
        if i == 0 or user_string[i] != user_string[i-1]:
            new_word_chars.append(user_string[i])
            
    # 5. Join the characters in the list to form the final string.
    result = "".join(new_word_chars)
    
    # 6. Display the final string.
    print(f"Your word without consecutive duplicates is: {result}")


# --- Run the program ---
remove_consecutive_duplicates()