let arrayColors = ["blue","red","yellow","green","purple","grey","black","pink","orange", "aqua"];
let colorPicked;
let isDrawing = false 


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
	}
}

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	gridPaintSection.addEventListener("mousedown", function(){
		isDrawing = true
		console.log(isDrawing)
	})
	gridPaintSection.addEventListener("mouseup", function(){
		isDrawing = false
		console.log(isDrawing)
	})
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor)
		divColor.addEventListener("mouseover", function(){
			if (isDrawing === true) {
				divColor.style.backgroundColor = colorPicked;
			}
		})
	}

}

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
	console.log(colorPicked)
}

let clearAll = document.getElementById("clearbtn");

clearAll.addEventListener("click", function(){
	let grid = document.getElementById("gridPaint")	
	let allDivs = grid.getElementsByTagName("div")
	for (let i = 0; i < allDivs.length; i++){
	   allDivs[i].style.backgroundColor = "white"
	}
})


addColors()
addGrid()












