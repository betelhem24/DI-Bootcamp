// ====== COLORING GAME ======

// SELECT ELEMENTS
const drawingGrid = document.getElementById("drawing-grid");
const clearButton = document.getElementById("clearGridButton");
const colorBoxes = document.querySelectorAll(".color");

let currentColor = "black"; // default color
let isDrawing = false;


// CREATE GRID CELLS (30x30 = 900 cells)
for (let i = 0; i < 900; i++) {
  const cell = document.createElement("div");
  drawingGrid.appendChild(cell);
}


// SELECT COLOR
colorBoxes.forEach(box => {
  box.addEventListener("click", () => {
    currentColor = box.dataset.color;
    // optional: show selected color
    colorBoxes.forEach(c => c.classList.remove("selected"));
    box.classList.add("selected");
  });
});

// DRAWING LOGIC
drawingGrid.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

// color cell on hover while mouse pressed
drawingGrid.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "DIV" && isDrawing) {
    e.target.style.background = currentColor;
  }
});

// color cell on click
drawingGrid.addEventListener("mousedown", (e) => {
  if (e.target.tagName === "DIV") {
    e.target.style.background = currentColor;
  }
});

// CLEAR GRID
clearButton.addEventListener("click", () => {
  document.querySelectorAll("#drawing-grid div").forEach(cell => {
    cell.style.background = "white";
  });
});
