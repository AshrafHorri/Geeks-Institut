from googletrans import Translator

async def main():
    french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
    translator = Translator()
    translations = {}

    print("Translating words, please wait...")
    for word in french_words:
        try:
            translation_result = await translator.translate(word, src='fr', dest='en')
            translations[word] = translation_result.text
            print(f"- Translated '{word}' to '{translation_result.text}'")
        except Exception as e:
            print(f"Error translating '{word}': {e}")
            translations[word] = "Translation Failed"

    print("\n--- Final Result ---")
    print(translations)

