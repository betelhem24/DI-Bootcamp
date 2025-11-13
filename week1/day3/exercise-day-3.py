# Exercises XP
# Exercise 1: Converting Lists into Dictionaries

# The two given list

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

keys_values = dict(zip(keys, values))
print(keys_values)


#  Exercise 2: Cinemax #2
# This program calculates the total cost of movie tickets for a family
# based on their ages.

# Step 1: Create a dictionary with family members and their ages
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# Step 2: Create a variable to keep track of total cost
total_cost = 0

# Step 3: Loop through each family member (name and age)
for name, age in family.items():  # .items() gives both key and value
    # Step 4: Decide ticket price based on age
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    # Step 5: Print how much each person pays
    print(f"{name.capitalize()} has to pay ${ticket_price}")

    # Step 6: Add ticket price to total cost
    total_cost += ticket_price

# Step 7: After the loop, print the total cost
print(f"\nTotal cost for the family is: ${total_cost}")

#  Bonus

family = {}

num_members = int(input("How many family members? "))


for i in range(num_members):
    name = input(f"Enter name for person {i + 1}: ")
    age = int(input(f"Enter age for {name}: "))
    family[name] = age  # Store in dictionary


total_cost = 0

for name, age in family.items():
    if age < 3:
        ticket_price = 0
    elif 3 <= age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    print(f"{name.capitalize()} has to pay ${ticket_price}")
    total_cost += ticket_price

print(f"Total cost for the family is: ${total_cost}")



# Exercise 3: Zara
# Create the 'brand' dictionary with all given information
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print("Zara offers clothes for", ", ".join(brand["type_of_clothes"]) + ".")

# Add a new key 'country_creation' with value 'Spain'
brand["country_creation"] = "Spain"


if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Delete the 'creation_date' key
brand.pop("creation_date")

print("The last international competitor is:", brand["international_competitors"][-1])

print("The major colors in the US are:", brand["major_color"]["US"])

print("Number of keys in the brand dictionary:", len(brand))

print("All keys in the brand dictionary:", brand.keys())

# BONUS PART
# Create another dictionary called 'more_on_zara'
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print("Updated brand dictionary after merging:")
print(brand)

# Exercise 4: Disney Characters


# Create a list of Disney characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1 Dictionary: Character → Index

dict1 = {name: index for index, name in enumerate(users)}

# Print result
print("1. Characters to Indices:")
print(dict1)
print()  # just adds a blank line


# 2 Dictionary: Index → Character

dict2 = {index: name for index, name in enumerate(users)}

print("2. Indices to Characters:")
print(dict2)
print()

# 3 Dictionary: Alphabetically sorted Characters → New Indices

sorted_users = sorted(users)

dict3 = {name: index for index, name in enumerate(sorted_users)}

print("3. Alphabetically Sorted Characters to Indices:")
print(dict3)


# Exercises XP Gold
# Exercise 1: Birthday Look-up


# Create a dictionary with 5 people's birthdays
#  key(name) and value (birthday "YYYY/MM/DD" format)

birthdays = {
    "Liam": "1994/03/22",
    "Sophia": "1999/08/10",
    "Noah": "1988/12/05",
    "Olivia": "1996/04/18",
    "Diana": "2001/10/27"
}

print("Welcome to the Birthday Look-up program!")
print("You can look up the birthdays of the people in the list!")

name = input("Whose birthday do you want to look up? ")

if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    print(f"Sorry, I don’t have the birthday information for {name}.")


# Exercise 2: Birthdays Advanced

# Create a dictionary with names and birthdays
birthdays = {
    "Merry": "April 5, 1995",
    "David": "June 17, 1992",
    "Roze": "December 3, 1989"
}

print("Here are the names we have birthday information for:")
for name in birthdays:
    print(name)  

person = input("Whose birthday do you want to look up? ")

if person in birthdays:
    print(f"{person}'s birthday is {birthdays[person]}.")
else:
    print(f"Sorry, we don’t have the birthday information for {person}.")


    # Exercise 3: Add Your Own Birthday

    birthdays = {
    "Roze": "1999/05/14",
    "Bob": "2001/08/23",
    "Charlie": "1995/12/30"
}

#  Ask the user to add a new birthday

name = input("Enter a new person's name: ")
birthday = input("Enter their birthday (YYYY/MM/DD): ")

birthdays[name] = birthday

person = input("Whose birthday do you want to look up? ")

if person in birthdays:
    print(f"{person}'s birthday is {birthdays[person]}")

else:
    print(f"Sorry, I don't have {person}'s birthday.")


 # Exercise 4: Fruit Shop

# This dictionary stores all the items and their prices 

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

for fruit, price in items.items(): 
    print(f"The price of {fruit} is ${price}")  


# Dictionary with the price and the amount of items in stock

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total_cost = 0

for fruit, data in items.items():  
    price = data["price"]  
    stock = data["stock"]  
    cost = price * stock   
    print(f"{fruit}: ${price} x {stock} = ${cost}")  
    total_cost += cost  

print(f"\nThe total cost to buy everything in stock is: ${total_cost}")


# Exercises XP Ninja
# Exercise 1 : Cars

car_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert the string into a list using split()
car_list = car_string.split(", ")   

print("There are", len(car_list), "manufacturers in the list.")

reverse_sorted = sorted(car_list, reverse=True)
print("Manufacturers in reverse (Z-A):", reverse_sorted)

# Count how many manufacturers' names have the letter 'o'
with_o = [name for name in car_list if 'o' in name.lower()]  
print("Number of manufacturers with the letter 'o':", len(with_o))


without_i = [name for name in car_list if 'i' not in name.lower()]
print("Number of manufacturers without the letter 'i':", len(without_i))

# BONUS PART
# List with duplicates
duplicate_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

unique_companies = list(set(duplicate_list))

print("Companies without duplicates:", ", ".join(unique_companies))
print("There are", len(unique_companies), "unique companies now.")

sorted_companies = sorted(unique_companies) 
reversed_names = [name[::-1] for name in sorted_companies] 
print("Manufacturers A–Z with reversed names:", reversed_names)

# Timed Challenge #1

# Ask the user to enter a sentence
sentence = input("Enter your sentence: ")

words = sentence.split()

reversed_words = words[::-1]

reversed_sentence = ' '.join(reversed_words)

print(reversed_sentence)

# Timed Challenge #2

# Ask the user for a number and store it in variable 'x'
x = int(input('Enter the Number: '))

# Initialize a variable to store the sum of divisors
sum_of_divisors = 0

for i in range(1, x):
    
    if x % i == 0:
        
        sum_of_divisors += i

# After the loop, check if the sum of divisors equals the number itself
if sum_of_divisors == x:
    print(True)  
else:
    print(False) 

    