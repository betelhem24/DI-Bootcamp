# Exercises XP Ninja

# Exercise 1 : Temperature

# Base class that stores temperature in Celsius (our main unit)
class Temperature:
    def __init__(self, value_in_celsius):
        self.value_in_celsius = value_in_celsius

    def to_celsius(self):
        return self.value_in_celsius

    def to_kelvin(self):
        return self.value_in_celsius + 273.15

    def to_fahrenheit(self):
        return (self.value_in_celsius * 9/5) + 32


# Subclass for Celsius
class Celsius(Temperature):
    def __init__(self, value):
        super().__init__(value)  


# Subclass for Kelvin
class Kelvin(Temperature):
    def __init__(self, value):
        celsius_value = value - 273.15  
        super().__init__(celsius_value)


# Subclass for Fahrenheit
class Fahrenheit(Temperature):
    def __init__(self, value):
        celsius_value = (value - 32) * 5/9  
        super().__init__(celsius_value)


# Example usage
temp_c = Celsius(25)
temp_f = Fahrenheit(77)
temp_k = Kelvin(300)

print(temp_c.to_kelvin())      
print(temp_f.to_celsius())    
print(temp_k.to_fahrenheit())  


# Exercise 2: In the Quantum Realm

# We need random numbers for measurements
import random  

class QuantumParticle:
    # This method runs when we create a new particle
    def __init__(self, x=0, p=0):
        self.x = x                 
        self.p = p                 
        self.spin_value = None    
        self.entangled_with = None 

    # This method creates a disturbance every time a measurement happens
    def disturbance(self):
        self.x = random.randint(1, 10000)  
        self.p = random.random()           
        print("Quantum Interferences!!")   

    # Measure the position
    def position(self):
        self.disturbance()                
        return random.randint(1, 10000)    

    # Measure the momentum
    def momentum(self):
        self.disturbance()                
        return random.random()             

    # Measure the spin
    def spin(self):
        # Choose randomly either 1/2 or -1/2
        self.spin_value = random.choice([0.5, -0.5])

        # If this particle is entangled, update the other particle's spin
        if self.entangled_with is not None:
            # Other particle gets opposite spin
            self.entangled_with.spin_value = -self.spin_value

        self.disturbance()                
        return self.spin_value            

    # Entangling two particles
    def entangle(self, other):
        # First, check if "other" is actually a QuantumParticle
        if not isinstance(other, QuantumParticle):
            return "Error: Can only entangle with another QuantumParticle"

        # Make the two particles entangled
        self.entangled_with = other
        other.entangled_with = self

        # Print the spooky message
        print("Spooky Action at a Distance !!")

        return f"Particle {id(self)} is now in quantum entanglement with Particle {id(other)}"

    # Representation of the particle
    def __repr__(self):
        # Shows position, momentum, and spin nicely
        return f"QuantumParticle(position={self.x}, momentum={self.p}, spin={self.spin_value})"

