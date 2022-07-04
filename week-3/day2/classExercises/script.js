// function divHover(){
//   console.log('div Hover')
// }
// function divClick(){
// 	alert('divClick')
// }

// let root = document.getElementById('root');
// root.addEventListener("click", function(){
// 	alert('haha')
	
// })

// let inpt = document.getElementById('root2');
// // document.getElementsByTagName('input')[0];
// inpt.addEventListener('input',function(event){
// 	console.log(event.target.value)

// })

// 🌟 Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.
let H1 = document.getElementsByTagName('h1').innerText
    // console.log(H1)
// Using DOM methods, remove the last paragraph in the <article> tag.

let lastP = document.querySelectorAll('p')[3]
// console.log(lastP)
lastP.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on

let h2 = document.querySelectorAll('h2')[0]

function h2Click(){
   h2.style.backgroundColor = 'red'
}

let h3 = document.querySelectorAll('h3')[0]

function h3Hover(){
	h3.style.display = 'none'
}

let allBold = document.querySelectorAll("body")[0]
console.log(allBold)
function beBold(){
	allBold.style.fontWeight = "1000";
}









