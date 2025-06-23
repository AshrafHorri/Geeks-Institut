# We need to import the 'math' module to get the value of pi.
import math

class Circle:
    """
    A class to represent a circle, with methods to compute its
    perimeter, area, and provide its definition.
    """
    
    # Step 1: Write the __init__ method with a default radius.
    def __init__(self, radius=1.0):
        """
        Initializes a new Circle object.
        
        Args:
            radius (float or int): The radius of the circle. Defaults to 1.0.
        """
        self.radius = radius

    # Step 2: Write an instance method to compute the perimeter.
    def compute_perimeter(self):
        """
        Computes the perimeter (circumference) of the circle.
        Formula: 2 * pi * r
        
        Returns:
            float: The perimeter of the circle.
        """
        return 2 * math.pi * self.radius

    # Step 2: Write an instance method to compute the area.
    def compute_area(self):
        """
        Computes the area of the circle.
        Formula: pi * r^2
        
        Returns:
            float: The area of the circle.
        """
        return math.pi * (self.radius ** 2)

    # Step 3: Write a method to print the definition.
    # This method doesn't depend on a specific circle's radius, so we can
    # make it a 'staticmethod' for good practice.
    @staticmethod
    def print_definition():
        """
        Prints the geometrical definition of a circle.
        """
        print("\nGeometrical Definition:")
        print("A circle is a shape consisting of all points in a plane that are at a given distance from a given point, the centre.")


# --- Test the Circle Class ---

# Create a circle with the default radius (1.0)
default_circle = Circle()
print(f"--- Circle with default radius ({default_circle.radius}) ---")
print(f"Perimeter: {default_circle.compute_perimeter():.2f}")
print(f"Area: {default_circle.compute_area():.2f}")
default_circle.print_definition()

print("\n" + "="*30 + "\n")

# Create a circle with a specific radius
big_circle = Circle(radius=10)
print(f"--- Circle with a larger radius ({big_circle.radius}) ---")
print(f"Perimeter: {big_circle.compute_perimeter():.2f}")
print(f"Area: {big_circle.compute_area():.2f}")
big_circle.print_definition()
