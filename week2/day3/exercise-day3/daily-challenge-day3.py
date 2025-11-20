# Daily Challenge - Circle

import math      # Import math module to calculate area
import turtle    # Import Turtle module for drawing 

# Step 1: Define the Circle class

class Circle:
    def __init__(self, radius):    
        self.radius = radius 

    @classmethod      
    def from_diameter(cls, diameter):     
        return cls(diameter / 2)  

    @property
    def diameter(self):
        return self.radius * 2  

    def area(self):
        return math.pi * self.radius ** 2  

    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}"  

    def __add__(self, other):
        return Circle(self.radius + other.radius)  

    def __gt__(self, other):
        return self.radius > other.radius  

    def __eq__(self, other):
        return self.radius == other.radius  

    def __lt__(self, other):
        return self.radius < other.radius  

# Step 2: Create some circles
c1 = Circle(5)               
c2 = Circle.from_diameter(20) 
c3 = Circle(7)               

# Step 3: Print attributes and calculations
print(c1) 
print(c2)  
print("Area of c1:", c1.area())  
print("Area of c2:", c2.area())  

# Step 4: Add circles
c4 = c1 + c3
print("c1 + c3 =", c4)  

# Step 5: Compare circles
print("Is c2 bigger than c1?", c2 > c1)  
print("Is c1 equal to c3?", c1 == c3)    

# Step 6: Sort circles
circle_list = [c1, c2, c3, c4]
circle_list.sort() 
print("Sorted circles by radius:")
for c in circle_list:
    print(c)

# Bonus
# Step 7: Draw sorted circles using Turtle  

screen = turtle.Screen()               
screen.title("Sorted Circles Visualization")  
screen.bgcolor("white")               

drawer = turtle.Turtle()               
drawer.speed(1)                        
drawer.pensize(2)                     

# Function to draw a circle at a given (x, y) position
def draw_circle(circle, x, y):
    drawer.penup()                      
    drawer.goto(x, y - circle.radius)   
    drawer.pendown()                    
    drawer.circle(circle.radius)       

x_position = -200                       
y_position = 0                          

# Draw each sorted circle horizontally
for c in circle_list:
    draw_circle(c, x_position, y_position)  
    x_position += c.radius * 2 + 20         

screen.mainloop()  



# Daily challenge: Translator

# Step 1: Import the Translator class from googletrans module
# i was supposed to use  googletrans but since that doesn't translate good i used deep-translator
from deep_translator import GoogleTranslator

# Step 2: Create a list of French words to translate
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# Step 4: Create an empty dictionary to store translations
translations = {}

# Step 5: Loop through each word in the French words list
for word in french_words:
    # Step 6: Translate the word to English ('en')
    translated_word = GoogleTranslator(source='fr', target='en').translate(word)
    # Step 7: Add the original French word as key and English translation as value
    translations[word] = translated_word

# Step 8: Print the final dictionary of translations
print(translations)



# Daily Challenge GOLD - User Info

# Create an empty list to store user information
user_list = []

# Ask the user for Name, Age, and Score 5 times
for i in range(5):
  
    name = input("Enter Name: ")
    age = input("Enter Age: ")
    score = input("Enter Score: ")
    
    # Step 3: Add the inputs as a tuple to the list
    user_list.append((name, age, score))

# Sort the list using lambda function
user_list.sort(key=lambda x: (x[0], x[1], x[2]))

print(user_list)
