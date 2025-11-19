# Exercises XP Ninja

# Exercise 1 : Conway’s Game of Life

from time import sleep
import os

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        """
        Initialize the Game of Life grid with the given dimensions and initial state.
        If no initial state is provided, the grid is filled with dead cells (0s).
        """
        self.rows = rows
        self.cols = cols
        self.grid = [[0 for _ in range(cols)] for _ in range(rows)]
        
        # If an initial state is provided, populate the grid accordingly
        if initial_state:
            for r in range(min(len(initial_state), rows)):
                for c in range(min(len(initial_state[r]), cols)):
                    self.grid[r][c] = initial_state[r][c]

    def display(self):
        """
        Display the current state of the grid.
        Clears the screen before printing the grid.
        """
        # Clear the screen (works for both Windows and Unix-like systems)
        os.system('cls' if os.name == 'nt' else 'clear')
        
        for row in self.grid:
            line = ""
            for cell in row:
                line += "O" if cell == 1 else "."
            print(line)
        print("\n")

    def count_live_neighbors(self, row, col):
        """
        Count the number of live neighbors for a cell located at (row, col).
        A live neighbor is a neighboring cell that contains a 1.
        """
        directions = [
            (-1, -1), (-1, 0), (-1, 1),
            (0, -1),          (0, 1),
            (1, -1), (1, 0), (1, 1)
        ]
        count = 0
        for dr, dc in directions:
            r, c = row + dr, col + dc
            # Make sure the neighbor is within bounds of the grid
            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]
        return count

    def next_generation(self):
        """
        Calculate the next generation of the grid according to Conway's rules.
        A new grid is created and populated based on the current state.
        """
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        
        for r in range(self.rows):
            for c in range(self.cols):
                live_neighbors = self.count_live_neighbors(r, c)
                
                # If the cell is alive:
                if self.grid[r][c] == 1:
                    # It survives if it has 2 or 3 live neighbors
                    if live_neighbors in [2, 3]:
                        new_grid[r][c] = 1
                # If the cell is dead:
                else:
                    # It becomes alive if it has exactly 3 live neighbors
                    if live_neighbors == 3:
                        new_grid[r][c] = 1
        
        self.grid = new_grid

    def run(self, generations=10, delay=0.5):
        """
        Run the Game of Life for a specified number of generations.
        The grid is updated and displayed in each generation.
        A delay is added to slow down the game.
        """
        for _ in range(generations):
            self.display()  # Show the current grid
            self.next_generation()  # Update to the next generation
            sleep(delay)  # Delay between generations for visual effect


# Example initial state (a simple glider pattern)
initial_state = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

# Create a GameOfLife instance with 5 rows and 5 columns
game = GameOfLife(rows=5, cols=5, initial_state=initial_state)

# Run the Game of Life for 10 generations, with a 0.5 second delay between each generation
game.run(generations=10, delay=0.5)
