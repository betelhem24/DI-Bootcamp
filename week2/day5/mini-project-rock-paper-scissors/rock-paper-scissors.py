# Part II - rock-paper-scissors.py

from game import Game

# Step 6: Implement get_user_menu_choice Function
def get_user_menu_choice():
    while True:
        print("\nMenu:")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        choice = input("Enter your choice (1-3): ")
        if choice in ["1", "2", "3"]:
            return choice
        print("Invalid choice. Please try again.")

#  Step 7: Implement print_results Function
def print_results(results):
    print("\nGame Summary:")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("Thank you for playing!")

# Step 8: Implement main Function
def main():
    results = {}
    while True:
        choice = get_user_menu_choice()
        if choice == "1":
            game = Game()
            result = game.play()
            results[result] = results.get(result, 0) + 1
        elif choice == "2":
            print_results(results)
        elif choice == "3":
            print_results(results)
            break

if __name__ == "__main__":
    main()
