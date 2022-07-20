// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10

function compareToTen (a){
  return new Promise ((resolve, reject) =>{
  	setTimeout(() => {
     if(a >= 20 ){
     	resolve("great job")
     }else{
     	reject("low grade")
     }
  	},3000)
  })
}
compareToTen(5)
.then(result => console.log(result))

// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.


const promise = new Promise ((resolve, reject) =>{
  setTimeout(() =>{
  		resolve("success")
  },4000)
 
})
console.log(promise)

// 2.2
 Promise.resolve("success")
 .then((result) => console.log(result))
 // 2.3
 .catch(console.log("oops something went wrong"))


// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


Promise.resolve(3) 
 .then((result) => console.log(result))

 Promise.reject("result")
 .then((result) => console.log(result))
 .then(console.log("boo!"))

