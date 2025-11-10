# Daily Challenge : Lists & Strings
# Challenge 1: Multiples of a Number

# Get user input
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))

multiples = []

for i in range(1, length + 1):
    multiples.append(number * i)

print("The list of multiples is:", multiples)


# Challenge 2: Remove Consecutive Duplicate Letters

#  Ask the user for a string
user_input = input("Enter a string: ")

new_string = ""

for letter in user_input:
   
    if len(new_string) == 0 or letter != new_string[-1]:
        new_string += letter

print("String after removing consecutive duplicates:", new_string)


#  Daily challenge GOLD : Happy birthday

from datetime import date

birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
day, month, year = map(int, birthdate.split("/"))

current_year = date.today().year
age = current_year - year
last_digit_of_age = age % 10

is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)


candles = "i" * last_digit_of_age
cake = f"""
       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""


if is_leap:
    print(cake)
    print(cake)
else:
    print(cake)
