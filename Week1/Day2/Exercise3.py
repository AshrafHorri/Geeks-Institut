
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}




brand["number_stores"] = 2


client_description = ", ".join(brand["type_of_clothes"])
print(f"Zara's clients are {client_description}.")


brand["country_creation"] = "Spain"


if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")


del brand["creation_date"]





last_competitor = brand["international_competitors"][-1]
print(f"\nThe last international competitor is: {last_competitor}")


us_colors = brand["major_color"]["US"]
print(f"The major colors in the US are: {us_colors}")


print(f"The dictionary has {len(brand)} keys.")


print("The keys of the dictionary are:", list(brand.keys()))



print("\n--- Final 'brand' dictionary ---")
print(brand) 