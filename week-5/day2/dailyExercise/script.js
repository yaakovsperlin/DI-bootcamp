// 🌟Exercise 1 : Giphy API


// let ajax =  new XMLHttpRequest()
// console.log (ajax)
 
//  function gif(){
//  	ajax.open("GET","https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"); 
//  	ajax.send()
//  }

// ajax.onload = function (){
//   let object = JSON.parse(ajax.response)
//   console.log(object)
//  };
//  gif()



// 🌟 Exercise 2 : Giphy API
 let ajax =  new XMLHttpRequest()
console.log (ajax)
 
 function gif(){
 	ajax.open("GET","https://api.giphy.com/v1/gifs/search?q=Sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"); 
 	ajax.send()
 }

ajax.onload = function(){
  let object = JSON.parse(ajax.response)
  console.log(object)
 };
 gif()






 


	










