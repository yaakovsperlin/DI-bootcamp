// let bottles = 0;
// for (let i = 99 i > 0 i -= bottles){
// 	bottles++;
// 	console.log(`${i} bottles of beer on the wall`)
// 	console.log(`${i} bottles of beer`);
// 	if(i>bottles){
// 		console.log(`take ${bottles} paas it around`);
// 		console.log(`${i-bottles} bottles of beer on the wall`)
// 	}else{

// 	}
// }





// let divs = document.querySelector(`inner`);
// // for(let i = 0 ; i < divs.length; i++){
// 	console.log(divs)
// // }
// // let href = document.getElementById(`dI`);
// // console.log(href)
// // href.style.background = red 

let divs = document.querySelector(`#content`);
let p = document.createElement(`p`);
p.textContent = "my first p tag";
divs.appendChild(p)


// let child = document.getElementById(`page`)
// console.log(child.parent.textContent);

let node = document.getElementById(`page`)
page.setAttribute("category","food");

let node2 = document.getElementById(`header`)

node2.lang = "heb"








let div = document.getElementById(`container`)
console.log(div)

let ul1 = document.querySelector(`.list`)
ul1.[1].textContent = "yaakov" 
+ ul1.firstElementChild.tex tContent
document.getElementsByTagName(`li`)[1].textContent = "richard"
document.getElementsByTagName(`li`)[0].textContent = "yaakov john"
document.getElementsByTagName(`li`)[1].textContent = "yaakov richard"


let li = document.getElementsByTagName(`ul`)
for(i = 0; i < li.length[0] i++){
	textContent = "yaakov"
}

let child = document.getElementById(`list`)
console.log(nextElementSibling(child);

let li2 = document.getElementsByTagName(`ul`)[1];
// console.log(li2.firstElementChild.nextElementSibling)

li2.removeChild(li2.children[1])





 // 🌟 Exercise 2 : Users And Style

// Add a “light blue” background color and some padding to the <div>.
// let div = document.getElementsByTagName(`div`)
// div[0].style.color = "blue";
// div[0].style.backgroundColor = "red";


// // Do not display the <li> that contains the text node “John”.
// let li = document.getElementsByTagName(`li`)[0]
// li.style.display = "none";

// // Add a border to the <li> that contains the text node “Pete”.
// let li1 = document.getElementsByTagName(`li`)[1]
// li1.style.border = "thick solid #0000FF";
// li1.style.backgroundColor = "red";

// // Change the font size of the whole body.
// let bodySize = document.getElementsByTagName(`body`);
// console.log(bodySize)
// bodySize[0].style.fontSize = '40px';

// 🌟 Exercise 3 : Change The Navbar
let node = document.getElementById(`NavBar`)
navBar.setAttribute("id","socialNetworkNavigation");

let ul = document.getElementsByTagName(`ul`);
let li = document.createElement(`li`);
li.textContent = "Logout";
ul[0].appendChild(li);

// Bonus
console.log();
 


























