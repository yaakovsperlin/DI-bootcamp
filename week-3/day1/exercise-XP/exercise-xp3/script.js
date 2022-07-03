// 🌟 Exercise 3 : Change The Navbar
let node = document.getElementById(`NavBar`)
navBar.setAttribute("id","socialNetworkNavigation");

let ul = document.getElementsByTagName(`ul`);
let li = document.createElement(`li`);
li.textContent = "Logout";
ul[0].appendChild(li);

// Bonus
console.log();