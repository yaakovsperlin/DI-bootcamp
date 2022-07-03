 // 🌟 Exercise 2 : Users And Style

// Add a “light blue” background color and some padding to the <div>.
let div = document.getElementsByTagName(`div`)
div[0].style.color = "blue";
div[0].style.backgroundColor = "red";


// // Do not display the <li> that contains the text node “John”.
let li = document.getElementsByTagName(`li`)[0]
li.style.display = "none";

// // Add a border to the <li> that contains the text node “Pete”.
let li1 = document.getElementsByTagName(`li`)[1]
li1.style.border = "thick solid #0000FF";
li1.style.backgroundColor = "red";

// // Change the font size of the whole body.
let bodySize = document.getElementsByTagName(`body`);
console.log(bodySize)
bodySize[0].style.fontSize = '40px';