# Daily Challenge: Coffee Shop Menu Manager

# Coffee Shop Menu Manager

# Function to show the menu
def show_menu(menu_dict):
    """Print all drinks and their prices."""
    if not menu_dict:
        print("The menu is empty.")
    else:
        print("Current menu:")
        for drink, price in menu_dict.items():
            print(f"{drink} - {price}₪")

# Function to add a new item
def add_item(menu_dict):
    """Add a new drink to the menu."""
    drink = input("Enter new drink name: ").strip()
    if drink in menu_dict:
        print("Item already exists!")
    else:
        try:
            price = float(input("Enter price: "))
            menu_dict[drink] = price
            print(f'"{drink}" added!')
        except ValueError:
            print("Invalid price. Please enter a number.")

# Function to update an existing price
def update_price(menu_dict):
    """Change the price of an existing drink."""
    drink = input("Which drink do you want to update? ").strip()
    if drink in menu_dict:
        try:
            price = float(input("Enter the new price: "))
            menu_dict[drink] = price
            print("Price updated!")
        except ValueError:
            print("Invalid price. Please enter a number.")
    else:
        print("Item not found.")

# Function to delete a drink
def delete_item(menu_dict):
    """Remove a drink from the menu."""
    drink = input("Which drink do you want to delete? ").strip()
    if drink in menu_dict:
        del menu_dict[drink]
        print("Item deleted.")
    else:
        print("Item not found.")

# Function to show options
def show_options():
    """Print the available actions."""
    print("What would you like to do?")
    print("1. Show menu")
    print("2. Add item")
    print("3. Update price")
    print("4. Delete item")
    print("5. Exit")

# Main program loop
def run_coffee_shop():
    """Main loop of the program."""
    menu = {
        "espresso": 7.0,
        "latte": 12.0,
        "cappuccino": 10.0
    }

    while True:
        show_options()
        choice = input("> ").strip()

        if choice == "1":
            show_menu(menu)
        elif choice == "2":
            add_item(menu)
        elif choice == "3":
            update_price(menu)
        elif choice == "4":
            delete_item(menu)
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice, try again.")

# Start the program
run_coffee_shop()

# Daily challenge Gold: Solve the Matrix

# The given matrix string
MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

#  Convert the string to a 2D list (matrix)
matrix = [list(line) for line in MATRIX_STR.splitlines() if line]

#  Read the matrix column by column
columns = []
for col_index in range(len(matrix[0])): 
    column_chars = []
    for row in matrix:  
        column_chars.append(row[col_index])  
    columns.append(column_chars)  

decoded_message = ""
import re 
for col in columns:
    temp_str = "".join(col)  
    temp_str = re.sub(r'[^a-zA-Z]+', ' ', temp_str)  
    decoded_message += temp_str + " " 

decoded_message = decoded_message.strip()  

print(decoded_message)  
