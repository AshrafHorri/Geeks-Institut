# We use print() to display the result of each expression.

print("--- Snippet Predictions ---")
print(f"3 <= 3 < 9                       --> Result: {3 <= 3 < 9}")
print(f"3 == 3 == 3                      --> Result: {3 == 3 == 3}")
print(f"bool(0)                          --> Result: {bool(0)}")
print(f"bool(5 == '5')                   --> Result: {bool(5 == '5')}")
print(f"bool(4 == 4) == bool('4' == '4') --> Result: {bool(4 == 4) == bool('4' == '4')}")
print(f"bool(bool(None))                 --> Result: {bool(bool(None))}")

print("\n--- Variable Assignment Predictions ---")

# Variable assignments
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

# Print the values of the variables
print("x = (1 == True) ")
print(f"--> x is {x}")

print("\ny = (1 == False)")
print(f"--> y is {y}")

print("\na = True + 4")
print(f"--> a: {a}")

print("\nb = False + 10")
print(f"--> b: {b}")

