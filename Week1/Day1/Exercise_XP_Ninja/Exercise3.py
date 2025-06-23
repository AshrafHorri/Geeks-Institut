import re # The 're' module is great for more advanced string splitting.
import string # Used for punctuation cleaning.

def analyze_paragraph(paragraph):
    """
    Analyzes a given paragraph of text and prints a formatted summary of its properties.

    Parameters:
    paragraph (str): The block of text to analyze.
    """
    
    # --- Basic Analysis ---
    
    # How many characters it contains (including spaces and newlines)
    total_characters = len(paragraph)
    
    # How many sentences it contains.
    # We split the text by sentence-ending punctuation.
    # We filter out any empty strings that might result from the split.
    sentences = [s for s in re.split(r'[.!?]', paragraph) if s.strip()]
    sentence_count = len(sentences)
    
    
    # --- Word Analysis ---
    
    # To accurately count words, we first need to "clean" the text.
    # 1. Convert to lowercase to treat "The" and "the" as the same word.
    # 2. Remove punctuation.
    lower_case_paragraph = paragraph.lower()
    # This line removes all standard punctuation characters.
    cleaned_text = lower_case_paragraph.translate(str.maketrans('', '', string.punctuation))
    
    # Now, split the cleaned text into a list of words.
    words = cleaned_text.split()
    
    # How many words it contains.
    word_count = len(words)
    
    # How many unique words it contains.
    # A 'set' is a data structure that only stores unique items.
    unique_words = set(words)
    unique_word_count = len(unique_words)
    
    
    # --- Bonus Analysis ---
    
    # How many non-whitespace characters it contains.
    # We join all the words together into one long string with no spaces.
    non_whitespace_chars = "".join(words)
    non_whitespace_count = len(non_whitespace_chars)
    
    # The average amount of words per sentence.
    # We check if sentence_count is not zero to avoid a DivisionByZeroError.
    if sentence_count > 0:
        avg_words_per_sentence = word_count / sentence_count
    else:
        avg_words_per_sentence = 0
        
    # The amount of non-unique (repeated) words.
    non_unique_word_count = word_count - unique_word_count
    
    
    # --- Print the Formatted Report ---
    
    print("--- Paragraph Analysis Report ---")
    print(f"Total Characters: {total_characters}")
    print(f"Total Sentences: {sentence_count}")
    print(f"Total Words: {word_count}")
    print(f"Unique Words: {unique_word_count}")
    print("\n--- Bonus Stats ---")
    print(f"Non-Whitespace Characters: {non_whitespace_count}")
    print(f"Average Words per Sentence: {avg_words_per_sentence:.2f}") # Format to 2 decimal places
    print(f"Repeated Words (count): {non_unique_word_count}")
    print("-------------------------------")


# --- Main part of the script ---

# 1. Find and store an interesting paragraph.
# This paragraph is about the history of Maghrebi mint tea.
text_paragraph = """
Maghrebi mint tea, a cherished tradition in Moroccan culture, is more than just a beverage. It is a symbol of hospitality, friendship, and social life. The history of this tea dates back to the 18th century when it was introduced to Morocco by British merchants. Initially a luxury for the elite, it quickly became popular among all social classes. The preparation itself is an art form, often performed by the head of the family as a sign of respect to the guests.
"""

# 2. Call the function to analyze the paragraph.
analyze_paragraph(text_paragraph)
