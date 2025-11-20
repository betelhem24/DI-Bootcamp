# Python I/O   (input/output)

import os
# # # file_obj = open('file-name.txt')



with open('sectets.txt', 'r') as file_obj:
    print(file_obj.read())


# # dir_path = os.path.dirname(os.path.realpath(__file__))    #this is very important line of code i have to remember !


with open(dir_path + '\seccrets.txt', 'r') as file_obj:
    print(content)

#exercise
# Read the file line by line

with open(dir_path + '\starwars.txt', 'r') as f:
    txt_list = f.readlines()
    for line in txt_list:
        print(line)
    print('end of document')
  
   

# Read only the 5th line of the file
    print(txt_list[4])
# Read only the 5 first star wars characters of the file
    print(txt_list[:5])
# Read all the file and return it as a list of strings. Then split each word into letters
    # temp = []
    # for name in txt_list:
    #     temp.append(name.split())

    #     print(temp)

    #list comprehenension

    temp = [list(name) for name in text_list]     #this is the same as those i wrote 3 line of codes
    print(temp)

    #  temp = [list(name) for name in text_list if name == 'Darth\n']     
    print(temp)

# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
    # counts = {'Darth': 0, 'Luke': 0, 'Lea':0}
    # for name in txt_list:
    #     if name == 'Darth':
    #         count['Darth'] += 1
    #     elif name == 'Luke':
    #         count['Luke'] += 1
    #     elif name == 'Lea':
    #         count['Lea'] +=1
    # print(counts)

counts = {'Darth': txt_list.count('Darth'),
           'Luke': txt_list.count('Luke'),
           'Lea': txt_list.count('Lea'),
           }

print(counts)

# Append your first name at the end of the file

with open(dir_path + '\starwars.txt', 'a+') as f:
    f.seek(0, os.SEEK_END)
    f.write('\nBetty')
    print('sucessfully added')
# Append "SkyWalker" next to each first name "Luke"
with open(dir_path + '\starwars.txt', 'w+') as f:
    txt_list = f.readline()
    modified_content = []
    for name in text_list:
        if name == 'Luke\n':
            modified_content.append('Luke Skyalker\n')
        else:
            modified_content.append(name)
    # print(modified_content)


with open(dir_path + '\starwars.txt', 'a+') as f:
    f.writelines(modified_content)
    print('skywalker was ')

   

