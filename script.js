const container = document.querySelector("#container");
const cell = document.createElement("div");
cell.classList.add("cell");
const row = document.createElement("div");
row.classList.add("row");


function createGrid(size){
    if (size < 1 || size > 100 || isNaN(size)){
        alert("Size must be a number between 1 and 100");
        return;
    }
    //Initialize grid
    container.innerHTML="";
    
    for (let i = 0; i<size; i++){
        let newRow = row.cloneNode(true);
        for (let j = 0; j<size; j++){
            let newCell = cell.cloneNode(true);
            newCell.setAttribute("hoverCounter", 0);
            newCell.style.backgroundColor = "white";
            newCell.style.opacity = 0;
            newRow.appendChild(newCell);
        }
        container.appendChild(newRow);
        }
}
// Event listener to trigger grid creation with input
const btn = document.querySelector("button");
btn.addEventListener(("click"), () => {
    const size = prompt("Enter grid size (1-100):");
    createGrid(size);
});


//Event listener for hover over cells
const grid = document.querySelector("#container");
let hoverCounter = 0;
grid.addEventListener("mouseover", (e) => {
    //Random color
    const r = Math.floor(Math.random() * 256);   
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "rgb(" + r + "," + g + "," + b + ")";
    e.target.style.backgroundColor = color;
    //Incremental opacity
    let hoverCounter = parseInt(e.target.getAttribute("hoverCounter")) + 1;
    e.target.style.opacity = hoverCounter*0.1;
    e.target.setAttribute("hoverCounter", hoverCounter);
})
grid.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "white";
})

createGrid(10); //default grid size