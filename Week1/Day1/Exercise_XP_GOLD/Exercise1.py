try:
    month_number = int(input("Please enter a month (1 to 12): "))
    if month_number in [3, 4, 5]:
        print("The season is Spring.")
    elif month_number in [6, 7, 8]:
        print("The season is Summer.")
    elif month_number in [9, 10, 11]:
        print("The season is Autumn.")
    elif month_number in [12, 1, 2]:
        print("The season is Winter.")
    else:
        print("Error: Please enter a valid month number between 1 and 12.")
except ValueError:
    print("Error: Invalid input. Please enter a number.")
