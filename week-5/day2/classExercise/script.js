 // let xhr = new XMLHttpRequest();
// console.log(xhr)
// xhr.open("GET","https://jsonplaceholder.typicode.com/users")
// xhr.send();
// // xher.responseType = "json"
// console.log(xhr)


// const loadData = function(){
//  if (xhr.status !==200){
//    console.log(ERROR)
//  }else{
//  	let object = JSON.parse(xhr.response)
// }
// }


// xhr.addEventListener("load", function()){ 
//  if (xhr.status !==200){
//    console.log(ERROR)
//  }else{
//  	let object = JSON.parse(xhr.response)
//  }
//  console.log(xhr.response)


const img = document.querySelector('img');
const btn = document.querySelector('button');
const form = document.querySelector('.form');
const search = document.getElementById('search');

btn.addEventListener('click', loadGIF);
form.addEventListener('submit', loadGIF);

function loadGIF(e) {
  var searchValue = search.value; // Create a variable with the input value
  if (!searchValue) {
    searchValue = 'random'; // If the value is empty, we put the 'random' value
  }
  e.preventDefault();
  fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=g3TEgnU2pGODGJrcvHcn36HwOhK3E8l9&s='+searchValue, { // Here we use the variable searchValue with what was typed by the user.
        mode: 'cors'
      }
    )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      img.src = json.data.images.fixed_height.url;
    })
    .catch(function(err) {
      console.log(err);
    });
}








 


