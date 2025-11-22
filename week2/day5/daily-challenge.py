#Daily challenge: OOP Quizz

#  Exercise 1: Quiz

# 1. What is a class?
# A class is a blueprint for creating objects. It defines attributes and methods.

# 2. What is an instance?
# An instance is a specific object created from a class.

# 3. What is encapsulation?
# Encapsulation is hiding internal details of an object and exposing only what is necessary.

# 4. What is abstraction?
# Abstraction is showing only the essential features and hiding unnecessary details.

# 5. What is inheritance?
# Inheritance is when a class (child) takes properties and methods from another class (parent).

# 6. What is multiple inheritance?
# Multiple inheritance is when a class inherits from more than one parent class.

# 7. What is polymorphism?
# Polymorphism allows the same method name to be used for different classes in different ways.

# 8. What is method resolution order (MRO)?
# MRO is the order Python follows to look for a method in a hierarchy of classes.



"""                Exercise 2: Create a deck of cards class                      """

# Used to shuffle the deck
import random  

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

# Makes the card readable when printed
    def __str__(self):
        return f"{self.value} of {self.suit}"  


class Deck:
    def __init__(self):
        # Initialize suits, values, and create the full deck
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = []
        self.build_deck()

    def build_deck(self):
        # Create all 52 cards
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]

    def shuffle(self):
        # Shuffle the deck; rebuild if not complete
        if len(self.cards) != 52:
            self.build_deck()
        random.shuffle(self.cards)

    def deal(self):
        # Deal a card from the deck
        if len(self.cards) == 0:
            return "No cards left in the deck!"
        return self.cards.pop()


# Example usage
deck = Deck()
deck.shuffle()
card = deck.deal()
print(card)




# Daily Challenge : Modules

# To send requests to websites
import requests  
import time      # To measure time

def webpage_load_time(url):
    start_time = time.time()       
    response = requests.get(url)   # Get the webpage
    end_time = time.time()        
    return end_time - start_time   # Return load time

# Test the function with different websites
print("Google load time:", webpage_load_time("https://www.google.com"), "seconds")
print("Ynet load time:", webpage_load_time("https://www.ynet.co.il"), "seconds")
print("IMDB load time:", webpage_load_time("https://www.imdb.com"), "seconds")

