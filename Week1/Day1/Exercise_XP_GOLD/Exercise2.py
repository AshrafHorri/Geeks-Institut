print("--- All numbers from 1 to 20 ---")
for number in range(1, 21):
    print(number)
print("\n--- Numbers at even indices from 1 to 20 ---")
print("\nMethod A: Using an 'if' statement")
for index in range(20):
    if index % 2 == 0:
        number_to_print = index + 1
        print(number_to_print)
print("\nMethod B: Using a 'step' in range()")
for number in range(1, 21, 2):
    print(number)

