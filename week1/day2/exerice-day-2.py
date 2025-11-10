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
