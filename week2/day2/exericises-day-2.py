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

# Step 2: Create dog instances
dog1 = Dog("Buddy", 5, 20)  
dog2 = Dog("Max", 3, 15)    
dog3 = Dog("Bella", 4, 18)  

# Step 3: Test dog methods
print(dog1.bark())           
print(dog2.run_speed())    
print(dog1.fight(dog2))      
print(dog3.fight(dog1))      


# Exercise 3: Dogs Domesticated

# Step 1: Import the Dog class from the previous exercise
from dog import Dog 

# Step 2: Create the PetDog class
import random  

class PetDog(Dog): 
    def __init__(self, name, age, weight):  
        super().__init__(name, age, weight)  
        self.trained = False  

    def train(self): 
        print(self.bark())  
        self.trained = True  

    def play(self, *args):  
        dog_names = [dog.name if isinstance(dog, Dog) else dog for dog in args]  
        dog_names.insert(0, self.name)  
        print(f"{', '.join(dog_names)} all play together")  

    def do_a_trick(self):  
        if self.trained:  
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]  
            print(f"{self.name} {random.choice(tricks)}") 

# Step 3: Test PetDog methods
# Create instances of PetDog
my_dog = PetDog("Fido", 2, 10)  
buddy = PetDog("Buddy", 3, 12) 
max_dog = PetDog("Max", 1, 8)  

# Train Fido
my_dog.train()  # Fido barks and is now trained

# Play with multiple dogs
my_dog.play(buddy, max_dog)  

# Make Fido do a trick
my_dog.do_a_trick()  


# Exercise 4: Family and Person Classes

# Step 1: Create the Person class
class Person:
    def __init__(self, first_name, age):
    
        self.first_name = first_name
        self.age = age
        self.last_name = ""
    
    # Method to check if the person is 18 or older
    def is_18(self):
       
        if self.age >= 18:
            return True
        else:
            return False

# Step 2: Create the Family class
class Family:
    def __init__(self, last_name):
        
        self.last_name = last_name
        self.members = []
    
    # Method to add a new family member
    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append(new_member)
    
    # Method to check if a member is over 18
    def check_majority(self, first_name):

        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    
                    print(f"You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    
                    print("Sorry, you are not allowed to go out with your friends.")
                return  
        # If the person is not found in the family
        print("Person not found in the family.")
    
    # Method to display the family and its members
    def family_presentation(self):
       
        print(f"Family Last Name: {self.last_name}")
       
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")


# Example usage/testing

# Create a new family with last name "Smith"
my_family = Family("Smith")

# Add family members
my_family.born("Alice", 20)  
my_family.born("Bob", 15)    

# Check if a family member is allowed to go out
my_family.check_majority("Alice") 
my_family.check_majority("Bob")    

# Present the family
my_family.family_presentation()    

# Exercises XP Gold

# Exercise 1: Bank Account

# Part I: BankAccount class
class BankAccount:
    def __init__(self, balance=0, username="", password=""):  
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):  
        if self.username == username and self.password == password:  
            self.authenticated = True
        else:
            raise Exception("Authentication failed!")

    def deposit(self, amount):  
        if not self.authenticated:     
            raise Exception("Please login first!")
        if amount <= 0:                 
            raise Exception("Deposit amount must be positive!")
        self.balance += amount

    def withdraw(self, amount):  
        if not self.authenticated:     
            raise Exception("Please login first!")
        if amount <= 0:                 
            raise Exception("Withdraw amount must be positive!")
        self.balance -= amount


# Part II: MinimumBalanceAccount inherits from BankAccount
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, username="", password="", minimum_balance=0):  
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):  
        if not self.authenticated:     
            raise Exception("Please login first!")
        if amount <= 0:                 
            raise Exception("Withdraw amount must be positive!")
        if self.balance - amount < self.minimum_balance:  
            raise Exception("Cannot withdraw beyond minimum balance!")
        self.balance -= amount


# Part IV: BONUS ATM class
class ATM:
    def __init__(self, account_list, try_limit=2):  
        if not isinstance(account_list, list):  
            raise Exception("Account list must be a list!")
        for account in account_list:  
            if not isinstance(account, (BankAccount, MinimumBalanceAccount)):  
                raise Exception("All accounts must be BankAccount or MinimumBalanceAccount instances!")
        if try_limit <= 0:  
            raise Exception("Try limit must be positive!")
        
        self.account_list = account_list  
        self.try_limit = try_limit        
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):  
        while True:  
            print("\nATM Main Menu")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select option: ")
            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting ATM. Goodbye!")
                break
            else:
                print("Invalid choice!")

    def log_in(self, username, password):  
        for account in self.account_list:  
            try:
                account.authenticate(username, password)
                print("Login successful!")
                self.show_account_menu(account)
                return
            except Exception:
                continue
        self.current_tries += 1
        print(f"Invalid credentials. Attempt {self.current_tries}/{self.try_limit}")
        if self.current_tries >= self.try_limit:  
            print("Maximum login attempts reached. Shutting down.")
            exit()

    def show_account_menu(self, account):  
        while True:
            print(f"\nAccount Menu - Balance: {account.balance}")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select option: ")
            if choice == "1":
                amount = int(input("Enter deposit amount: "))
                try:
                    account.deposit(amount)
                    print(f"Deposited {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(e)
            elif choice == "2":
                amount = int(input("Enter withdraw amount: "))
                try:
                    account.withdraw(amount)
                    print(f"Withdrew {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(e)
            elif choice == "3":
                print("Logging out...")
                account.authenticated = False
                break
            else:
                print("Invalid choice!")





# Exercises XP Ninja

# Exercise 1 : Conway’s Game of Life

from time import sleep
import os

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = [[0 for _ in range(cols)] for _ in range(rows)]
        
        if initial_state:
            for r in range(min(len(initial_state), rows)):
                for c in range(min(len(initial_state[r]), cols)):
                    self.grid[r][c] = initial_state[r][c]

    def display(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        for row in self.grid:
            line = ""
            for cell in row:
                line += "O" if cell == 1 else "."
            print(line)
        print("\n")

    def count_live_neighbors(self, row, col):
        directions = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),          (0, 1),
            (1, -1), (1, 0), (1, 1)
        ]
        count = 0
        for dr, dc in directions:
            r, c = row + dr, col + dc
            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]
        return count

    def next_generation(self):
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        
        for r in range(self.rows):
            for c in range(self.cols):
                live_neighbors = self.count_live_neighbors(r, c)
                
                if self.grid[r][c] == 1:
                    if live_neighbors in [2, 3]:
                        new_grid[r][c] = 1
                else:
                    if live_neighbors == 3:
                        new_grid[r][c] = 1
        
        self.grid = new_grid
