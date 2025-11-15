# Mini-Project - Tic Tac 


# step 1: Representing the Game Board

# Create the game board as a 3x3 grid filled with spaces character ' '
def create_board():
    # We return a list of lists (2D list) that represents the game board
    return [
        [" ", " ", " "],  
        [" ", " ", " "],  
        [" ", " ", " "]   
    ]

# #Print the board to see it
# print(board)


# Step 2: Displaying the Game Board
def display_board(board):
    # Print each row with lines between them
    print(board[0][0] + " | " + board[0][1] + " | " + board[0][2])
    print("---------")      # Horizontal divider
    print(board[1][0] + " | " + board[1][1] + " | " + board[1][2])
    print("---------")
    print(board[2][0] + " | " + board[2][1] + " | " + board[2][2])
    print()  # blank line for spacing


## To cheack the display board
# display_board(board)

# Step 3: Getting Player Input
def player_input(player, board):
    while True:  # Repeat until valid move is entered

        # Ask user for row number
        row = int(input(f"Player {player}, enter row (0,1,2): "))
        # Ask user for column number
        col = int(input(f"Player {player}, enter column (0,1,2): "))

        # Check if input is inside valid range
        if row not in [0, 1, 2] or col not in [0, 1, 2]:
            print("Invalid position. Numbers must be 0, 1, or 2.\n")
            continue  

        # Check if the chosen cell is empty
        if board[row][col] != ' ':
            print("That spot is already taken. Try again.\n")
            continue 

        # If valid spot found, return it
        return row, col


# Step 4: Checking for a Winner
# We need to see if a player has 3 in a row (horizontally, vertically, or diagonally).
def check_win(board, player):
    # Check rows
    for row in board:
        if row == [player, player, player]:
            return True

    # Check columns
    for col in range(3):
        if board[0][col] == player and board[1][col] == player and board[2][col] == player:
            return True

    # Check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True

    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True

    return False  # No winner found


# Step 5: Checking for a Tie
def check_tie(board):
    # If any space is still empty, not a tie
    for row in board:
        if ' ' in row:
            return False
    return True  # Board is full → tie


# Step 6: The Main Game Loop
def play():
    board = create_board()  # Create empty board
    current_player = 'X'    # Player X starts

    while True:  # Runs until break
        display_board(board)  # Show board

        # Ask player for move
        row, col = player_input(current_player, board)

        # Put player's symbol on board
        board[row][col] = current_player

        # Check if current player won
        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break  # End game

        # Check if tie
        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break  # End game

        # Switch players
        if current_player == 'X':
            current_player = 'O'
        else:
            current_player = 'X'


# Run the game
play()




# Mini-Project #2 - Hangman

import random

#  Create a list of words for the game
wordslist = ['correction', 'childish', 'beach', 'python', 'assertive',
             'interference', 'complete', 'share', 'credit card', 'rush', 'south']

word = random.choice(wordslist)

# Create a variable to show the word with stars for hidden letters '*****'
display_word = ""
for letter in word:
    if letter == " ":  
        display_word += " "  
    else:
        display_word += "*"  

# Create a list to store guessed letters
guessed_letters = []

#  Set up hangman stages (6 body parts)
# Each wrong guess will show more of the hangman
hangman_stages = ["head", "body", "left arm", "right arm", "left leg", "right leg"]
wrong_guesses = 0  # Count of wrong guesses

#  Start the game loop
# The game will continue until the word is solved or hangman is complete
while "*" in display_word and wrong_guesses < 6:
    print("\nWord to guess:", display_word)  
    print("Guessed letters:", guessed_letters)  
    print("Wrong guesses left:", 6 - wrong_guesses)  

    # Ask the player to guess a letter
    guess = input("Guess a letter: ").lower()  

    # Check if the letter was already guessed
    if guess in guessed_letters:
        print("You already guessed that letter. Try again.")
        continue 

    # Add the guessed letter to the list
    guessed_letters.append(guess)

    #  Check if the guessed letter is in the word
    if guess in word:
        print("Good guess!")

        #  Replace stars with correct letters
        new_display = ""
        for i in range(len(word)):
            if word[i] == guess:
                new_display += guess  # Reveal the guessed letter
            else:
                new_display += display_word[i]  # Keep other letters/stars
        display_word = new_display

    else:
        print("Wrong guess!")
        print("Adding a body part:", hangman_stages[wrong_guesses])
        wrong_guesses += 1  # Add a wrong guess

# Check if the player won or lost
if "*" not in display_word:
    print("\nCongratulations! You guessed the word:", word)
else:
    print("\nGame over! The word was:", word)


# Challenges
# Exercise 1

fruits = ["avocado", "strawberries", "apple"] 

new_fruit = "kiwi"  

index_to_insert = 2  

# Insert 'kiwi' into the list at the chosen index
fruits.insert(index_to_insert, new_fruit)  # insert() adds 'new_fruit' at position 'index_to_insert'

print(fruits)


# Exercise 2


#  Ask the user to enter a string

user_string = input("Enter a string: ")  

# 'count(" ")' counts how many spaces are in the string automatically
space_count = user_string.count(" ")  

print("Number of spaces:", space_count)

# Exercise 3

# Ask the user to enter a string
text = input("Enter a string: ")

upper_count = 0
lower_count = 0

# Loop through each character in the string

for i in text:  # 'i' will take each character in 'text' one by one
    if i.isupper():
        upper_count += 1
    elif i.islower():
        lower_count += 1

print("Number of uppercase letters:", upper_count)
print("Number of lowercase letters:", lower_count)

# Exercise 4

#  Define a function called my_sum that takes one argument (a list of numbers)
def my_sum(numbers):
    
    total = 0
    
    for num in numbers:
        #  Add the current number 'num' to 'total'
        total += num  
    
    return total

print(my_sum([1, 5, 4, 2]))  

# Exercise 5

# Define a function called find_max that takes a list called numbers
def find_max(numbers):
   
    max_number = numbers[0]  
    
    #  Go through each number in the list to check if it's bigger than max_number
    for num in numbers: 
        if num > max_number:  
            max_number = num  
    
    #  Return the largest number found
    return max_number  

print(find_max([0, 1, 3, 50]))  

# Exercise 6

# Define a function called 'factorial' that takes one parameter 'n'
def factorial(n):
    
    result = 1
    
    for i in range(1, n + 1):
        result = result * i  
    
    return result

print(factorial(4))  


# Exercise 7

#  Define a function called list_count with two inputs: lst and element
def list_count(lst, element):

    count = 0
    
    for item in lst:
       
        if item == element:
        
            count += 1
    
    return count

print(list_count(['a','a','t','o'], 'a'))  


# Exercise 8

import math

def norm(lst):
    sum_of_squares = 0
    for x in lst:
        sum_of_squares += x**2
    result = math.sqrt(sum_of_squares)
    # Convert to int if the result is exactly a whole number
    if result.is_integer():  # checks if it's like 3.0, 4.0, etc.
        result = int(result)
    return result

print(norm([1, 2, 2]))  # Output: 3

# Exercise 9

# Define the function is_mono that takes a list called arr as input
def is_mono(arr):
   
    non_decreasing = all(arr[i] <= arr[i+1] for i in range(len(arr)-1))
    non_increasing = all(arr[i] >= arr[i+1] for i in range(len(arr)-1))

    # If the array is either non-decreasing or non-increasing, it is monotonic
    return non_decreasing or non_increasing

print(is_mono([7,6,5,5,2,0]))  
print(is_mono([2,3,3,3]))      
print(is_mono([1,2,0,4]))     

# Exercise 10

#  Define a function called 'longest_word' that takes one input 'words_list'
def longest_word(words_list):
    
    longest = ""
    
    for word in words_list:
        
        if len(word) > len(longest):
            
            longest = word
            
    
    print("The longest word is:", longest)


my_words = ["apple", "banana", "cherry", "watermelon", "kiwi"]

longest_word(my_words)

# Exercise 11
# Create a mixed list of integers and strings
mixed_list = [1, "apple", 3, "banana", 5, "cherry"]  

#  Create empty lists to store integers and strings separately
int_list = []   
str_list = []   

# Go through each item in the mixed list
for item in mixed_list:   
    if type(item) == int:  
        int_list.append(item)  
    elif type(item) == str:  
        str_list.append(item)  

# Print the separated lists to see the result
print("List of integers:", int_list)  
print("List of strings:", str_list)   


# Exercise 12


# Define a function called is_palindrome that takes one input called 'word'
def is_palindrome(word):
    # Reverse the string using slicing [::-1] and check if it is equal to the original string
    if word == word[::-1]:
        return True
    else: 
        return False


print(is_palindrome('radar'))  
print(is_palindrome('John'))   


# Exercise 13

# Define a function named sum_over_k that takes a sentence and a number k
def sum_over_k(sentence, k):
    
    words = sentence.split()  
    
    count = 0
    
    for word in words:
        if len(word) > k:
            count += 1
    
    return count

sentence = 'Do or do not there is no try'
k = 2
print(sum_over_k(sentence, k)) 


# Exercise 14

# Define a function called dict_avg that takes one input, a dictionary
def dict_avg(my_dict):
    values = my_dict.values()  

    # Calculate the sum of all values using the sum() function
    total = sum(values) 

    # Calculate how many values there are using len()
    count = len(values) 

    # Calculate the average by dividing total by count
    average = total / count 

    return average

result = dict_avg({'a': 1, 'b': 2, 'c': 8, 'd': 1})

print(result)  

# Exercise 15

# Define the function called common_div which takes two numbers a and b
def common_div(a, b):
    # Create an empty list to store common divisors
    divisors = []

    smaller = min(a, b)

    for i in range(1, smaller + 1):
        # Check if i divides both a and b evenly
        if a % i == 0 and b % i == 0:
            # If yes, add i to the divisors list
            divisors.append(i)
    
    return divisors

print(common_div(10, 20)) 


# Exercise 16

# Function to check if a number is prime
def is_prime(number):  
    if number < 2:  
        return False  
    
    # Check for divisors from 2 up to number-1
    for i in range(2, number):  # Loop through all numbers from 2 to number-1
        if number % i == 0:  
            return False  
    
    #  If no divisors found, number is prime
    return True  

print(is_prime(11)) 
print(is_prime(4))   
print(is_prime(2))  
print(is_prime(1))   



# Exercise 17

# Define a function called weird_print that takes a list as input
def weird_print(my_list):
    
    result = []
    
    for index, value in enumerate(my_list):
        
        if index % 2 == 0 and value % 2 == 0:
            
            result.append(value)
    
    print(result)

weird_print([1, 2, 2, 3, 4, 5])


# Exercise 18

# Define the function that accepts any number of keyword arguments
def type_count(**kwargs):  
    type_dict = {}  
    
    # Loop through each key-value pair in the keyword arguments
    for key, value in kwargs.items(): 
        t = type(value) 
        if t in type_dict:  
            type_dict[t] += 1  
        else:  
            type_dict[t] = 1  
    
    # Create a nice output string
    result = ", ".join(f"{k.__name__}: {v}" for k, v in type_dict.items())  
    return result 

print(type_count(a=1, b='string', c=1.0, d=True, e=False))  


# Exercise 19

# Define a function called my_split which takes two arguments:

def my_split(s, sep=' '):
    result = []
    word = ''
    
    for char in s:
       
        if char == sep:
    
            if word != '':
                result.append(word)
                word = ''
        else:
            
            word += char
    
    if word != '':
        result.append(word)
    
    return result

text = "Hello world this is Python"
print(my_split(text))           
print(my_split(text, 'o'))     


# Exercise 20

#  Get input from the user

user_input = input("Enter your password: ")  

#  Find the length of the string
length_of_input = len(user_input)  

# We use '*' multiplied by the length of the string
password_format = '*' * length_of_input  

# Show the result to the user
print(password_format)  

# Challenges #2

# Exercise 1


# Pattern 1: Pyramid

rows = 3  

for i in range(1, rows + 1):  
    print(" " * (rows - i) + "*" * (2 * i - 1))

print("\n")  # add empty line between patterns


# Pattern 2: Right-aligned triangle

rows = 5  

for i in range(1, rows + 1):  
    print(" " * (rows - i) + "*" * i)  

print("\n")  

# Pattern 3: Diamond with flat top

rows = 5  

# Top part (increasing stars)
for i in range(1, rows + 1):
    print("*" * i)  # print i stars

# Bottom part (decreasing stars)
for i in range(1, rows + 1):
    print(" " * (i - 1) + "*" * (rows - i + 1))  # spaces + stars



# Exercise 2

# Exercise 2

# Define a list of numbers to sort
my_list = [2, 24, 12, 354, 233]  

# Loop through the list, but we don't need to go to the last element
for i in range(len(my_list) - 1): 

    minimum = i 
    
    # Loop to find the smallest element in the remaining part of the list
    for j in range(i + 1, len(my_list)):  

        if my_list[j] < my_list[minimum]:  
            minimum = j  

            if minimum != i:  
                #  Swap the element at position i with the minimum element found
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
                
print(my_list)  

