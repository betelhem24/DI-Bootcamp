# Daily Challenge : Pagination

import math
# Step 1: Create the Pagination class
class pagination:

    # step 2: implement the __init__ method
    
    def __init__(self, items=None, page_size=10):
        if items is None:
            items = []    #there is no given for iteam so we will use empty list
        self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(items) / page_size)                #total number of items

    # step 3. implement the get_visible_iteam() method
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        # return = self.items[start:end]     # #Slice the list to get current page
        visible = self.items[start:end]    # Slice the list to get current page
        print(visible)


    # step 4. implement navigation methods
    def go_to_page(self, page_num):                
        if page_num < 1 or page_num > self.total_pages:       #If either condition is true, the page number is invalid
            raise ValueError # this is if page_num is out of range

        self.current_idx = page_num - 1     #first item in python is index 0 so this will Convert to 0-based index
        return self

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

p.next_page().next_page().get
#Bonus
#step 5: Add a custom __str__() method

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
print(p.current_idx + 1)
# Output: ValueError

p.go_to_page(0)
# Raises ValueError




# Daily challenge GOLD: DNA

import random  # We need random numbers for mutation


# STEP 1: Gene Class

class Gene:
    def __init__(self, value=None):
        # If no value is given, choose 0 or 1 randomly
        if value is None:
            self.value = random.choice([0, 1])
        else:
            self.value = value

    def mutate(self):
        # Flip the value (0 becomes 1, 1 becomes 0)
        if self.value == 0:
            self.value = 1
        else:
            self.value = 0

    def __repr__(self):
        # This makes the gene print as "0" or "1"
        return str(self.value)



# STEP 2: Chromosome Class

class Chromosome:
    def __init__(self):
        
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        # Every gene has a 50% chance to mutate
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()

    def __repr__(self):
        # Print chromosome like "0101011001"
        return ''.join(str(gene) for gene in self.genes)



# STEP 3: DNA Class
# DNA is a list of 10 chromosomes. DNA can mutate:

class DNA:
    def __init__(self):
        
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        # Mutate each chromosome
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        # Check if EVERY gene in EVERY chromosome is a 1
        for chromosome in self.chromosomes:
            for gene in chromosome.genes:
                if gene.value == 0:  # If ANY gene is 0 → not all ones
                    return False
        # If no 0s were found, return True
        return True

    def __repr__(self):
        # Print each chromosome separated with |
        return ' | '.join(str(c) for c in self.chromosomes)     # converts all Chromosome objects into strings
       



# STEP 4: Organism Class
# An Organism has DNA and an environment mutation rate.

class Organism:
    def __init__(self, dna=None, mutation_rate=0.5):
       
        if dna is None:
            self.dna = DNA()
        else:
            self.dna = dna

        # Mutation rate determines how often chromosomes mutate
        self.mutation_rate = mutation_rate

    def mutate(self):
        # Each chromosome has a chance to mutate based on mutation_rate
        for chromosome in self.dna.chromosomes:
            if random.random() < self.mutation_rate:
                chromosome.mutate()

    def __repr__(self):
        # Print organism DNA
        return str(self.dna)


# STEP 5 (Final Task): Simulation

num_organisms = 5         # How many organisms we start with
mutation_rate = 0.5       # Set environment mutation rate
generations = 0           # Count how many generations passed

# Create the starting population
population = [Organism(mutation_rate=mutation_rate) for _ in range(num_organisms)]

found = False  # This will turn True when we find an all-ones organism

# Keep looping until we find an organism with all 1s
while not found:
    generations += 1
    print(f"\n--- Generation {generations} ---")

    # Check each organism in the population
    for i, organism in enumerate(population):
        print(f"Organism {i+1} before mutation: {organism}")
        organism.mutate()  # Apply mutation
        print(f"Organism {i+1} after mutation:  {organism}")

        # Check if organism is all ones
        if organism.dna.is_all_ones():
            print(f"\n Organism {i+1} reached ALL ONES DNA!")
            print(f"Total generations: {generations}")
            found = True  # End the simulation
            break  # Stop checking other organisms

"""Results: Organisms’ DNA mutated over several generations. One organism eventually reached all genes = 1.

Conclusion: Random mutations can change DNA, and given time, can produce an organism with all genes in the desired state."""