
 // Exercise 3 : Transform The Sentence
// Declare a global variable named allBoldItems.

let allBoldItems = [];

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

let body = document.querySelector("body");

function getBoldItems(){
	let boldItems = document.getElementsByTagName('strong')
  for(let i = 0; i < boldItems.length; i++){
  	allBoldItems.push(boldItems[i])
  	allBoldItems
  	// console.log(boldItems[i].innerText)
   }
   // console.log(allBoldItems)
}
getBoldItems()

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
   for(let i = 0; i < allBoldItems.length; i++){
   	allBoldItems[i].style.color = "blue"
   }
}
highlight()

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
	for ( i = 0; i < allBoldItems.length; i++){
		allBoldItems[i].style.color = "black"
	}
}
return_normal()         