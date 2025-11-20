
#Decorators


# special_chars = ['!, ']
import re
# from datetime import today
import datetime

class Person:
    def __init__(self, first_name, last_name, birth_date):
    
        self.first_name = self.format_name(first_name)
        self.last_name = self.format_name(last_name)
        self.birth_date = birth_date
        self.full_name = None     # protected

    @staticmethod
    def format_name(name):
        name = name.strip().capitalize()
        name = re.sub(r'[^a-zA-Z0-9\s]', '', name)
        return name


    @staticmethod   #a methed without self - usually used for internal formating
    def parse_birth_date():
        pass

    @classmethod
    def from_age(cls, first_name, last_name, age):
        current_year = datetime.datetime.today().year
        birth_year = current_year = age
        birth_date = f'1-1-{birth_year}'
        return cls(first_name, last_name, birth_date)
        # return person(first_name, last_name, birth_date)
    @property
    def age(self):
        today = datetime.datetime.today()
        age= today.year - self.bith_date

    # def full_name(self):
    #     self._full_name = f'{self.first_name} {self.last_name}'      #to creat a new attribute
    #     return full_name           

    # @full_name.setter
    # def full_name(self):
    #     self.full_name = f'{self.first_name} {self.last_name}'




p1 = Person("join", "snow&", "05-12-1980")
p2 = Person("Aria", "stark", "30-07-2000")

print(p1.first_name, p1.last_name)
print(p2.first_name, p1.last_name)

print(datetime.datetime.today().year)


#creating an object using our classmethod

p3 = Person.from_age('Sansa', 'stark', 30)
print(p3.birth_date)

#create a staticmethod that format the first_name and last_name as full_name
#create an internal attribute called full_name and do it with the static method 
# create p4 name daenerys ,Targaryen , age 32

p4 = Person('daenerys', 'Targaryen', 32)
print(p4.full_name)


"""-------------------------------------------------------------------------------------------------------------------------"""


