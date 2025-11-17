# Step 1: Create the Farm Class
class Farm:
    #Step 2: Implement the __init__ Method
    def __init__(self, farm_name):
        self.name = farm_name               # store the farm’s name in the attribute “name”
        self.animals = {}                   # create an empty dictionary attribute “animals”

    # Step 3: Implement the add_animal Method

    def add_animal(self, animal_type=None, count=1, **kwargs):
        
        if animal_type:
            if animal_type in self.animals:         #if already exist, add the count
                self.animals[animal_type] += count
            else:
                self.animals[animal_type] = count     # if not exist, create new entry
        
        # Handle multiple animals passed via kwargs
        for key, value in kwargs.items():
            if key in self.animals:
                self.animals[key] += value
            else:
                self.animals[key] = value
        
        #   Step 4: Implement the get_info Method

    def get_info(self):
        # Return formatted string showing all animals and counts.
        info_lines = [f"{self.name}'s farm\n"]             #Start a list with the farm name.
        for animal, count in self.animals.items():
            info_lines.append(f"{animal} : {count}")
        info_lines.append("\n    E-I-E-I-0!")
        return "\n".join(info_lines)

    def get_animal_types(self):
        #Return a sorted list of all animal types.
        return sorted(self.animals.keys())
       
       #Return a short description of the farm's animals.

    def get_short_info(self):    #Get a sorted list of animals.
        types = self.get_animal_types()
        animal_list = []
        for animal in types:                 #Pluralizing animals
            if self.animals[animal] > 1:
                animal_list.append(animal + "s")
            else:
                animal_list.append(animal)
        
        # Format string with commas and 'and' for the last animal
        if len(animal_list) > 1:                   #If more than one animal type exists:
            short_animals = ", ".join(animal_list[:-1]) + " and " + animal_list[-1]
        else:
            short_animals = animal_list[0]
        
        return f"{self.name}'s farm has {short_animals}."


# Step 5: Test Your Code
# Create farm object
macdonald = Farm("McDonald")

# Add animals individually
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())

# Add multiple animals at once using **kwargs
macdonald.add_animal(cow=2, pig=3, chicken=4)

print(macdonald.get_info())

# Get short info
print(macdonald.get_short_info())
