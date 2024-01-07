console.log("Hello World!");

//create the 16x16 grid
function createGrid(n) {
    const middle = document.getElementsByClassName("middle");
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let x = 1; x <= n; x++) {
            const cell = document.createElement("div");
            cell.className = "gridsquares";
            row.appendChild(gridsquare);
        }
        middle.appendChild(row);
    }
}