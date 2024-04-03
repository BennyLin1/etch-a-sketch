const gridContainer = document.querySelector(".gridContainer");
const colorTool = document.querySelector("#colorTool");
const rainbowTool = document.querySelector("#rainbowTool");
const gridSizeTool = document.querySelector("#gridSizeTool");
const displayInputValue = document.querySelector("#displayInputValue");
const eraserTool = document.querySelector("#eraserTool");
const clearTool = document.getElementById("clearTool"); // Testing by ID
const buttons = document.querySelectorAll('button');

// Initial Values for grid
let darkenLevel = 0;
let currentColor = colorTool.value;
let grid = gridSizeTool.value;

function selectedColor(){
    if(rainbowTool.classList.contains('clicked')){
        currentColor = getRandomColor();
        return currentColor
    } else{
        return currentColor
    }
};

function getRandomColor(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function createPixelElement(){
    const div = document.createElement("div")
    div.setAttribute("class", "pixel");

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor= selectedColor();
    });
    return div
};

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
    // Set Grid Size in CSS
    gridContainer.style.setProperty('--rows', rows); // Set CSS variable for number of rows
    gridContainer.style.setProperty('--cols', columns); // Set CSS variable for number of columns
};

function clearSketch(){
    gridContainer.innerHTML ='';
    
};

function setDisplayValue(){
    displayInputValue.textContent = `${gridSizeTool.value} x ${gridSizeTool.value}`;
};

colorTool.addEventListener("input", () => {
    const color = colorTool.value;
    const r = parseInt(color.substr(1,2), 16);
    const g = parseInt(color.substr(3,2), 16);
    const b = parseInt(color.substr(5,2), 16);
    currentColor = (`rgb(${r},${g},${b})`);
    // Remove clicked from buttons.
    buttons.forEach(btn => btn.classList.remove('clicked'));
});

rainbowTool.addEventListener("click", () =>{
    return getRandomColor();
});

eraserTool.addEventListener("click", () => {
    currentColor = "rgb(255,255,255)";
    // colorTool.value = '#FFFFFF';
});

gridSizeTool.addEventListener("input", () => {
    setDisplayValue();
    clearSketch();
    grid = gridSizeTool.value;
    setUpGrid(grid,grid);
    buttons.forEach(btn => btn.classList.remove('clicked'));
});

clearTool.addEventListener("click", () =>{
    clearSketch()
    setUpGrid(grid,grid);
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove 'clicked' class from all buttons
      buttons.forEach(btn => btn.classList.remove('clicked'));
      
      // Add 'clicked' class to the clicked button
      this.classList.add('clicked');
    });
  });

// Inital Setup.
displayInputValue.textContent = `${grid} x ${grid}`;
gridSizeTool.value = `${grid}`;
setUpGrid(grid, grid);