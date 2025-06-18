number = int(input("please enter a number: "))
length = int(input("please enter the length: "))

# This line is not part of the if/else, so it is not indented
multiples_list = [] 

# The 'if' statement checks the condition
if length <= 0:
    # INDENTED BLOCK for the 'if' case
    # This line runs ONLY if length is 0 or less.
    print("please enter a length greater than zero")
else:
    # INDENTED BLOCK for the 'else' case
    # This code runs ONLY if length is greater than 0.
    for i in range(1, length + 1):
        multiple_value = number * i
        multiples_list.append(multiple_value)
    
    # This print statement is still inside the 'else' block
    print(multiples_list)
