# Exercise 7: Faker Module

from faker import Faker  # Import Faker module

users = []  # List to store user data

def add_users(number_of_users):
    fake = Faker()  # Create Faker instance
    for _ in range(number_of_users):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)  # Add user to the list

add_users(5)  # Generate 5 fake users
print(users)  # Print all users
