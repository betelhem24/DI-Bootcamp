#lists
mylist = ["apple", "banana", "cherry", 12, 1.09, ':']

print(mylist)
print(mylist[-1])
print(mylist[-2])
# print('---------------------------------------------------')

mylist[1] = "Pineapple"

print(mylist)

# print('---------------------------------------------------')

newlist = ["apple", "banana", "cherry",[1,4,7]]
print(newlist)



inside_list = newlist[3]
print('insidelist')
print(inside_list)
print('Newlist[3]')
print(newlist[3])
print('----------')
print('Newlist[3][1]')
print(newlist[3][1])
print('insidelist[1]')
print(inside_list[1])

# print('---------------------------------------------------')

grid = [[1,2,3],
        [4,5,6],
        [7,8,9]
        ]
print(grid[0][0])

# print('---------------------------------------------------')

# Adding items at the end of my list
mylist.append('this is the new last item')
print(mylist)

mylist.remove('cherry')
print(mylist)

duplicates = ['first', 'second', 'first', 'third']

duplicates.remove('first')
print(duplicates)

third_item = duplicates.pop(2)
print(duplicates)
print(third_item)

first = [1,2,3,4]
second = [5,6,7,8]

first.extend(second)
print(first)

print(first + second)

print('hello'*3)

print(first*3)

print(len(first))
print(sum(first))
print(max(first))
print(min(first))

print(max([[1,2,2],[4,1,1],[1,0,5]]))


# Tuples
tup = (1,2,3,4,'happy birthday')
print(tup)
# tup[0] = 42
print('tup[2]')
print(tup[2])
print('---------')
a, b, c, d, e = tup
print(a)
print(b)
print(c)
print(d)
print(e)

# #a,b = tup

a, *b = tup
print(a)
print(b)

# Sets
s = set([1,2,2,2,5,6])
print(s)
s.add(10)
print(s)
s.add(2)
print(s)

# Loops

li = [12,15,264,234,12,577,109]

for item in li:
    if item > 200:
        print('Big number is', item)
    else:
        print('Small number is', item)

mysum = 0

for item in li:
    mysum = mysum + item
    print('Current sum:', mysum)

print('Final sum:', mysum)
# print('---------------------------------------------------')

bob = 0
runs = int(input('how many times should we do it?'))

while bob < runs:
    print(bob)
    bob = bob + 1
# print('---------------------------------------------------')

li = [12,15,264,234,12,577,109]

j = 0
while j < len(li):
    print(li[j])
    j = j + 1
# print('---------------------------------------------------')

password = 'secret'

guess = input('What is the password?')

while guess != password:
    print('Incorrect password, try again')
    guess = input('What is the password?')

print('Correct password')
# print('---------------------------------------------------')

#Complex condition on this code we can try the password only 5 times

password = 'secret'
tries = 0
max_tries = 4

guess = input('What is the password?')

while guess != password and tries < max_tries:
    tries += 1
    print('Incorrect password, try again')
    guess = input('What is the password?')

if guess == password:
    print('Correct password')

Continue

# print('---------------------------------------------------')

i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)


# Break

li = [12,15,264,234,12,577,109]

for item in li:
    if item > 500:
        print('Big number found', item)
        break
    print(item)
    print('random things happening until I find what Im looking for')
# print('---------------------------------------------------')



