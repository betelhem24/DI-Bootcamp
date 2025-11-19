# Exercise 3: Dogs Domesticated

# Step 1: Import the Dog class from the previous exercise
from dog import Dog 

# Step 2: Create the PetDog class
import random  # To add randomness to the tricks

class PetDog(Dog): 
    def __init__(self, name, age, weight):  
        # Inherit from the Dog class
        super().__init__(name, age, weight)  
        self.trained = False  # Initially, the dog is not trained

    # Method to train the dog (it will bark when trained)
    def train(self): 
        print(self.bark())  # Print the bark message
        self.trained = True  # Set trained status to True

    # Method for the dog to play with other dogs
    def play(self, *args):  
        dog_names = [dog.name if isinstance(dog, Dog) else dog for dog in args]  
        dog_names.insert(0, self.name)  # Add current dog to the list of playmates
        print(f"{', '.join(dog_names)} all play together")  # Print who is playing

    # Method for the dog to do a trick (if trained)
    def do_a_trick(self):  
        if self.trained:  # Check if the dog is trained
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]  
            print(f"{self.name} {random.choice(tricks)}")  # Pick a random trick and display it

# Step 3: Test PetDog methods
my_dog = PetDog("Fido", 2, 10)  # Create a new PetDog instance
buddy = PetDog("Buddy", 3, 12)  # Another PetDog instance
max_dog = PetDog("Max", 1, 8)   # Another PetDog instance

# Train Fido
my_dog.train()  # Fido barks and is now trained

# Play with multiple dogs
my_dog.play(buddy, max_dog)  # Fido, Buddy, and Max will play together

# Make Fido do a trick
my_dog.do_a_trick()  # Fido does a random trick
