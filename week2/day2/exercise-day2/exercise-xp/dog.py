# Exercise 2: Dogs

# Step 1: Create the Dog Class
class Dog:
    def __init__(self, name, age, weight):
        self.name = name  
        self.age = age    
        self.weight = weight  

    # Method for the dog to bark
    def bark(self):
        return f"{self.name} is barking"  

    # Method to calculate the dog's running speed
    def run_speed(self):
        return self.weight / self.age * 10  

    # Method for the dog to fight another dog
    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight  
        other_power = other_dog.run_speed() * other_dog.weight  

        # Compare powers to see who wins
        if my_power > other_power:
            return f"{self.name} wins the fight!"  
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight!"  
        else:
            return "It's a tie!"  

# Step 2: Create dog instances (for testing the Dog class)
dog1 = Dog("Buddy", 5, 20)  
dog2 = Dog("Max", 3, 15)    
dog3 = Dog("Bella", 4, 18)  

# # Step 3: Test dog methods
# print(dog2.run_speed())  
# print(dog1.fight(dog2))  
# print(dog3.fight(dog1))  


# Step 3: Test dog methods
print(dog2.run_speed())  
print(dog1.fight(dog2))  
print(dog3.fight(dog1))  


