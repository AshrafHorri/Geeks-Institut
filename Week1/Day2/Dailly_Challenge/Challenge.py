def map_letter_indexes():

    
    # 1. Ask the user for a word.
    user_word = input("Please enter a word: ")
    

    index_dictionary = {}
    

    for index, letter in enumerate(user_word):
        

        if letter in index_dictionary:

            index_dictionary[letter].append(index)
        else:
            index_dictionary[letter] = [index]

    print(f"\nHere is the index map for the word '{user_word}':")
    print(index_dictionary)



map_letter_indexes()
