console.log("Hello World!");

let color = "black";
//create the 16x16 grid
const drawArea = document.getElementById("drawArea");
function createGrid(gridSizeNumber) {
    drawArea.replaceChildren();
    for (let i = 0; i < gridSizeNumber; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let x = 1; x <= gridSizeNumber; x++) {
            const cell = document.createElement("div");
            cell.className = "gridsquares";
            //hover effect 
            cell.addEventListener('mouseover', (event) => {
                cell.style.backgroundColor = color.toLowerCase();
            })
            row.appendChild(cell);
        }
        drawArea.appendChild(row);
    }
}

//change grid size button
const gridSizeBtn = document.getElementById("gridSizeBtn");
gridSizeBtn.onclick = (event) => {
    let gridSizeNumber = prompt("Enter the grid size number less than 64");
    if (gridSizeNumber > 64) {
        alert("Too Big!");
    }
    else createGrid(gridSizeNumber);
}

//reset button
const resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = (event) => {
    createGrid(gridSizeNumber);
    
}

//color button
const colorBtn = document.getElementById("colorBtn");
colorBtn.onclick = (event) => {
    let userColorInput = prompt("Enter the Name of the Color")
    if (userColorInput === null || userColorInput == "") {
        color = color;
    } else {
        color = userColorInput;
    }
}


document.addEventListener('onload', createGrid(gridSizeNumber = 16));
