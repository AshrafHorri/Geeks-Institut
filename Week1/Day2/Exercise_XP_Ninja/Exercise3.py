# --- Morse Code Translation Table ---
# This dictionary maps English characters to their Morse code equivalents.
MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ', ': '--..--', '.': '.-.-.-', '?': '..--..',
    '/': '-..-.', '-': '-....-', '(': '-.--.', ')': '-.--.-', ' ': '/'
}

# --- Function to Encrypt: English to Morse ---
def encrypt(message):
    """
    Converts a string of English text into Morse code.

    Args:
        message (str): The English message to be encrypted.

    Returns:
        str: The resulting Morse code string.
    """
    morse_code = ""
    # Convert the message to uppercase to match the dictionary keys.
    for char in message.upper():
        if char in MORSE_CODE_DICT:
            # Add the Morse code for the character, followed by a space.
            morse_code += MORSE_CODE_DICT[char] + " "
        else:
            # If the character is not in our dictionary, we can ignore it or add a space.
            # Here, we'll just ignore it.
            pass
    # .strip() removes any trailing space at the end.
    return morse_code.strip()

# --- Function to Decrypt: Morse to English ---
def decrypt(morse_code):
    """
    Converts a string of Morse code back into English text.

    Args:
        morse_code (str): The Morse code message to be decrypted.

    Returns:
        str: The resulting English text.
    """
    # To decrypt, we need a dictionary that maps Morse code back to English.
    # We can create this by reversing the keys and values of our original dictionary.
    # This is a dictionary comprehension.
    morse_to_english_dict = {value: key for key, value in MORSE_CODE_DICT.items()}
    
    english_text = ""
    
    # Split the Morse code by the word separator (' / ')
    morse_words = morse_code.split(' / ')
    
    for morse_word in morse_words:
        # Split each Morse word by the letter separator (' ')
        morse_letters = morse_word.split(' ')
        for morse_letter in morse_letters:
            if morse_letter in morse_to_english_dict:
                # Add the English equivalent of the Morse letter.
                english_text += morse_to_english_dict[morse_letter]
        # Add a space after each word is translated.
        english_text += ' '
        
    return english_text.strip()

# --- Main Program to Run the Translator ---
def main():
    """
    A simple interactive interface to use the Morse code translator.
    """
    while True:
        print("\n--- Morse Code Translator ---")
        print("1. Encrypt (English to Morse)")
        print("2. Decrypt (Morse to English)")
        print("3. Quit")
        
        choice = input("Please choose an option (1, 2, or 3): ")
        
        if choice == '1':
            message = input("Enter the English message to encrypt: ")
            encrypted_message = encrypt(message)
            print(f"\nEncrypted Morse Code: {encrypted_message}")
        
        elif choice == '2':
            morse_message = input("Enter the Morse code to decrypt (use ' / ' for word spaces): ")
            decrypted_message = decrypt(morse_message)
            print(f"\nDecrypted English Text: {decrypted_message}")
            
        elif choice == '3':
            print("Thank you for using the translator. Goodbye!")
            break
            
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")

# This standard line ensures that the main() function is called when the script is run
if __name__ == "__main__":
    main()
