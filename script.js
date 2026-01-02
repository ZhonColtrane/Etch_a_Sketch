const container = document.querySelector("#container");
const cell = document.createElement("div");
cell.classList.add("cell");
const row = document.createElement("div");
row.classList.add("row");

function createGrid(size){
    if (size < 1 || size > 100){
        alert("Size must be between 1 and 100");
        return;
    }
    container.innerHTML="";
    for (let i = 0; i<size; i++){
        let newRow = row.cloneNode(true);
        for (let j = 0; j<size; j++){
            let newCell = cell.cloneNode(true);
            newRow.appendChild(newCell);
        }
        container.appendChild(newRow);
        }
}

const btn = document.querySelector("button");
btn.addEventListener(("click"), () => {
    const size = document.querySelector("input").value;
    createGrid(size);
});
createGrid(10);