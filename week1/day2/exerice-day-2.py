#Exercises XP
#Exercise 1: Favorite Numbers

my_fav_numbers = {2, 7, 16}

my_fav_numbers.add(1)
my_fav_numbers.add(21)

my_fav_numbers.remove(1)

friend_fav_numbers = {12, 4, 9}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("My friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)

#Exercise 2: Tuple

# note: while i run the following code i got an out put of:AttributeError: 'tuple' object has no attribute 'append'
# a tuple of integers
# numbers = (1, 2, 3, 4)
# print("Original tuple:", numbers)
# numbers.append(5)

# Create a new tuple by adding another tuple
numbers = (1, 2, 3, 4)

new_numbers = numbers + (5, 6)

print("Old tuple:", numbers)
print("New tuple:", new_numbers)

#Exercise 3: List Manipulation

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
count_apples = basket.count("Apples")
print("Number of Apples:", count_apples)
basket.clear()
print("Final basket:", basket)

#Exercise 4: Floats
# Create an empty list to store numbers
numbers = []

for i in range(3, 11):        

    number = i * 0.5         
    
    numbers.append(number)    

print(numbers)

#Exercise 5: For Loop
for i in range(1, 21):
    print (i)

#every number from 1 to 20 where the index is even
for index, number in enumerate(range(1, 21)):
    if index % 2 == 0:    
        print(number)

#Exercise 6: While Loop

while True:
    name = input("Enter your name: ")
    
    if not name.isdigit() and len(name) >= 3:
        print("Thank you")
        break
    else:
        print("Invalid input. Try again.")

#Exercise 7: Favorite Fruits

favorite_fruits = input("Enter your favorite fruits, separated by spaces: ").split()

fruit = input("Enter the name of any fruit: ")

if fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

#Exercise 8: Pizza Toppings
toppings = []

while True:
    topping = input("Enter a pizza topping (type 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

base_price = 10
topping_price = 2.5
total_cost = base_price + len(toppings) * topping_price

print("\nYour pizza has the following toppings:")
for topping in toppings:
    print("-", topping)

print(f"Total cost: ${total_cost:.2f}")

# 9 Exercise 9: Cinemax Tickets

#Cinemax Tickets

num_people = int(input("How many people are buying tickets? "))

total_cost = 0

for i in range(num_people):
    age = int(input(f"Enter the age of person {i+1}: "))
    
    if age < 3:
        ticket_price = 0
    elif age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    
    total_cost += ticket_price  

print(f"Total ticket cost: ${total_cost}")

# bonus (Teen Restricted Movie)

num_teens = int(input("How many teenagers are in the group? "))

allowed_attendees = []

for i in range(num_teens):
    age = int(input(f"Enter the age of teenager {i+1}: "))
    
    if 16 <= age <= 21:
        allowed_attendees.append(age) 
    else:
        print(f"Age {age} is not allowed to watch this movie.")

print("Final list of attendees:", allowed_attendees)


# Exercises XP Gold
# Exercise 1: Concatenate lists

list1 = [1, 2, 3]
list2 = [4, 5, 6]

# Useing the extend() method to concatenate
list1.extend(list2)

print("Concatenated list:", list1)


#Exercise 2: Range of numbers


for number in range(1500, 2501):
    
    if number % 5 == 0 and number % 7 == 0:
        
        print(number)


#Exercise 3: Check the index

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

if user_name in names:
   
    index_position = names.index(user_name)
    
    print(f"The name {user_name} is found at index {index_position}.")
else:
    
    print(f"Sorry, the name {user_name} was not found in the list.")


#Exercise 4: Greatest Number

num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3rd number: "))

greatest = max(num1, num2, num3)

print("The greatest number is:", greatest)

#Exercise 5: The Alphabet

alphabet = "abcdefghijklmnopqrstuvwxyz"

vowels = "aeiou"

for letter in alphabet:
   
    if letter in vowels:
        print(letter, "is a vowel")
    else:
        print(letter, "is a consonant")

# Exercise 6: Words and letters

words = []

for i in range(7):
    word = input("Enter a word: ")
    words.append(word)

letter = input("Enter a single letter: ")

for word in words:
  
    index = word.find(letter)

    if index != -1:
        print(f"The letter '{letter}' is found in '{word}' at position {index}.")
    else:
        print(f"The letter '{letter}' was not found in the word '{word}'.")

# Exercise 7: Min, Max, Sum


numbers = list(range(1, 1000001))

print("The smallest number is:", min(numbers))

print("The largest number is:", max(numbers))

print("The sum of all numbers is:", sum(numbers))


# Exercise 8 : List and Tuple

numbers = input("Enter comma-separated numbers: ")

list_numbers = numbers.split(",")

tuple_numbers = tuple(list_numbers)

print("List:", list_numbers)
print("Tuple:", tuple_numbers)

# Exercise 9 : Random number


import random  


wins = 0
losses = 0


while True:
   
    user_number = int(input("Enter a number between 1 and 9: "))

   
    random_number = random.randint(1, 9)


    if user_number == random_number:
        print("Winner!")
        wins += 1
    else:
        print(f"Better luck next time. The correct number was {random_number}.")
        losses += 1


    play_again = input("Do you want to play again? (yes/no): ").lower()
    if play_again != "yes":
        break

print("Thanks for playing!")
print("Total wins:", wins)
print("Total losses:", losses)

# Exercises XP Ninja

# Exercise 1: Formula

# to use the square root function
import math  

input_str = input("Enter comma-separated values for D: ")

values = input_str.split(",")

D_values = [int(x) for x in values]

C = 50
H = 30

result = []
for D in D_values:
    Q = math.sqrt((2 * C * D) / H)
    result.append(round(Q))  

print(",".join([str(r) for r in result]))

# Exercise 2 : List of integers

import random

# Create a list of 10 integers
numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]


print("Original list:", numbers)
print("Sorted (descending):", sorted(numbers, reverse=True))
print("Sum of all numbers:", sum(numbers))


first_last = [numbers[0], numbers[-1]]
print("First and last numbers:", first_last)


greater_than_50 = [n for n in numbers if n > 50]
print("Numbers greater than 50:", greater_than_50)


smaller_than_10 = [n for n in numbers if n < 10]
print("Numbers smaller than 10:", smaller_than_10)


squared = [n ** 2 for n in numbers]
print("Numbers squared:", squared)


unique_numbers = list(set(numbers))
print("Numbers without duplicates:", unique_numbers)
print("Count of unique numbers:", len(unique_numbers))


average = sum(numbers) / len(numbers)
print("Average:", average)


print("Largest number:", max(numbers))
print("Smallest number:", min(numbers))


total = 0
largest = numbers[0]
smallest = numbers[0]
for n in numbers:
    total += n
    if n > largest:
        largest = n
    if n < smallest:
        smallest = n
average_manual = total / len(numbers)
print("Manual sum:", total)
print("Manual average:", average_manual)
print("Manual largest:", largest)
print("Manual smallest:", smallest)


random_numbers = [random.randint(-100, 100) for _ in range(10)]
print("Random numbers:", random_numbers)


amount = random.randint(50, 100)
random_list = [random.randint(-100, 100) for _ in range(amount)]
print(f"Generated {amount} random numbers:", random_list)


print("✅ Yes, it still works even if the list is not exactly 10 numbers!")

# Exercise 3: Working on a paragraph

import re


paragraph = "Space exploration helps us better understand our planet, the solar system, and the universe. By studying other worlds, we gain insight into Earth’s history and its possible future."

num_characters = len(paragraph)


sentences = re.split(r'[.!?]+', paragraph)
sentences = [s for s in sentences if s.strip() != ""]
num_sentences = len(sentences)


words = paragraph.split()
num_words = len(words)

words_lower = [w.lower().strip(".,!?") for w in words]
unique_words = set(words_lower)
num_unique_words = len(unique_words)

non_whitespace_chars = len(paragraph.replace(" ", ""))

avg_words_per_sentence = num_words / num_sentences

num_non_unique_words = num_words - num_unique_words

print("Paragraph Analysis:")
print("--------------------")
print(f"Characters (with spaces): {num_characters}")
print(f"Sentences: {num_sentences}")
print(f"Words: {num_words}")
print(f"Unique words: {num_unique_words}")
print(f"Non-whitespace characters: {non_whitespace_chars}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Non-unique words: {num_non_unique_words}")

# Exercise 4 : Frequency Of The Words


text = input("Enter your text: ")

words = text.split()

word_count = {}
for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

for word in sorted(word_count):
    print(f"{word}:{word_count[word]}")

