# API

import requests
import json
import os

dir_path =os.path.dirname(os.path.realpath(__file__))
response = requests.get('https://api.chucknorris.io/jokes/random')

print(response)

date = response.json()
print(data.get('value'))

with open(dir_path + '\jokes.json', 'w') as f:
    json.dump(data, f)
    print('file was created')