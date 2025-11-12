#Daily Challenge: Dictionaries

word = input("Enter a word: ")  

# Create an empty dictionary to store letters and their value(indices)
letter_indices = {}

for index, char in enumerate(word):

    if char in letter_indices:
        letter_indices[char].append(index)
    else:
        letter_indices[char] = [index]

print(letter_indices)

# Challenge 2: Affordable Items

# Store Data
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

# Clean the wallet amount
wallet = int(wallet.replace("$", "").replace(",", ""))  

basket = []

for item, price in items_purchase.items():
  
    price_clean = price.replace("$", "").replace(",", "")
    price_int = int(price_clean)  
    if price_int <= wallet:
        basket.append(item)  
        wallet -= price_int  


if not basket:  
    print("Nothing")
else:
    print(sorted(basket))  


# Daily challenge GOLD: Caesar Cypher

# Caesar Cipher Program in Python

# Function to encrypt a message
def encrypt(text, shift):
    cipher_text = ""  
    for letter in text:  
        if letter.isupper():  
           
            cipher_text += chr((ord(letter) - 65 + shift) % 26 + 65)
        elif letter.islower():  
            cipher_text += chr((ord(letter) - 97 + shift) % 26 + 97)
        else:
            cipher_text += letter  
    return cipher_text  

# Function to decrypt a message
def decrypt(text, shift):
    plain_text = ""  
    for letter in text:
        if letter.isupper():
            
            plain_text += chr((ord(letter) - 65 - shift) % 26 + 65)
        elif letter.islower():
            plain_text += chr((ord(letter) - 97 - shift) % 26 + 97)
        else:
            plain_text += letter
    return plain_text  

# Main program
print("Welcome to Caesar Cipher Program!")
choice = input("Do you want to encrypt or decrypt? (e/d): ")  
message = input("Enter your message: ")  
shift = int(input("Enter the shift number: "))  

# Execute based on user choice
if choice.lower() == 'e': 
    result = encrypt(message, shift)
    print("Encrypted message:", result)
elif choice.lower() == 'd': 
    result = decrypt(message, shift)
    print("Decrypted message:", result)
else:
    print("Invalid choice! Please enter 'e' or 'd'.")
