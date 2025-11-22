# anagram_checker.py
# Step 1: Create the AnagramChecker Class
class AnagramChecker:
    def __init__(self):
        # Open the sowpods.txt file in read mode
        with open('sowpods.txt', 'r') as file:
            # Read all lines from the file, remove newline characters, and convert to lowercase
            self.words = [line.strip().lower() for line in file]
        # Convert the list to a set for faster lookup when checking valid words
        self.words_set = set(self.words)

# Step 2: Implement is_valid_word Method
    def is_valid_word(self, word):
        # Convert input word to lowercase and check if it exists in the word list set
        return word.lower() in self.words_set

# Step 3: Implement is_anagram Method
    def is_anagram(self, word1, word2):
        # Convert both words to lowercase, sort the letters, and compare
        return sorted(word1.lower()) == sorted(word2.lower())

# Step 4: Implement get_anagrams Method
    def get_anagrams(self, word):
        # Convert input word to lowercase for consistent comparison
        word_lower = word.lower()
        # Create an empty list to store found anagrams
        anagrams = []
        # Loop through all words in the word list
        for w in self.words:
            # Check if current word is an anagram of the input word and not the same word
            if w != word_lower and self.is_anagram(word_lower, w):
                # Add the anagram to the list
                anagrams.append(w)
        # Return the list of anagrams
        return anagrams
