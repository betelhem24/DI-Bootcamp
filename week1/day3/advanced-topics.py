#LOOPS OPERATORS

#syntax of a for loop:

#for <variable> in <sequence>:
#   an indented block of code (will happen within each iteration)

#range() - helps us to create a sequence of numbers

for num in range(11): #range(start=0, stop, step=1)
    print(num)

#enumerate() - gives as a tuple with index and item
student_info1 = ['Harry', 'Potter', 15, 'Privet Drive, 4', 'Hedwig', 'Buckbeak']


student_info1[0] = student_info1[0].lower()
#lets change the items that are string to lowercase
for i, item in enumerate(student_info1): #using enumerate() we have access to both: index and item
    if type(item) == str: #we check if the item is string type
        student_info1[i] = item.lower() #we reasign the item to its lowercase version

print(student_info1)


#not for loop related: just useful in general:
# zip() - can be used with any type of sequence

names = ('Juliana', 'Jeremy', 'Avner', 'Sonia')
cities = ['Ramat Gan', 'Modiin', 'Ranana', 'Tel Aviv', 'Jerusalem', 'Rehovot']

#names_cities = {'Juliana':'Ramat Gan'} - to do that we can use zip()

names_cities = dict(zip(cities, names))
print(names_cities)

my_dict = dict(name = 'Juliana', age = 35, city = 'Ramat Gan')
print(my_dict)



"""------------------------------------------------------------------------------------------"""

#copy dict and wallet from the platform

# items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
# wallet = "$300"

# items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
# wallet = "$100"

items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet = "$1"

#clean the data (prices and wallet)
cleaned_wallet = int(wallet.replace('$', ''))

#create an empty list called basket
basket = []

for item, price in items_purchase.items():
    cleaned_price = int(price.replace('$', '').replace(',', ''))
    if cleaned_price <= cleaned_wallet:
        basket.append(item)
        cleaned_wallet -= cleaned_price
    else:
        continue

if basket:
    print(sorted(basket))
else:
    print('nothing')

#check if the item is affordable (check the price):
# - if it is, add to the basket and take the price from the wallet
# - if not, skip it
# if we can't buy anything: print 'nothing'
# if we can buy something: print the basket in alphabetical order

