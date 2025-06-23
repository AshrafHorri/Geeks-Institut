import time
import os
import random

class GameOfLife:


    def __init__(self, rows, cols):

        self.rows = rows
        self.cols = cols
        self.grid = self.create_grid()
        self.generation = 0

    def create_grid(self):
        """Crée une grille 2D vide (toutes les cellules sont mortes)."""
        return [[0 for _ in range(self.cols)] for _ in range(self.rows)]

    def draw_grid(self):
        """Affiche la grille actuelle dans le terminal."""
        # Efface l'écran du terminal pour une animation plus fluide
        os.system('cls' if os.name == 'nt' else 'clear')
        
        print(f"--- Conway's Game of Life ---")
        print(f"Generation: {self.generation}")
        
        for row in self.grid:
            line = ""
            for cell in row:
                if cell == 1:
                    line += "■ "
                else:
                    line += "  "
            print(line)
        print("-" * (self.cols * 2))

    def set_pattern(self, pattern_name):
        """Place un motif prédéfini au centre de la grille."""
        if pattern_name == "glider":
            pattern = [[0, 1, 0], [0, 0, 1], [1, 1, 1]]
            start_pos = (2, 2)
        elif pattern_name == "blinker":
            pattern = [[1, 1, 1]]
            start_pos = (self.rows // 2, self.cols // 2 - 1)
        else: # Random
            for r in range(self.rows):
                for c in range(self.cols):
                    self.grid[r][c] = random.choice([0, 1])
            return

        for r_offset, row_data in enumerate(pattern):
            for c_offset, cell_value in enumerate(row_data):
                self.grid[start_pos[0] + r_offset][start_pos[1] + c_offset] = cell_value


    def count_live_neighbors(self, row, col):
        """Compte le nombre de voisins vivants pour une cellule donnée."""
        count = 0
        for i in range(-1, 2):
            for j in range(-1, 2):
                if i == 0 and j == 0:
                    continue

                # Calcule les coordonnées du voisin avec des bords "toriques" (qui se rejoignent)
                neighbor_row = (row + i + self.rows) % self.rows
                neighbor_col = (col + j + self.cols) % self.cols
                
                count += self.grid[neighbor_row][neighbor_col]
        return count

    def update(self):
        """Calcule la prochaine génération de la grille en fonction des règles du jeu."""
        next_grid = self.create_grid()

        for r in range(self.rows):
            for c in range(self.cols):
                neighbors = self.count_live_neighbors(r, c)
                is_alive = self.grid[r][c]

                # Appliquer les règles du Jeu de la Vie
                if is_alive and (neighbors < 2 or neighbors > 3):
                    next_grid[r][c] = 0
                elif not is_alive and neighbors == 3:
                    next_grid[r][c] = 1
                else:
                    next_grid[r][c] = is_alive

        self.grid = next_grid
        self.generation += 1

    def run(self, generations, speed=0.1):
        """Exécute la simulation pour un nombre donné de générations."""
        for _ in range(generations):
            self.draw_grid()
            self.update()
            time.sleep(speed)

# --- Exécution du Programme ---
if __name__ == "__main__":

    game = GameOfLife(rows=20, cols=40)
    

    game.set_pattern("glider")
    

    try:
        game.run(generations=100, speed=0.1)
    except KeyboardInterrupt:

        print("\nSimulation arrêtée par l'utilisateur.")

