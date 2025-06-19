import random


def compare_to_random(user_number):


    if not 1 <= user_number <= 100:
        print(f"Error: Your number ({user_number}) is not between 1 and 100.")
        return


    random_number = random.randint(1, 100)


    if user_number == random_number:

        print("Success!")
    else:

        print(f"Fail! Your number: {user_number}, Random number: {random_number}")



print("--- Playing the Random Number Game ---")

compare_to_random(50)
print("--------------------") 
compare_to_random(22)
print("--------------------")
compare_to_random(101) 
print("--------------------")
compare_to_random(7)