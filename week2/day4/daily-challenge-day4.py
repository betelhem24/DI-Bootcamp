# Daily challenge : Text Analysis

import string
import re

# Part I: Analyzing a Simple String
class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        if count == 0:
            return f"'{word}' not found in the text."
        return count

    def most_common_word(self):
        words = self.text.split()
        freq = {}
        for word in words:
            freq[word] = freq.get(word, 0) + 1
        return max(freq, key=freq.get)

    def unique_words(self):
        return list(set(self.text.split()))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            content = file.read()
        return cls(content)

# Bonus: Text Modification
class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)

    def remove_stop_words(self):
        stop_words = ["a", "the", "is", "in", "and", "to", "of", "that", "it", "on"]
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in stop_words]
        return ' '.join(filtered_words)


def remove_special_characters(self):
    return re.sub(r'[^A-Za-z0-9\s]', '', self.text)
