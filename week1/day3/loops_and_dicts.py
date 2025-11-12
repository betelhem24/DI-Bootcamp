# loop and Dictionaries

student_info= ['Harry', 'Potter', 15, 'Privent Drive, 4', 'Hedwig', 'Buckebeak']

student_info = {'first_name':'Harry',
           'last_name': 'Potter',
           'age':15,
           'address':'Drivet Drive, 4',
           'pets':['Hedwing', 'Buckbeak'],
           'best_friends': ('Ron wealey', 'Hermione Granger'),
           'is_parselmouth': True,
           'house': {'main':'griffynodor', 'secod': 'slytherin'}}

# #loop in a list = directly
# for item in student_info1:
#     print(item)

# #options of loops in dictionaries

# #access only keys = keys()

# for key in student_info.keys()
# print(key)

# # access only keys = values

# for value in student_info.keys()
# print(value)

# # access both: keys and values

# for keys, value in student_info.items():
#     print(key, value)


# we want all the string values to upper case

for key, value in student_info.items():  # accessing both: keys and values
    if type(value) == str:  #cheack if the value is a string
        student_info[key] = value.upper()   #changing the value of uppercase
        
print (student_info)