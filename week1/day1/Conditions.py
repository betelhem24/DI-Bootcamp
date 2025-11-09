client_age = input('what\'s your agre?')
if client_age <12:  
    print('sorry,you can\'t see the movie')
if client_age < 7: 
    print('we will call your parents')

elif client_age >= 13 and client_age <=16:
        print('you can watch the movie with your parents')
else:
    print('you can watch the movie')
