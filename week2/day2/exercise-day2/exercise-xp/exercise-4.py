# Exercise 4: Family and Person Classes

# Step 1: Create the Person class
class Person:
    def __init__(self, first_name, age):
    
        self.first_name = first_name
        self.age = age
        self.last_name = ""
    
    # Method to check if the person is 18 or older
    def is_18(self):
       
        if self.age >= 18:
            return True
        else:
            return False

# Step 2: Create the Family class
class Family:
    def __init__(self, last_name):
        
        self.last_name = last_name
        self.members = []
    
    # Method to add a new family member
    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append(new_member)
    
    # Method to check if a member is over 18
    def check_majority(self, first_name):

        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    
                    print(f"You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    
                    print("Sorry, you are not allowed to go out with your friends.")
                return  
        # If the person is not found in the family
        print("Person not found in the family.")
    
    # Method to display the family and its members
    def family_presentation(self):
       
        print(f"Family Last Name: {self.last_name}")
       
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")


# Example usage/testing

# Create a new family with last name "Smith"
my_family = Family("Smith")

# Add family members
my_family.born("Alice", 20)  
my_family.born("Bob", 15)    

# Check if a family member is allowed to go out
my_family.check_majority("Alice") 
my_family.check_majority("Bob")    

# Present the family
my_family.family_presentation()    
