#  Exercise 3: String module

import string  # For letters
import random  # For random choice

all_letters = string.ascii_letters  # All uppercase and lowercase letters
random_string = ""  # Start with empty string

for i in range(5):  # Loop 5 times
    random_string += random.choice(all_letters)  # Add a random letter

print(random_string)  # Show the random string
