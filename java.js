console.log("Hello World!");

//create the 16x16 grid
function createGrid() {
    const middle = document.getElementById("drawArea");
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let x = 1; x <= 16; x++) {
            const cell = document.createElement("div");
            cell.className = "gridsquares";
            // cell.textContent = "hi";
            cell.addEventListener('mouseover', (event) => {
                cell.style.backgroundColor = 'red';
            })
            row.appendChild(cell);
        }
        middle.appendChild(row);
        
    }
    
}

//hover effect using entering and exiting event listeners
// function changeColor() {
//     cell.style.backgroundColor = "black";
// }

document.addEventListener('onload', createGrid());
