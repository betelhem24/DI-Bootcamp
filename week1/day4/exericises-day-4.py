# Exercises XP
#  Exercise 1: What Are You Learning?

#  Define a function called display_message

def display_message():
   
    print("I am learning about functions in Python.")

display_message()

# Exercise 2: What’s Your Favorite Book?

#  Define a function called favorite_book that takes one parameter 'title'
def favorite_book(title):
   
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")

# Exercise 3: Some Geography

# Create a function that describes a city and its country.

# Define the function

def describe_city(city, country="Unknown"):
   
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")

describe_city("Paris")

describe_city("Tokyo", "Japan")

# Exercise 4: Random

# Import the random module
# This lets us use random number functions in our code
import random

def compare_numbers(user_number):
   
    random_number = random.randint(1, 100)
    
    if user_number == random_number:
       
        print("Success!")
    else:
       
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

compare_numbers(50)


# Exercise 5: Let’s Create Some Personalized Shirts!

# Create a function that describes a shirt with size and message.

def make_shirt(size="large", text="I love Python"):
    """
    This function prints a summary of the shirt size and the message on it.
    size: the size of the shirt (default is 'large')
    text: the message printed on the shirt (default is 'I love Python')
    """
   
    print(f"The size of the shirt is {size} and the text is {text}.")


# Call the function in different ways
make_shirt()

make_shirt("medium")

make_shirt("small", "Custom message")

make_shirt(size="extra large", text="Hello, World!")

#  Exercise 6: Magicians…

import random  

# Create a list of magician names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(names):
   
    for name in names:
        print(name)  

def make_great(names):
   
    for i in range(len(names)):
       
        names[i] = names[i] + " the Great"

# Modify the list and display the new magician names
make_great(magician_names)  
show_magicians(magician_names)

# Exercise 7: Temperature Advice

def get_random_temp():
  
    month = int(input("Enter the month number (1-12): "))  
    if month in [12, 1, 2]:  
        temp = random.uniform(-10, 10)
    elif month in [3, 4, 5]: 
        temp = random.uniform(5, 20)
    elif month in [6, 7, 8]:  
        temp = random.uniform(20, 35)
    else:  
        temp = random.uniform(5, 25)
    return temp  

# Main function to display temperature and advice
def main():
    temperature = get_random_temp()  
    print(f"The temperature right now is {temperature:.1f} degrees Celsius.")  

    # Give advice based on temperature
    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= temperature < 16:
        print("Quite chilly! Don't forget your coat.")
    elif 16 <= temperature < 24:
        print("Nice weather.")
    elif 24 <= temperature < 32:
        print("A bit warm, stay hydrated.")
    else:  # 32 to 40
        print("It's really hot! Stay cool.")

main()


# Exercises XP Gold

# Exercise 1 : When will I retire ?

#  Function to calculate age
def get_age(year, month, day):
    
    current_year = 2025
    current_month = 11
   
    age = current_year - year
    
    if month > current_month:
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    
    year, month, day = map(int, date_of_birth.split("/"))
   
    age = get_age(year, month, day)
    
    if gender.lower() == "m":
        retirement_age = 67
    elif gender.lower() == "f":
        retirement_age = 62
    else:
        print("Invalid gender! Please enter 'm' or 'f'.")
        return False
    
    if age >= retirement_age:
        return True
    else:
        return False

user_gender = input("Enter your gender (m/f): ")
user_dob = input("Enter your date of birth (yyyy/mm/dd): ")

if can_retire(user_gender, user_dob):
    print("You can retire!")
else:
    print("You cannot retire yet.")


# Exercise 2 : Sum

# Define the function with one parameter X
def sum_repeated(X):
    
    str_X = str(X)
    
    X1 = int(str_X * 1)  
    X2 = int(str_X * 2)  
    X3 = int(str_X * 3)  
    X4 = int(str_X * 4)  
    
    result = X1 + X2 + X3 + X4
    
    # Step 4: Return the result
    return result

# Step 5: Test the function
print(sum_repeated(3))  # Expected output: 3702

# Exercise 3 : Double Dice

import random 

# Function to simulate a single dice roll
def throw_dice():
   
    return random.randint(1, 6)

# Function to roll two dice until we get doubles
def throw_until_doubles():
    count = 0  
    while True:
      
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1  
       
        if dice1 == dice2:
            break  
    return count  

# Main function to run the simulation 100 times
def main():
    results = []  
    for _ in range(100):  
        rolls = throw_until_doubles() 
        results.append(rolls)  

    total_throws = sum(results)  
    average_throws = total_throws / len(results)  
    average_throws = round(average_throws, 2)  

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")

if __name__ == "__main__":
    main()

# Timed Challenge #1

#  Ask the user for a string
my_string = input("Enter a string: ")  

my_char = input("Enter a character: ")  

count = 0

#  Loop through each character in the string
for char in my_string:
    
    if char == my_char:
        count += 1  

print("The character", my_char, "appears", count, "times in the string.")


# Exercises XP Ninja

# Exercise 1 : What’s your name ?

# Define the function
def get_full_name(first_name, last_name, middle_name=""):
    """
    This function returns a full name.
    middle_name is optional. If not provided, only first and last name are used.
    """
    
    # Check if middle_name is given
    if middle_name:  
       
        full_name = first_name.title() + " " + middle_name.title() + " " + last_name.title()
    else:
    
        full_name = first_name.title() + " " + last_name.title()
    
    return full_name


print(get_full_name(first_name="john", middle_name="hooker", last_name="lee")) 
print(get_full_name(first_name="bruce", last_name="lee")) 


# Exercise 2 : From English to Morse

# Create dictionary for English to Morse code
english_to_morse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    ' ': '/'  
}

#  Reverse the dictionary for Morse to English conversion
morse_to_english = {value: key for key, value in english_to_morse.items()}

# Function to convert English to Morse
def english_to_morse_code(text):
    text = text.upper()  
    morse_code = []
    for char in text:
        if char in english_to_morse:
            morse_code.append(english_to_morse[char])
    return ' '.join(morse_code)  

# Function to convert Morse to English
def morse_to_english_code(morse):
    words = morse.split(' / ')  
    decoded_text = []
    for word in words:
        letters = word.split()  
        decoded_word = ''.join(morse_to_english[letter] for letter in letters)
        decoded_text.append(decoded_word)
    return ' '.join(decoded_text)  

# Test the functions
english_text = "HELLO WORLD"
morse_text = english_to_morse_code(english_text)
print("English to Morse:", morse_text)

decoded_text = morse_to_english_code(morse_text)
print("Morse to English:", decoded_text)


# Exercise 3 : Box of stars


# Function definition: box_printer accepts any number of string arguments
def box_printer(*args):
    #  Find the length of the longest word
    
    max_length = len(max(args, key=len))
    
    #  Print the top border of the box
    
    print('*' * (max_length + 2))
    
    # Print each word in its own line, padded with spaces
    for word in args:
       
        print('*' + word.ljust(max_length) + '*')
       
    
    # Print the bottom border (same as top)
    print('*' * (max_length + 2))


box_printer("Hello", "World", "in", "reallylongword", "a", "frame")


# Exercise 4 : What is the purpose of this code?

# Define the insertion sort function
def insertion_sort(alist):
    
    for index in range(1, len(alist)):
        currentvalue = alist[index]  
        position = index            

        while position > 0 and alist[position-1] > currentvalue:
            alist[position] = alist[position-1]  
            position = position - 1              

    
        alist[position] = currentvalue

alist = [54,26,93,17,77,31,44,55,20]

insertion_sort(alist)

# Print the sorted list
print(alist)  

