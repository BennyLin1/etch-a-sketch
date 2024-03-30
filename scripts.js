console.log("check");

const gridContainer = document.querySelector(".gridContainer");

let rows = 16;
let columns = 16;

gridContainer.style.setProperty('--rows', rows); // Set CSS variable for number of rows
gridContainer.style.setProperty('--cols', columns); // Set CSS variable for number of columns

function createPixelElement(){
    const div = document.createElement("div")
    div.setAttribute("class", "pixel");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor="blue";
    });
    return div
}

for (let i = 0; i < rows; i++){
    div = createPixelElement()
    const gridRow = gridContainer.appendChild(div);

    for(let j = 0; j < columns; j++){
        div = createPixelElement();
        gridRow.appendChild(div);
    }

}

