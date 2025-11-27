# Step 1: Import AnagramChecker
from anagram_checker import AnagramChecker

# Step 2: Create a Menu Loop
checker = AnagramChecker()

# Step 3: Get User Input and Validate
while True:
    user_input = input("Enter a word to find anagrams (or type 'exit' to quit): ").strip()
    # Check if the user wants to exit the program
    if user_input.lower() == 'exit':
        print("Goodbye!")
        break  

# Step 4: Find and Display Anagrams
    if checker.is_valid_word(user_input):
        print(f"'{user_input}' is a valid word.")
        
        anagrams = checker.get_anagrams(user_input)
        
        # Display the found anagrams
        if anagrams:
            print(f"Anagrams of '{user_input}': {', '.join(anagrams)}")
        else:
            print(f"No anagrams found for '{user_input}'.")
    else:
        print(f"'{user_input}' is not a valid word.")
    
    print()
