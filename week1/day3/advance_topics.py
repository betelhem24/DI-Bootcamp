# LOOPS OPERATION

#syntax of a for loop

#for <variable> in <sequence>
#  an indented block of code (will happen with in each iteration)

# range() - helps us to create a squence of numbers

# for num in range(1,11,2): if we use this as our code it will skip 2 steps
#range (start=0, stop, step)
for num in range(1,11):
    print(num)


#     #enumerate() - gives as a tuple with indexand iteam
#     student_info1 = ['Harry', 'Potter', 15, 'Privent Drive, 4', 'Hedwig', 'Buckebeak']
# student_info1[0] = student_info1[0].lower()
# #lets change the item that are string to lowercase

# for item in student_info1:
#     if type(item) == str:
#         item.lower()


         #enumerate() - gives as a tuple with indexand iteam
    student_info1 = ['Harry', 'Potter', 15, 'Privent Drive, 4', 'Hedwig', 'Buckebeak']

student_info1[0] = student_info1[0].lower()
#lets change the item that are string to lowercase

for i,item in enumerate(student_info1):  # using enumerate() we have access to boyh: index and item
    if type(item) == str: #we check if the item is string type
        student_info1[i] = item.lower()   #we reasign the itm to its lowercase version

print(student_info1)
    

#not for loop relate: just useful in general:
#zip()


names = ['juliana', 'jeremy', 'avner', 'sonia']   #tuples
cities = ['ramat gan', 'modin', 'ranana', 'tel aviv']    #lists

#names_cities = {'juliana':'ramat gan'}-to do that we can use zip


names_cities = dict(zip(cities, names))
print(name_cities)