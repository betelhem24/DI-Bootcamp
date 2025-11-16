# Exercises XP

# 🌟 Exercise 1: Cats

# Step 1: Define the Cat class
class Cat:
    # Constructor to initialize cat name and age
    def __init__(self, cat_name, cat_age):
        self.name = cat_name  
        self.age = cat_age    

# Step 2: Create three cat objects
cat1 = Cat("Fluffy", 3)    
cat2 = Cat("Mittens", 5)   
cat3 = Cat("Whiskers", 2)  

# Print each cat's details to check
print("Cat 1:", cat1.name, cat1.age)
print("Cat 2:", cat2.name, cat2.age)
print("Cat 3:", cat3.name, cat3.age)

# Step 3: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):

    if cat1.age > cat2.age:
        oldest = cat1
    else:
        oldest = cat2
  
    if cat3.age > oldest.age:
        oldest = cat3
    return oldest  

# Step 4: Find the oldest cat and print the details
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

#  Exercise 2 : Dogs

# Step 1: Create a Dog class
class Dog:
    def __init__(self, name, height):
        self.name = name      
        self.height = height  

    def bark(self):
        print(f"{self.name} goes woof!")  # dog barks

    def jump(self):
        jump_height = self.height * 2     # calculate jump height
        print(f"{self.name} jumps {jump_height} cm high!")  # dog jumps

# Step 2: Create dog objects
davids_dog = Dog("Rex", 50)    
sarahs_dog = Dog("Bella", 40) 

# Step 3: Print dog details and call methods
print("David's dog:")
print("Name:", davids_dog.name)     
print("Height:", davids_dog.height) 
davids_dog.bark()                  
davids_dog.jump()                   

print("\nSarah's dog:")
print("Name:", sarahs_dog.name)     
print("Height:", sarahs_dog.height) 
sarahs_dog.bark()                   
sarahs_dog.jump()                   

# Step 4: Compare dog sizes
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same height")


# Exercise 3 : Who’s the song producer?

# Step 1: Define a class called Song
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics  

    # Step 2: Define a method to sing the song
    def sing_me_a_song(self):
        # Loop through each line in the lyrics list
        for line in self.lyrics:
            print(line)

# Step 3: Create a Song object (an actual song)
stairway = Song([
    "There’s a lady who's sure",
    "All that glitters is gold",
    "And she’s buying a stairway to heaven"
])

# Step 4: Call the method to sing the song
stairway.sing_me_a_song()

#  Exercise 4 : Afternoon at the Zoo

# Step 1: Define the Zoo class
class Zoo:
    # __init__ method runs automatically when we create a Zoo object
    def __init__(self, zoo_name):
        self.name = zoo_name 
        self.animals = []    

    # add_animal allows us to add one or more animals to the zoo
    def add_animal(self, *new_animals):
        for animal in new_animals:          
            if animal not in self.animals:   
                self.animals.append(animal) 

    # get_animals prints all animals currently in the zoo
    def get_animals(self):
        print("Animals in the zoo:", self.animals)

    # sell_animal removes an animal from the zoo
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:       # check if animal is in the list
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    # sort_animals organizes animals alphabetically and groups them by first letter
    def sort_animals(self):
        self.animals.sort()           # sort the animals alphabetically
        self.animal_groups = {}     
        for animal in self.animals:
            first_letter = animal[0]           
            if first_letter not in self.animal_groups:
                self.animal_groups[first_letter] = []  
            self.animal_groups[first_letter].append(animal)  

    # get_groups prints the groups of animals
    def get_groups(self):
        for letter, group in self.animal_groups.items():
            print(f"{letter}: {group}")

# Step 2: Create a Zoo object
brooklyn_safari = Zoo("Brooklyn Safari")

# Step 3: Test the methods
brooklyn_safari.add_animal("Giraffe", "Bear", "Baboon")  # Add multiple animals
brooklyn_safari.get_animals()  

brooklyn_safari.sell_animal("Bear")  # Sell Bear
brooklyn_safari.get_animals()       

brooklyn_safari.sort_animals()  # Sort and group
brooklyn_safari.get_groups()   

# Exercises XP Gold

# Exercise 1 : Geometry

# Step 1: Define the Circle class
class Circle:
    # Constructor method runs when we create a circle object
    def __init__(self, radius=1.0):
        # Store the radius in the object
        self.radius = radius

    # Method to calculate perimeter (circumference)
    def perimeter(self):
        # formula: 2 * pi * radius
        return 2 * 3.14 * self.radius

    # Method to calculate area
    def area(self):
        # formula: pi * radius^2
        return 3.14 * self.radius * self.radius

    # Method to print geometrical definition
    def definition(self):
        print("A circle is a set of points in a plane that are at a fixed distance from a center point.")

# Step 2: Create a circle with default radius
circle1 = Circle()  # default radius = 1.0
print("Circle with default radius:")
print("Radius:", circle1.radius)        
print("Perimeter:", circle1.perimeter()) 
print("Area:", circle1.area())          
circle1.definition()                     

# Step 3: Create a circle with radius 5
circle2 = Circle(5)  # radius = 5
print("\nCircle with radius 5:")
print("Radius:", circle2.radius)
print("Perimeter:", circle2.perimeter())
print("Area:", circle2.area())
circle2.definition()

# Exercise 2 : Custom List Class

# Testing our MyList class
# Create a list of letters
my_letters = ['d', 'a', 'c', 'b']

# Create an object of MyList
my_list_object = MyList(my_letters)

print("Original list:", my_list_object.letters)  

print("Reversed list:", my_list_object.reverse_list())  

print("Sorted list:", my_list_object.sort_list())  

print("Random number list:", my_list_object.random_number_list())  

# Exercise 3 : Restaurant Menu Manager

# menu_manager.py

# Step 1: Create a class called MenuManager
# A class is like a blueprint for creating objects (in this case, our restaurant menu)
class MenuManager:

    # Step 2: Create the constructor method __init__
    # This method runs automatically when we create a new MenuManager object
    def __init__(self):
        # Step 3: Create a menu attribute
        # This is a list of dictionaries, each dictionary represents a dish
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]
        # Print the current menu so we can see it when we create the object
        print("Initial Menu:")
        for dish in self.menu:
            print(dish)
        print()  # blank line for readability

    # Step 4: Method to add a new dish
    def add_item(self, name, price, spice, gluten):
        # Create a new dictionary for the new dish
        new_dish = {"name": name, "price": price, "spice": spice, "gluten": gluten}
        # Add it to the menu
        self.menu.append(new_dish)
        print(f"Dish '{name}' added to the menu.")
        print("Updated Menu:")
        for dish in self.menu:
            print(dish)
        print()

    # Step 5: Method to update an existing dish
    def update_item(self, name, price, spice, gluten):
        # Search for the dish in the menu
        for dish in self.menu:
            if dish["name"] == name:
                # If found, update its details
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"Dish '{name}' updated.")
                print("Updated Menu:")
                for d in self.menu:
                    print(d)
                print()
                return  
        
        print(f"Dish '{name}' is not in the menu.\n")

    # Step 6: Method to remove a dish
    def remove_item(self, name):
        for dish in self.menu:
            if dish["name"] == name:
                self.menu.remove(dish)  
                print(f"Dish '{name}' removed from the menu.")
                print("Updated Menu:")
                for d in self.menu:
                    print(d)
                print()
                return  
                
        print(f"Dish '{name}' is not in the menu.\n")


# Step 7: Test the class and methods
# Create a MenuManager object
manager = MenuManager()

# Add a new dish
manager.add_item("Pizza", 20, "A", True)

manager.update_item("Soup", 12, "A", False)

manager.update_item("Ice Cream", 8, "A", True)

manager.remove_item("Hamburger")

# Try to remove a dish that does not exist
manager.remove_item("Steak")



# Exercises XP Ninja

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []  # List to store call history
        self.messages = []      # List to store messages

    # Method to make a call
    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    # Method to show call history
    def show_call_history(self):
        if not self.call_history:
            print(f"No call history for {self.phone_number}.")
        else:
            print(f"Call history for {self.phone_number}:")
            for record in self.call_history:
                print(record)

    # Method to send a message
    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}: {content}")

    # Show outgoing messages
    def show_outgoing_messages(self):
        outgoing = [msg for msg in self.messages]
        if not outgoing:
            print(f"No outgoing messages from {self.phone_number}.")
        else:
            print(f"Outgoing messages from {self.phone_number}:")
            for msg in outgoing:
                print(f"To {msg['to']}: {msg['content']}")

    # Show incoming messages
    def show_incoming_messages(self):
        # Incoming messages are those sent TO this phone
        incoming = [msg for msg in PhoneRegistry.all_messages if msg["to"] == self.phone_number]
        if not incoming:
            print(f"No incoming messages for {self.phone_number}.")
        else:
            print(f"Incoming messages for {self.phone_number}:")
            for msg in incoming:
                print(f"From {msg['from']}: {msg
