# Exercises XP

#  Exercise 1: Random Sentence Generator

# Import random module for random.choice()
import random  

def get_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            words = file.read().split()  
            return words
    except FileNotFoundError:
        print("Error: File not found.")
        return []

def get_random_sentence(length):
    words = get_words_from_file("wordlist.txt")  
    if not words:
        return "No words available to generate a sentence."
    
    sentence_words = [random.choice(words) for _ in range(length)]  
    return " ".join(sentence_words).lower()  

def main():
    print("Welcome! This program generates a random sentence.")
    user_input = input("Enter sentence length (2-20): ")
    
    try:
        length = int(user_input)
        if length < 2 or length > 20:
            print("Error: Number must be between 2 and 20.")
            return
    except ValueError:
        print("Error: Invalid input. Enter an integer.")
        return
    
    sentence = get_random_sentence(length)
    print("Generated sentence:", sentence)

main()


# Exercise 2: Working with JSON

import json  # Import JSON module

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Convert JSON string to dictionary
data = json.loads(sampleJson)  

# Access and print salary
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# Add birth_date key
data["company"]["employee"]["birth_date"] = "1990-05-15"

# Save modified JSON to a file
with open("modified.json", "w") as json_file:
    json.dump(data, json_file, indent=4)


# Exercises XP Gold

# Exercise 1 : Restaurant Menu Manager

# Import requests to fetch data from the web
import requests  

# API variables
search_term = "hilarious"
rating = "g"
api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

# Build the URL
url = f"https://api.giphy.com/v1/gifs/search?q={search_term}&rating={rating}&api_key={api_key}"

# Fetch the data
response = requests.get(url)

if response.status_code == 200:
    data = response.json()  # Convert response to JSON
    # Filter gifs with height > 100 and take first 10
    first_10_gifs = [gif for gif in data['data'] if int(gif['images']['original']['height']) > 100][:10]
    print("Number of gifs:", len(first_10_gifs))
    print(first_10_gifs)  # Show the gifs
else:
    print("Failed to fetch gifs. Status code:", response.status_code)



# Exercise 2 : Giphy API #1

import requests  # Import requests to make HTTP requests

search_query = "hilarious"  # Search term
rating = "g"  # Level 1 gifs
api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"  # Giphy API key

# Build the URL
url = f"https://api.giphy.com/v1/gifs/search?q={search_query}&rating={rating}&api_key={api_key}"

# Fetch data from Giphy
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    
    # Filter gifs with height > 100 and take first 10
    first_10_gifs = [gif for gif in data['data'] if int(gif['images']['original']['height']) > 100][:10]
    
    print("Number of gifs returned:", len(first_10_gifs))
    print(first_10_gifs)
else:
    print("Failed to fetch gifs. Status code:", response.status_code)


# Exercise 3 : Giphy API #2

import requests  # To make HTTP requests

API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

search_term = input("Enter a term or phrase to search for GIFs: ")

# URL for searching GIFs
search_url = f"https://api.giphy.com/v1/gifs/search?api_key={API_KEY}&q={search_term}&limit=5"

response = requests.get(search_url)
data = response.json()

if len(data['data']) > 0:
    print(f"Here are some GIFs for '{search_term}':")
    for gif in data['data']:
        print(gif['url'])
else:
    # Get trending GIFs if search term not found
    trending_url = f"https://api.giphy.com/v1/gifs/trending?api_key={API_KEY}&limit=5"
    trending_data = requests.get(trending_url).json()

    print(f"Could not find GIFs for '{search_term}'. Here are some trending GIFs instead:")
    for gif in trending_data['data']:
        print(gif['url'])


# Exercises XP Ninja


# Exercise 1 : Restaurant Menu Manager - Regular Expressions

import json
import re

# Load or create JSON file
try:
    with open("menu.json", "r") as file:
        menu_data = json.load(file)
except FileNotFoundError:
    menu_data = {"valentine_items": []}

# Get input from manager
item_name = input("Enter the name of the Valentine item: ")
item_price = input("Enter the price (format XX,14): ")

# Validation
name_pattern = r'^V([A-Z][a-z]*|(\s[a-z]+))*$'  # Name rules
count_e = item_name.lower().count('e') >= 2      # At least 2 'e's
contains_number = any(char.isdigit() for char in item_name)
price_pattern = r'^\d{2},14$'

# Add item if valid
if re.match(name_pattern, item_name) and count_e and not contains_number and re.match(price_pattern, item_price):
    menu_data["valentine_items"].append({"name": item_name, "price": item_price})
    print("Item added successfully!")
else:
    print("Invalid item or price! Please follow the rules.")

# Save updated menu
with open("menu.json", "w") as file:
    json.dump(menu_data, file, indent=4)

# Display heart
print("\nHere is a heart for the Valentine menu:\n")
print("  **   **  ")
print(" ****** ****** ")
print("*************")
print(" *********** ")
print("  *********  ")
print("   *******   ")
print("    *****    ")
print("     ***     ")
print("      *      ")




# Exercise 2 : Dungeons & Dragons

import random
import json

# Class to create a character
class Character:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.stats = {}
        self.generate_stats()

    def roll_4d6_drop_lowest(self):
        dice = [random.randint(1, 6) for _ in range(4)]
        dice.sort(reverse=True)
        return sum(dice[:3])

    def generate_stats(self):
        abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
        for ability in abilities:
            self.stats[ability] = self.roll_4d6_drop_lowest()

# Class to manage the game
class Game:
    def __init__(self):
        self.characters = []

    def create_characters(self):
        num_players = int(input("How many players are playing? "))
        for i in range(num_players):
            print(f"\nCreating character for Player {i + 1}")
            name = input("Enter character name: ")
            age = input("Enter character age: ")
            character = Character(name, age)
            self.characters.append(character)

    def export_to_txt(self, filename="characters.txt"):
        with open(filename, "w") as file:
            for char in self.characters:
                file.write(f"Name: {char.name}\n")
                file.write(f"Age: {char.age}\n")
                file.write("Abilities:\n")
                for ability, score in char.stats.items():
                    file.write(f"  {ability}: {score}\n")
                file.write("\n")

    def export_to_json(self, filename="characters.json"):
        data = []
        for char in self.characters:
            data.append({
                "name": char.name,
                "age": char.age,
                "stats": char.stats
            })
        with open(filename, "w") as file:
            json.dump(data, file, indent=4)

# Main program
game = Game()
game.create_characters()
game.export_to_txt()
game.export_to_json()
print("Characters saved to characters.txt and characters.json")
