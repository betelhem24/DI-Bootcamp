# Exercises XP Gold
# Exercise 1 : Upcoming Holiday

import datetime  # for working with dates

def upcoming_holiday():  # function to show today + next holiday
    today = datetime.date.today()  # get today's date

    # list of holidays and their dates
    holidays = {
        "New Year's Day": datetime.date(today.year, 1, 1),
        "Independence Day": datetime.date(today.year, 7, 4),
        "Halloween": datetime.date(today.year, 10, 31),
        "Christmas": datetime.date(today.year, 12, 25)
    }

    upcoming = []  # will store all holidays that haven't passed yet

    for name, date in holidays.items():  
        if date >= today:  
            upcoming.append((name, date))

    upcoming.sort(key=lambda x: x[1])  

    next_holiday_name, next_holiday_date = upcoming[0]  
    days_left = (next_holiday_date - today).days  

    print("Today's date is:", today)
    print("The next holiday is", next_holiday_name, "in", days_left, "days.")

upcoming_holiday()  


# Exercise 2 : How Old Are You On Jupiter?

# Number of seconds the person has lived
age_in_seconds = 1000000000

# Seconds in one Earth year
seconds_in_earth_year = 31557600

# Age on Earth
age_on_earth = age_in_seconds / seconds_in_earth_year

# Ages on each planet (using their orbital periods)
age_on_mercury = age_on_earth / 0.2408467
age_on_venus = age_on_earth / 0.61519726
age_on_mars = age_on_earth / 1.8808158
age_on_jupiter = age_on_earth / 11.862615
age_on_saturn = age_on_earth / 29.447498
age_on_uranus = age_on_earth / 84.016846
age_on_neptune = age_on_earth / 164.79132

# Print the results
print("Age on Earth:", age_on_earth)
print("Age on Mercury:", age_on_mercury)
print("Age on Venus:", age_on_venus)
print("Age on Mars:", age_on_mars)
print("Age on Jupiter:", age_on_jupiter)
print("Age on Saturn:", age_on_saturn)
print("Age on Uranus:", age_on_uranus)
print("Age on Neptune:", age_on_neptune)


# Exercise 3 : Regular Expression #1

# import the regular expression module so we can use its functions
import re  

def return_numbers(text): 
    numbers = re.findall(r'\d', text)  
    joined_numbers = ''.join(numbers)  
    return joined_numbers  

# Example use
print(return_numbers('k5k3q2g5z6x9bn'))  


# Exercise 4 : Regular Expression #2

# importing the regular expression module
import re  


full_name = input("Enter your full name (Example: John Doe): ")

pattern = r'^[A-Z][a-z]+ [A-Z][a-z]+$'


if re.match(pattern, full_name):
    print("Valid name!")  
else:
    print("Invalid name. Make sure you use only letters, one space, and capitalize both names.")

# Exercise 5: Python Password Generator


# PASSWORD GENERATOR PROGRAM

import random  
import string   

# FUNCTION: generate_password
# This function creates a password with the required length

def generate_password(length):
    # characters we can use
    digits = string.digits                    
    lowercase = string.ascii_lowercase        
    uppercase = string.ascii_uppercase         
    special = "!@#$%^&*_-+=?"                  

    # we make sure to include at least one of each type
    password_chars = [
        random.choice(digits),                 
        random.choice(lowercase),              
        random.choice(uppercase),              
        random.choice(special)                
    ]

    # now we combine all character options into one big string
    all_characters = digits + lowercase + uppercase + special

    # fill the rest of the password until it reaches the required length
    for _ in range(length - 4):               
        password_chars.append(random.choice(all_characters))   

    random.shuffle(password_chars)             

    return "".join(password_chars)            


# FUNCTION: test_password
# This ensures a password meets all requirements

def test_password(password, expected_length):
    # check length
    if len(password) != expected_length:
        return False

    # checks for at least one of each required type
    has_digit = any(char.isdigit() for char in password)
    has_lower = any(char.islower() for char in password)
    has_upper = any(char.isupper() for char in password)
    has_special = any(char in "!@#$%^&*_-+=?" for char in password)

    # return True only if all requirements are met
    return has_digit and has_lower and has_upper and has_special


# MAIN PROGRAM: ask user for password length

while True:  
    user_input = input("Enter password length (6 to 30): ")  

    if user_input.isdigit():                
        length = int(user_input)          
        if 6 <= length <= 30:                
            break                           
        else:
            print("Number must be between 6 and 30.")
    else:
        print("Please enter a valid number.")


# generate the password with the valid length
final_password = generate_password(length)

# show password to the user
print("\nYour generated password is:", final_password)
print("Keep it in a safe place!\n")


# RUN TESTS 100 TIMES
print("Running 100 tests to ensure password generator works...")

all_tests_passed = True   

for i in range(100):         
    test_length = random.randint(6, 30)     
    pwd = generate_password(test_length)    
    if not test_password(pwd, test_length): 
        print("Test failed for password:", pwd)
        all_tests_passed = False
        break                               

if all_tests_passed:
    print("All 100 tests passed successfully!")

