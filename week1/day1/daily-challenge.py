## Daily Challenge: Build up a string

### What You Will Learn:
   # Python Basics
   #  Conditionals
   #Loops
#1. **Ask for User Input:**
   # The string **must be exactly 10 characters long**.

#2. **Check the Length of the String:**
   # If the string is **less than 10 characters**, print: `"String not long enough."`
   # If the string is **more than 10 characters**, print: `"String too long."`
   # If the string is **exactly 10 characters**, print: `"Perfect string"` 

#3. **Print the First and Last Characters:**
   #- Once the string is validated, print the **first** and **last** characters.
#4. **Build the String Character by Character:**

#5. **Bonus: Jumble the String (Optional)**

#s = input("Enter a 10-character string: ")

import random

s = input("Enter a 10-character string: ")

if len(s) < 10:
    print("String not long enough.")
elif len(s) > 10:
    print("String too long.")
else:
    print("Perfect string")
    print("First character:", s[0])
    print("Last character:", s[-1])
    
    # Build string character by character
    for i in range(1, len(s)+1):
        print(s[:i])
    
    # Bonus: Jumble the string
    lst = list(s)
    random.shuffle(lst)
    print("Jumbled string:", ''.join(lst))
