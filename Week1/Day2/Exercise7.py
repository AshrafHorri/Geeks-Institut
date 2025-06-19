import random

def get_random_temp(season=None):

    if season == 'Winter':

        return round(random.uniform(-10, 10), 1)
    elif season == 'Spring':

        return round(random.uniform(5, 25), 1)
    elif season == 'Summer':

        return round(random.uniform(20, 40), 1)
    elif season == 'Autumn':

        return round(random.uniform(0, 20), 1)
    else:

        return round(random.uniform(-10, 40), 1)

def get_season(month):

    if month in [12, 1, 2]:
        return 'Winter'
    elif month in [3, 4, 5]:
        return 'Spring'
    elif month in [6, 7, 8]:
        return 'Summer'
    elif month in [9, 10, 11]:
        return 'Autumn'
    else:
        return None

def main():
    try:
        month_input = int(input("Veuillez entrer le mois actuel (1-12) : "))
        if 1 <= month_input <= 12:
            season = get_season(month_input)
        else:
            print("Mois invalide. Utilisation des réglages par défaut.")
            season = None
    except ValueError:
        print("Entrée invalide. Utilisation des réglages par défaut.")
        season = None


    temp = get_random_temp(season)
    

    print(f"La température actuelle est de {temp} degrés Celsius.")


    if temp < 0:
        print("Brrr, il gèle ! Portez des couches supplémentaires aujourd'hui.")
    elif 0 <= temp < 16:
        print("Assez frais ! N'oubliez pas votre manteau.")
    elif 16 <= temp < 24:
        print("Beau temps.")
    elif 24 <= temp < 32:
        print("Un peu chaud, restez bien hydraté.")
    else:
        print("Il fait vraiment chaud ! Restez au frais.")

if __name__ == "__main__":
    main()
