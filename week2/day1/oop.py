# OOP- OBJECT ORIENTED PROGRAMING
#HOW TO CREATE A CLASS OF OBJECTS



class Dog:
    def __init__(self, name, color, breed, age, is_trained): #the constructor function 
        self.name = name
        self.color = color
        self.breed = breed
        self.age = age
        self.is_trained = is_trained
    def __run__(self):
        print(f'{self.run}if the dog is less than 5')
    



#  HOW TO CREATE AN OBJECT A SECIFIC CLASS

dog2 = Dog('Max', 'golden brown', 'Golden Retriever', '4', 'True' )
# Accessing the altributes of a dog2
print(dog2.name)
print(dog2.color)
print(dog2.breed)
print(dog2.age)
print(dog2.is_trained)


# create a class called BankAccount, with 3 attributes:
class BankAccount:
    def __init__(self,name, last_name, account_number):
        self.name = Name
        self.last_name = last_name
        self.account_number = random_number

print(bankaccount.name)
print(bankaccount.last_name)
#- account houlder = name + last name of a person
#- account number = random number
#- balance which starts with 50.00 (float)