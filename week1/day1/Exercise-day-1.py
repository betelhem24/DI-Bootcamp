#Exercises XP


#Exercise 1: Hello World
print("Hello, world\n" * 4)
#Exercise 2: Some Math
#calculate (99^3)*8
result = (99 * 3) * 8
print(result)
#Exercise 3: What is the output?
print(5 < 3) 
print(3==3)
print(int("3") > 3) 
print("Hello"== "hello")
#Exercise 4: Your computer brand
#Create a variable called 
computer_brand = "Dell"
print(f"I have a {computer_brand} computer.")
#Exercise 5: Your information
name = "betelhem"
age = 28
shoe_size =  37
info = f"My name is {name}, I am {age} years old, and my shoe size is {shoe_size}."
print(info)
#Exercise 6: A & B
# Create two variables, a and b.
a = 16
b = 4

# Check if a is bigger than b
if a > b:
    print("Hello World")

#Exercise 7: Odd or Even
# Ask the user for a number
number = int(input("Enter a number: "))

# Check if the number is even or odd
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.")

#Exercise 8: What’s your name?
my_name ="Betelhem"
user_name = input("What's your name? ")
if user_name == my_name:
    print(f"Wow! We have the same name, {user_name}! what a concidence!")
else:
    print(f"Nice to meet you, {user_name}! My name is {my_name}.")
#Exercise 9: Tall enough to ride a roller coaster

# Ask the user for their height in centimeters
height = int(input("Enter your height in centimeters: "))

# Check if the height is more than 145 cm
if height > 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("Sorry, you need to grow some more to ride.")

#Exercises XP Gold


print(("Hello world\n" *4) + ("I love python\n" * 4))

#Exercise 2 : What is the Season ?
# Ask the user to enter a month number
month = int(input("Enter a month number (1 to 12): "))

# Check which season the month belongs to
if month >= 3 and month <= 5:
    print("It's Spring!")
elif month >= 6 and month <= 8:
    print("It's Summer!")
elif month >= 9 and month <= 11:
    print("It's Autumn!")
elif month == 12 or month == 1 or month == 2:
    print("It's Winter!")
else:
    print("Invalid month. Please enter a number between 1 and 12.")

#Exercises XP Ninja


#Exercise 1 : Use the terminal

#Exercise 2 : Alias





#Exercise 3 : Outputs

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)


#Exercise 4 : How many characters in a sentence ?

my_text = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
           "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
           "Ut enim ad minim veniam, quis nostrud exercitation ullamco "
           "laboris nisi ut aliquip ex ea commodo consequat. "
           "Duis aute irure dolor in reprehenderit in voluptate velit "
           "esse cillum dolore eu fugiat nulla pariatur. "
           "Excepteur sint occaecat cupidatat non proident, "
           "sunt in culpa qui officia deserunt mollit anim id est laborum.")

print(len(my_text))

#Exercise 5: Longest word without a specific character
longest_sentence = ""  

while True:
    sentence = input("Enter a sentence without the letter 'A': ")

    if "a" in sentence.lower():
        print("Oops! Your sentence contains 'A'. Try again.")
        continue  
    
    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! That's the new longest sentence without 'A'.")
    else:
        print("Good, but not longer than the current longest sentence.")




