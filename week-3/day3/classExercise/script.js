// let titleOne = document.body.Children[0].firstElementChild;
// console.log(titleOne) 



// let clickLoop = document.getElementById("click1")

// function click1(){
// 	clickLoop.style.backgroundColor = "blue"
// }
// click1()

// let colors = ["blue", "yellow", "red", "pink"]

// function addbutton(){
// 	let div = document.getElementById("container")
// 	   for(let i= 0; i < colors.length; i++){
// 		let btn = document.createElement('button');
// 		let text = document.createTextNode(colors[i]);
// 		btn.addEventListener("click", changeBackground)
// 		btn.appendChild(text);
// 		div.appendChild(btn);
// 	}
// }
// addbutton()

// function changeBackground(ev){
// 	let colorbtn = ev.target.textContent
// 	document.body.style.backgroundColor = colorbtn
// }




// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

let personInfo = []
let getName = document.forms[0];
// console.log(getName)
let input = document.getElementsByName('fname')
console.log(input)

getName.addEventListener("submit", getInfo);

function getInfo(event){
	event.preventDefault()
	let inputOutput = {
		title : getName.elements.fname.value,
		author : getName.elements.lname.value
	}
	personInfo.push(inputOutput);
	console.log(personInfo)
}   



































