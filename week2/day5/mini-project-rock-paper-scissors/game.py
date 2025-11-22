# Part I - game.py

import random

## Step 1: Create the Game Class
class Game:
# Step 2: Implement get_user_item Method
    def get_user_item(self):
        while True:
            user_input = input("Choose rock, paper, or scissors: ").lower()
            if user_input in ["rock", "paper", "scissors"]:
                return user_input
            print("Invalid choice. Please try again.")

# Step 3: Implement get_computer_item Method
    def get_computer_item(self):
        return random.choice(["rock", "paper", "scissors"])

# Step 4: Implement get_game_result Method
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "paper" and computer_item == "rock") or \
             (user_item == "scissors" and computer_item == "paper"):
            return "win"
        else:
            return "loss"

# Step 5: Implement play Method
    def play(self):
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()
        result = self.get_game_result(user_choice, computer_choice)
        print(f"You chose: {user_choice}")
        print(f"Computer chose: {computer_choice}")
        print(f"Result: {result}")
        return result
