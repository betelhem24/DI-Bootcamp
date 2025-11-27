#*ARGS AND **KWARGS (JUST ARGUMENTS, KEY WORD ARGUMENT)

friends = ['Ross', 'Rachel', 'Monica', 'Joey', 'Chandles', 'Phoebe']

def how_you_doing(*args):
    if args:
        for name in args:
            print(f'{name}, how you doing?')
    
      
print(how_you_doing())

def user_info(**kwargs):
    print(kwargs)
    for value in kwargs.values():
        print(value)

user_info(name = 'Ross', last_name = 'Geller', age = 35, has_children = True, cheat_Rachel = True)

"""----------------------------------------------------------------------------------------"""

# Coffee Shop Menu Manager

# Initial data
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def show_menu(menu_dict):
    """Print all drinks and prices."""
    for item, price in menu_dict.items():
        print(f'{item} - {price}₪')


def add_item(menu_dict):
    """Add a new drink to the menu."""
    item = input('Enter the item name: ')
    if item in menu_dict:
        print('Item already exists!')
    else:
        price = float(input('Enter the price with decimal: '))
        menu_dict[item] = price
        print('Item was added to the menu')

def update_price(menu_dict):
    """Change the price of an existing drink."""
    item = input('Which item you would like to update?')
    if item in menu_dict:
        price = float(input('Enter the new price: '))
        menu_dict[item] = price
        print(f'{item} price was updated')
    else:
        print('item is not on the menu')


def delete_item(menu_dict):
    """Remove a drink from the menu."""
    item = input('Which item you would like to delete?')
    if item in menu_dict:
        del menu_dict[item]
        print('item was deleted')
    else:
        print('item is not on the menu')


def show_options():
    """Print the available actions."""
    options = '''What would you like to do?
                1. Show menu
                2. Add item
                3. Update price
                4. Delete item
                5. Exit'''
    print(options)


def run_coffee_shop(menu):
    """Main loop of the program."""

    while True:
        show_options()
        choice = input('What would you like to do?')

        if choice == '1':
            show_menu(menu)
        elif choice == '2':
            add_item(menu)
        elif choice == '3':
            update_price(menu)
        elif choice == '4':
            delete_item(menu)
        elif choice == '5':
            print('Goodbye!')
            break
        else:
            print("Invalid choice, try again.")

# Start the program
run_coffee_shop(menu)

"""----------------------------------------------------------------------------------------"""

#FUNCTIONS

#syntax of a function:

#def <name_of_function>(empty/<arguments>):
#   an indented block of code

#call the function by the name of it

# def greetings():
#     print('Welcome, user!')

# greetings()

# #arguments in functions
# def greetings(user_name):
#     print(f'Welcome, {user_name}!')

# greetings('Gandalf')

# #default arguments 
# def greetings(user_name = 'John Doe'):
#     print(f'Welcome, {user_name}!')

# greetings('Frodo')

#positional argument = the position that you enter the argument, matters
# def greetings(user_name, language = 'EN'):
#     language == 'EN'
#     print(f'Welcome, {user_name}!')
#     if language == 'PT':
#         print(f'Bem-vindo, {user_name}!')
#     elif language == 'IT':
#         print(f'Benvenuto, {user_name}!')
#     elif language == 'RU':
#         print(f'Privet, {user_name}')

# greetings('Aragorn', 'JP')

#keyword arguments
def greetings(user_name, language = 'EN'):
    
    if language == 'PT':
        print(f'Bem-vindo, {user_name}!')
    elif language == 'IT':
        print(f'Benvenuto, {user_name}!')
    elif language == 'RU':
        print(f'Privet, {user_name}')
    else:
        print(f'Welcome, {user_name}!')


greetings(language = 'JP', user_name = 'Aragorn')

#mixed (keyword + positional argument)= the keyword argument must be before the positional argument

def greetings(user_name, language = 'EN'):
    language == 'EN'
    print(f'Welcome, {user_name}!')
    if language == 'PT':
        print(f'Bem-vindo, {user_name}!')
    elif language == 'IT':
        print(f'Benvenuto, {user_name}!')
    elif language == 'RU':
        print(f'Privet, {user_name}')

greetings('Aragorn',language = 'RU')

# create a function called country_info that receives a country name as argument
# and prints the capital of that country. Make the country name argument default
# Naboo (star wars planet). Its capital is Theed


def country_info(country = 'Naboo'):
    if country == 'Russia':
        capital = 'Moscow'

    elif country == 'USA':
        capital = 'Washington DC'

    elif country == 'Brazil':
        capital = 'Brasilia' 

    elif country == 'Naboo':
        capital = 'Theed'  

    return capital

print(country_info('Brazil'))

def sum_numbers(x, y):
    result = x + y
    return result

def multiply(j):
    multiplier = sum_numbers(3, 2)
    result = j * multiplier
    return result

print(multiply(4))

#using the return keyword

"""----------------------------------------------------------------------------------------"""


import random

def compare_num(user_num):
    computer_num = random.randint(1, 100)
    if user_num == computer_num:
        print('Success!')
    else:
        print(f'{computer_num}, Fail')

compare_num(55)

def get_random_temp():
    temp = random.randint(-10, 40)
    return temp

def main():
    temp = get_random_temp()
    if temp < 0:
        print('Brrr, that\'s freezing! Wear some extra layers today.')


"""----------------------------------------------------------------------------------------"""

#SCOPES: GLOBAL AND LOCAL

# fav_movie = 'Interstellar' #global scope

# def movie_recomendation(fav_movie):
#     recomend = 'Lost in Mars' #local scope
#     return recomend

# print(movie_recomendation(fav_movie))
# print(fav_movie)


#global variables can be consulted from the local scope, but not changed

savings = 500

def buy_stuff(amount):
    # global savings
    savings -= 100
    # print(savings)
    if amount <= savings:
        return True
    else:
        return False
    
print(buy_stuff(401))