# anagrams.py

# Step 1: Import the AnagramChecker class from anagram_checker.py
from anagram_checker import AnagramChecker

# Step 2: Create an instance of AnagramChecker
checker = AnagramChecker()

# Step 3: Create a menu loop for user interaction
while True:
    # Ask the user to enter a word or type 'exit' to quit
    user_input = input("Enter a word to find anagrams (or type 'exit' to quit): ").strip()
    
    # Check if the user wants to exit the program
    if user_input.lower() == 'exit':
        print("Goodbye!")
        break  # Exit the loop and end the program

    # Step 4: Validate the entered word
    if checker.is_valid_word(user_input):
        print(f"'{user_input}' is a valid word.")
        
        # Find anagrams of the entered word
        anagrams = checker.get_anagrams(user_input)
        
        # Display the found anagrams
        if anagrams:
            print(f"Anagrams of '{user_input}': {', '.join(anagrams)}")
        else:
            print(f"No anagrams found for '{user_input}'.")
    else:
        # Inform the user if the word is not valid
        print(f"'{user_input}' is not a valid word.")
    
    # Add a blank line for readability before the next input
    print()
