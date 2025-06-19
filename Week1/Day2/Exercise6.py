def make_shirt(size="large", text="I love Python"):

    

    print(f"A {size.upper()} shirt will be made with the message: '{text}'")




print("--- Shirt Order System ---")


print("\nOrder 1 (Default):")
make_shirt()


print("\nOrder 2 (Medium, Default Text):")
make_shirt(size="medium")


print("\nOrder 3 (Custom):")
make_shirt(size="small", text="Custom message")


