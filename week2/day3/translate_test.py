from googletrans import Translator

# Initialize the translator
translator = Translator()

# Translate text
result = translator.translate('Hello, how are you?', src='en', dest='es')

# Print the translation
print(f"Original text: {result.origin}")
print(f"Translated text: {result.text}")
