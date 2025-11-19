# Exercises XP

#  Exercise 1: Pets


class Pets():
    def __init__(self, animals):  
        self.animals = animals    # Store the list in the instance

    def walk(self):  
        for animal in self.animals:  
            print(animal.walk())     

# Base Cat class
class Cat():
    is_lazy = True  # Class attribute: all cats are lazy by default

    def __init__(self, name, age):  
        self.name = name  
        self.age = age   

    def walk(self):  
        return f'{self.name} is just walking around'  

# Bengal cat class inherits from Cat
class Bengal(Cat):
    def sing(self, sounds):  
        return f'{sounds}'

# Chartreux cat class inherits from Cat
class Chartreux(Cat):
    def sing(self, sounds):  
        return f'{sounds}'

# Step 1: Siamese cat class inherits from Cat
class Siamese(Cat):
    pass  

# Step 2: Create instances of cats
bengal_cat = Bengal("Leo", 3)         
chartreux_cat = Chartreux("Milo", 5)  
siamese_cat = Siamese("Luna", 2)     

# Step 2 (continued): Put all cats into a list
all_cats = [bengal_cat, chartreux_cat, siamese_cat] 

# Step 3: Create a Pets instance with the list of cats
sara_pets = Pets(all_cats)  # Pets object now manages all cats

# Step 4: Take all cats for a walk
sara_pets.walk() 
