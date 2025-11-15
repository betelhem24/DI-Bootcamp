# Daily challenge: Challenges

# Challenge 1: Sorting

# Get input from the user
words_input = input("Enter words separated by commas: ")  

# Split the string into a list of words
words_list = words_input.split(',')  

# The sorted() function returns a new list with the words in alphabetical order
sorted_words = sorted(words_list)  

# The join() function combines the list into a string, separated by commas
sorted_words_string = ','.join(sorted_words)  

#  Print the resulting sorted string
print(sorted_words_string)  


# Challenge 2: Longest Word

# Define the function
def longest_word(sentence):
    
    # Split the sentence into words
    words = sentence.split()
    
    # Start with an empty string because we haven't checked any words yet
    longest = ""
    
    #  Loop through each word in the list of words
    for word in words:
        
        if len(word) > len(longest):
            
            longest = word
    
    return longest


print(longest_word("Margaret's toy is a pretty doll."))        
print(longest_word("A thing of beauty is a joy forever."))     
print(longest_word("Forgetfulness is by all means powerless!"))



# Daily challenge : Advanced Algorithm


#  Import the random module so we can generate random numbers
import random

#  Generate a list of 20000 random numbers between 0 and 10000
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728

pairs = []

#  Use a set to remember numbers we've already seen
seen_numbers = set()

for number in list_of_numbers:
    
    needed_number = target_number - number
    
    if needed_number in seen_numbers:
        # If yes, we found a pair, so add it to the pairs list
        pairs.append((needed_number, number))
    
    # Add the current number to the set of seen numbers
    seen_numbers.add(number)

# Print all the pairs found
print("Pairs of numbers that sum to", target_number, "are:")
for pair in pairs:
    print(pair[0], "and", pair[1], "sums to", target_number)
