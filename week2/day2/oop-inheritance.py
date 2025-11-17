# class Animal():
#     def __init__(self, name):
#         self.name = name

# class Dog(Animal):
#     def bark(self):
#         print(f"{self.name} barked, WAF !")

# class Parent:
#   def speak(self):
#     print('parent is speaking')

# class Child(Parent):
#     pass
# #-------------------------------------------------------------------
# class Parent:
#   def speak(self):
#     print('parent is speaking')

# class child(parent):
#     def speak(self):
#         print('child is speaking') 

# class GrandchildChild(Parent):
#     pass

# child1 = child()
# child1.speak()

# grandchild = GrandchildChild()
# grandchild.speak()
#-------------------------------------------------------------------

class Animal:

    def __inti__(self, name, family, legs):
        self.name = name
        self.family = family


        def sleep(self):
            return f'{self,name} is sleeping - ANIMAL'

class Dog(Animal):
    def __init__(self, name, family, legs, trained, age):
        super().__init__(name, family, legs)
        self.trained = trained
        self.age = age

dog1 = Dog('Flufy', 'Candae', 4, True, 5)
print(dog1.sleep())



#create a cat class that inherits from all the animal attributes + friendly and house cat
# then create an object of cat and print if it is friendly or not


class cat(Animal):
    def __init__(self, name,family, legs,friendly, house_cat):
        super().__init__(name,family,legs)
        self.friendly = friendly
        self.housecat_cat = house_cat

cat1 = cat('carmelo','fedea', 4, True, True)
print(cat1.friendly)

