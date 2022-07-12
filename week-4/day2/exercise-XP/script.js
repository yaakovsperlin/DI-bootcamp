// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const show = (x, y) => x + y
// let sum = show(2, 3)
// console.log(sum)

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// const convertKg = (x) => x *1000
// const finalSum = convertKg(2)
// console.log(finalSum)

// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like
//  "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// const personInfo = (title, place, partner, number) => `You will be a ${title} in ${place}, and married to ${partner} with ${number} kids.`
// const infoDisplay = personInfo("dr", "montreal","sophie","10")
// console.log(infoDisplay)

// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


// const userName = ((name) => {
// 	let addDiv = document.getElementById("name")
// 	let newDiv = document.createElement("div")
// 	let text = document.createTextNode(`welcome ${name} !!`)
       
//        newDiv.appendChild(text)
//        addDiv.appendChild(newDiv)
//        document.body.appendChild.newDiv

// })
// userName("john")

// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope

// const makeBar = ((size) => {
//     let ingredients = []
//     const addIngredients = ((one, two, three,) =>{
//     	let newDiv = document.createElement("div")
//     	let text = document.createTextNode(`the customer wants a ${size} size ${one} ${two} and ${three}`)


//     	  newDiv.appendChild(text)
//     	  document.body.appendChild(newDiv)
//      })
//         addIngredients("gin", "tonicWater", "lime")

// })
//    makeBar("medium")

   // Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

 const makeBar = ((size) => {
    
    let ingredients = []

     const addIngredients = (one, two, three) => {
     	const juiceContent = (`${one}, ${two}, ${three}`)
     	ingredients.push(juiceContent)
    }

      const displayIngredients = () => {  
       let newDiv = document.createElement("div")
       let text = document.createTextNode(`the customer wants a ${size} size ${ingredients}`)                                     
       
          newDiv.appendChild(text)
    	  document.body.appendChild(newDiv)
     }
      addIngredients("gin", "tonicWater", "lime")
      addIngredients("ice", "sugar", "straw")
      displayIngredients() 

})
   makeBar("medium")