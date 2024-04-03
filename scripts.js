// Initial Values for grid
let rows = 16;
let columns = 16; 
let darkenLevel = 0;

const gridContainer = document.querySelector(".gridContainer");
const colorTool = document.querySelector("colorTool");
const rainbowTool = document.querySelector("rainbowTool");
const clearTool = document.getElementById("clearTool");
const gridSizeTool = document.querySelector("#gridSizeTool");
const displayInputValue = document.querySelector("#displayInputValue");
const eraserTool = document.querySelector("#eraserTool");

function darkenPixel(div) {
    darkenLevel += 0.1;
    div.style.backgroundColor=`rgba(0,0,0,${darkenLevel})`;
}

function selectedColor(){
    console.log("hi");
}

function createPixelElement(){
    const div = document.createElement("div")
    div.setAttribute("class", "pixel");
    div.addEventListener("mouseover", () => {
        selectedColor()
        div.style.backgroundColor="blue";
    });
    return div
}

// To Populate the Grid to adequate size.
function setUpGrid(rows, columns){
    for (let i = 0; i < rows; i++){
        div = createPixelElement()
        const gridRow = gridContainer.appendChild(div);
        for(let j = 0; j < columns; j++){
            div = createPixelElement();
            gridRow.appendChild(div);
        }
    }

    gridContainer.style.setProperty('--rows', rows); // Set CSS variable for number of rows
    gridContainer.style.setProperty('--cols', columns); // Set CSS variable for number of columns
}

function clearSketch(){
    console.log("Hello");
    gridContainer.innerHTML ='';
    setUpGrid();
}

function setDisplayValue(){
    displayInputValue.textContent = `${gridSizeTool.value} x ${gridSizeTool.value}`;
}

clearTool.addEventListener("click", () => {
    clearSketch();
});

gridSizeTool.addEventListener("input", () => {
    let grid = gridSizeTool.value;
    console.log(grid);
    setDisplayValue();
    clearSketch();
    setUpGrid(grid,grid);
    console.log('working');
});

// Inital Setup.
displayInputValue.textContent = `${rows} x ${columns}`;
gridSizeTool.value = `${rows}`;
setUpGrid(rows, columns);