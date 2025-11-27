#OOP - OBJECT ORIENTED PROGRAMING

#HOW TO CREATE A CLASS OF OBJECTS

class Dog:
    def __init__(self, name, color, breed, age, is_trained = True): #the constructor function 
        self.name = name
        self.color = color
        self.breed = breed
        self.age = age
        self.is_trained = is_trained

    def bark(self): #function > method
        print(f'{self.name} goes Woof Woof\n'*self.age)




    def run(self):
        if self.age > 5:
            print(f'{self.name} prefers to walk.')
        else:
            print(f"{self.name} is running.")

    def walk(self, person):
        print(f'{person} is walking {self.name}')

    def rename(self, new_name):
        self.name = new_name
        return self   

    

#create a method called run() that checkes the dog's age and if the dog is older than 5 you print "dog.name" prefers to walk. else you print c  
# then call the method on dog2 

#HOW TO CREATE AN OBJECT OF A SPECIFIC CLASS
dog1 = Dog('Rex', 'black', 'german shepherd', 8, True)
print(type(dog1))

# #accessing the attributes of a dog:
# print(dog1.name)
# print(dog1.age)
# print(dog1.is_trained)
print(dog1.__dict__)

# dog1.guidance_dog = True
# print(dog1.guidance_dog)

# #create a second object of class Dog, call it dog2 and you choose the attributes
# dog2 = Dog('Muchtar', 'grey', 'german shepherd', 1, False)
# print(dog2.age)
# print(dog2.__dict__)

# #CALL THE METHOD: in order to call a method we need to use the object
dog1.bark()
Dog.bark(dog1)
# dog2.bark()

# dog1.run()
# dog2.run()

# dog2.walk('John')
# dog2.rename('Toto')
# print(dog2.name)
# print(dog2.__dict__)

# create a class called BankAccount, with 3 attributes:
#- account houlder = name + last name of a person
#- account number = random number
#- balance which starts with 50.00 (float)



""" -----------------------------------------------------------------------------------------------------------"""

# create a class called BankAccount, with 3 attributes:
#- account houlder = name + last name of a person
#- account number = random number
#- balance which starts with 50.00 (float)
import datetime

class BankAccount:

    def __init__(self, houlder, acc_number, balance = 50.00):
        self.houlder = houlder
        self.acc_number = acc_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append(f'{datetime.datetime.now()} --- view_balance')
        report = f'''account holder: {self.houlder}
                account number: {self.acc_number}
                balance: {self.balance}'''
        print(report)

    def deposit(self, amount):
        self.transactions.append(f'{datetime.datetime.now()} --- deposit {amount}')
        if amount <= 0:
            print('invalid amount')
        else:
            self.balance += amount

        self.view_balance()
        return self.balance

    def withdraw(self, amount):
        self.transactions.append(f'{datetime.datetime.now()} --- withdraw {amount}')
        if amount <= 0:
            print('invalid amount')
        elif self.balance < amount:
            print('You dont have enouph money')
        else:
            self.balance -= amount

        self.view_balance()
        return self.balance
    
    def view_transactions(self):
        for transaction in self.transactions:
            print(transaction)
    

#creating the first account on BankAccount
acc1 = BankAccount('Juliana Schmidt', '1234567')
acc1.view_balance() #50
acc1.deposit(500)
acc1.withdraw(700)
acc1.view_transactions()
# acc1.view_balance()

#create a new attribute called transactions. it is a list.


"""---------------------------------------------------------------------------------------------------------"""


class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
    

    def add_animal(self, *new_animal):
        if new_animal:
            for each_animal in new_animal:
                if each_animal not in self.animals:
                    self.animals.append(each_animal)
                else:
                    print(f'{each_animal} already exist in the zoo')
        print(', '.join(self.animals))


ny_zoo = Zoo('New York Zoo')
ny_zoo.add_animal('Elephant', 'Emma', 'Appe') #use *args for that
# ny_zoo.add_animal('Emma')
# ny_zoo.add_animal('Appe')
ny_zoo.add_animal('Avestruz')
ny_zoo.add_animal('Emma')


#for the daily challenge: refactor your code to be able to do this:
macdonald.add_animal(cow = 5, sheep = 2, goat = 12)