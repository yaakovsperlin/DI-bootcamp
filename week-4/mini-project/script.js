let sectionRobot = document.getElementById("content")
				   document.getElementsByTagName('section')[0]
				   document.getElementsByClassName('hello')[0]
				   document.querySelector("#content")
				   document.querySelectorAll("div")
				   //also 

// create an element
let newParagraph = document.createElement("p");
let textParagraph = document.createTextNode("hello");
newParagraph.appendChild(textParagraph)
document.body.appendChild(newParagraph)

// (function add (){
// 	for(let i =0; i<5; i++){
// 			let newParagraph = document.createElement("p");
// 			let textParagraph = document.createTextNode("hello");
// 			newParagraph.classList.add("ocean");
// 			newParagraph.appendChild(textParagraph);
// 			document.body.appendChild(newParagraph);
// 	}
// })()


let btn = document.querySelector("#btnpara");
btn.addEventListener("click", changePara)

function changePara (){
	const allP = document.querySelectorAll("p")
	for (let p of allP){
		p.classList.toggle("hide")
	}
}