// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.




const fruits = ["apple", "pear", "banana", "orange",]

function makeAllCaps (array){
	console.log(fruits)
  return new Promise((resolve,reject) =>{
  	if(array.every(i => typeof i === "string")){
  		let arrayTwo = fruits.map(param => param.toUpperCase())
      resolve(console.log(arrayTwo))
      }else{
      	reject("its not a string")
      }

 })
  
}
makeAllCaps(fruits)
.then()

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason
// const words = ["yes","no","maybe","so","aight"]

// function sortWords(array){
//   return new (Promise((resolve, reject) =>{
//   	if(array.length() >= 4){
//   		resolve()
//   	}

//   	}
//   })
// }
