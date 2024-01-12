console.log("Hello World!");

//create the 16x16 grid
const drawArea = document.getElementById("drawArea");
function createGrid(gridSizeNumber) {
    drawArea.replaceChildren();
    for (let i = 0; i < gridSizeNumber; i++) {
        const row = document.createElement("div");
        row.className = "row";
        // row.textContent = "row #" + i;
        for (let x = 1; x <= gridSizeNumber; x++) {
            const cell = document.createElement("div");
            cell.className = "gridsquares";
            //hover effect 
            cell.addEventListener('mouseover', (event) => {
                cell.style.backgroundColor = 'red';
            })
            row.appendChild(cell);
        }
        drawArea.appendChild(row);
    }
}

//change grid size button
const gridSizeBtn = document.getElementById("gridSizeBtn");
gridSizeBtn.onclick = (event) => {
    // clearGrid();
    let gridSizeNumber = prompt("Enter the grid size number");
    createGrid(gridSizeNumber);

}

//clear button
const clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = (event) => {
    
}



document.addEventListener('onload', createGrid(gridSizeNumber = 16));
