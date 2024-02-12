/*******************
 * OUR HELPER CODE *
*******************/

/*
* Here we add the squares to the canvas dynamically.
* You can mostly leave this section alone!
* But if you want to change how wide the canvas is,
* there are just two steps:
* 
* 1. Change the `gridWidth` value below.
* 2. Change the `grid-template-rows` and
* `grid-template-columns` to match.
*
* To make the second one happen, the number to change
* is the first argument to `repeat`, currently set at 10.
*/
let mouseOn = false
document.addEventListener("mousedown",()=>{
  mouseOn = true
})
document.addEventListener("mouseup",()=>{
  mouseOn = false
})
let storageColor= "color-5"
let newColor=""
let numberOfColors="5"
let coloring = document.querySelectorAll(".palette-color")
let gridWidth = 10;
let count = 0;
gridSize =document.querySelector("#gridSize")
changeGrid()
changeColor()
console.log('hw')
paint()

gridSize.addEventListener("change",()=>{
  document.querySelector(".canvas").style.gridTemplateRows = `repeat(${gridSize.value},1fr)`
  document.querySelector(".canvas").style.gridTemplateColumns = `repeat(${gridSize.value},1fr)`
  gridWidth = gridSize.value
  changeGrid()
  paint()
})



function changeGrid(){
  while (count <= gridWidth * gridWidth) {
    const canvas = document.querySelector('.canvas');
    const div = document.createElement('div');
    div.className = 'square color-5';
    canvas.appendChild(div);
    count++;
  }
}



function changeColor (){
  for(let color of coloring){
    color.addEventListener("click",(event)=>{
      let paintBrush = document.querySelector(".current-brush")
      newColor = event.target.id
      paintBrush.classList.replace(storageColor,newColor)
      storageColor = newColor
    })
  }
}

function paint(){
  for(let individual of document.querySelectorAll(".square")){
    individual.addEventListener("mouseover",(event)=>{
      if(mouseOn === true){
      event.target.classList.replace(event.target.classList[1],storageColor)
      }
    })
  }
}

// document.querySelector(".makeNewColor").addEventListener("click",(event)=>{
//   event.preventDefault()
//   document.querySelector(".colorAddition").classList.remove("invisible")
// })

// document.querySelector("#finalizeColor").addEventListener("click",(event)=>{
//   numberOfColors ++
//   event.preventDefault()
//   let red= document.querySelector("#red").value
//   let green= document.querySelector("#green").value
//   let blue= document.querySelector("#blue").value
//   let nextColor = document.createElement("div")
//   nextColor.classList.add("palette-color")
//   nextColor.classList.add(`color-${numberOfColors}`)
//   nextColor.style.backgroundColor=`rgb(${red,green,blue})`
//   let pallet =document.querySelector(".palette")
//   pallet.appendChild(nextColor)
// })


// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.