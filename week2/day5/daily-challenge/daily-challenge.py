import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = []
        self.build_deck()

    def build_deck(self):
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]

    def shuffle(self):
        if len(self.cards) != 52:
            self.build_deck()
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return None  # Or raise an exception, but None is safer for simple scripts
        return self.cards.pop()

# Example Usage
if __name__ == "__main__":
    deck = Deck()
    deck.shuffle()
    
    print("Dealing 5 cards:")
    for _ in range(5):
        card = deck.deal()
        if card:
            print(card)
        else:
            print("No more cards!")
