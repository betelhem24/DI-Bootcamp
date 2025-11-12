# Dictionaries: complex data structure

student_info= ['Harry', 'Potter', 15, 'Privent Drive, 4', 'Hedwig', 'Buckebeak']

student_info = {'first_name':'Harry',
           'last_name': 'Potter',
           'age':15,
           'address':'Drivet Drive, 4',
           'pets':['Hedwing', 'Buckbeak'],
           'best_friends': ('Ron wealey', 'Hermione Granger'),
           'is_parselmouth': True,
           'house': {'main':'griffynodor', 'secod': 'slytherin'}}


#accession data 
print(student_info['first_name'])
student_info['pets'].append('Toby')
student_info['pets'][1]
print(student_info)
print(student_info['house']['main'])


#how to use methods on dictionary values
student_info['pets'].append('Toby')
print(student_info['first_name'].upper())

# changing values of a dictionary
student_info{0} = 'Tiago'
student_info['first_name'] = 'Tiago'



#exerice


# how to add a new key:value pair

student_info['teacher'] = 'snap'   # option 1
student_info.update({'principal': 'dum'}) ........
print(student_info)

# the delet
del student_info['address']
print(student_info)



#set vs dictionary



#Exrice
# sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}



