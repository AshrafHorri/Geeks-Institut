try:

    num1 = int(input("Input the 1st number: "))
    num2 = int(input("Input the 2nd number: "))
    num3 = int(input("Input the 3rd number: "))


    greatest_number = max(num1, num2, num3)


    print(f"The greatest number is: {greatest_number}")

except ValueError:
    print("Invalid input. Please enter valid numbers.")