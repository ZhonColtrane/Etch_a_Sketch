const container = document.querySelector("#container");
const cell = document.createElement("div");
cell.classList.add("cell");
const row = document.createElement("div");
row.classList.add("row");

function createGrid(size){
   for (let i = 0; i<size; i++){
        let newRow = row.cloneNode(true);
        for (let j = 0; j<size; j++){
            let newCell = cell.cloneNode(true);
            newRow.appendChild(newCell);
        }
        container.appendChild(newRow);
        }
}
createGrid(3);