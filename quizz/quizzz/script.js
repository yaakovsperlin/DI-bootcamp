
// 1. How to access the second element of the array `
let arr = [3, 7, 10]
 
 console.log(arr[1])

// 2. For the code below, what does `arrNums.splice(2, 0)` return?

//     ```javascript
    let arrNums = [1, 2, 3, 4, 5];
   // honestly dont think it will do anything but not so sure why
   arrNums.splice(2, 0)
   console.log(arrNums)

// 3. What is the result of the following code :

//     ```javascript
    const oneTwoThree = [1, 2, 3]

    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

    // Answer should be 

    console.log(all)

  // need to review though 

// 4. What does the following code print to the console?

   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   } 

   golf.clubs.high_end = "callaway";

   // changing the value

   console.log(golf.clubs.high_end);


   
// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

// function expression, call it by expressing a value to the parameters when you call it 


    // const x = function(a, b){
    //    return a*b;
    // }
    // console.log(x(5, 5))
    



// 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

   // they are only global if they are outside a function because then they are in the "global" scope, because anything inside of a 
   // function is only relevent to to whatever is in the scope of the function so anthing outside has no relation 
    
    function x() {
    	// no return?
    	a = 5;
    }
     
  

// #### Functions

// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
// yes we can!!! why are the brackets for the function after hello message, and not when we call greeting and the put the 
// brackets after "sayHello"?
// im switching it to after say hello, my brainCells() are still wrapping around parameters 

    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage + name);
    }
    
    // will return " hello, javascript"

    greeting(sayHello(), "JavaScript!");
//     ```
// 8. Transform this function into an arrow function


      const sum = (num1, num2) => num1 + num2
      
      sum(40,2)
      // sum(42,0)
      console.log("the answer to everything is", sum(42,1))


// 9. What does the following code print to the console? Explain the process and concept behind it

  // your calling foo which runs the function outer function foo() which then calls another function called bar() 
  // which returns "Poppin' bottles"
     
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());


// #### DOM

// 10. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click
//       ☐ onclick
//do click!! then call function  
// onclick is in html no ?



// 11. Does the `addEventListener()` method allow you to add many events to the same element?

    // x.addEventListener("mouseover", func1);
    // x.addEventListener("click", func2);
    // x.addEventListener("mouseout", func3);

    // yes absofreakinlutely!!!!
   

// 12. DOM exercise

      // 1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM 
      // with the content "New Paragraph". Use arrow functions

      // 2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
   const btn = document.getElementById("button")
   console.log(btn)
   const changeColor = (e)=>{
   	e.target.style.color = "red"
   	e.target.style.fontSize = "300px"
   }
   
   const addPara =()=>{
   	let p = document.createElement("p")
   	let text = document.createTextNode("new paragraph")
   	p.appendChild(text)
    document.body.appendChild(p)
   	
   	p.addEventListener("mouseover", changeColor)

  }
   btn.addEventListener("click", addPara)

   




// #### Array Methods

// 14. What is the value of `passed` in the following code?

     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     // everything but 42 
     // not sure exactly
     console.log(passed)
     // it returns false because not everything in th earay is over 50



// 15. What does the following code log?


   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   // its going to filter through the array and check if there is anything 
   // over 10 so it will iether return true or those 2 numbers over 10
   console.log(bignums);


// 16. Use a javascript array method to square the value of every element in the array. 


   // const input = [ 1, 2, 3, 4, 5 ];
   // //code
   // console.log(input) // [ 1, 4, 9, 16, 25]
   // // dont know 


// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 


     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
        
        const total =  secondInput.reduce(function(accu, value){
        	return accu + value
        },0)
     
     console.log(total) //42

 

// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

     const input = 'George Raymond Richard Martin';
     const fullName = input.split(' ');
     const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
     console.log(initials)
     // return initials. toUpperCase()

     //code 
     console.log(initials)//'GRRM'


// #### Object and Classes

// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
// refrence
// 19. What will be printed in the console


    // function Item(name, price) {
    //    this.name = name;
    //    this.price = price;
    //    this.displayInfo = function() {
    //    console.log(this.name + " is for $ " + this.price)
    //    }
    // } 

    // const cake = new Item("Chocolate Cake", 10);
    // cake.displayInfo();
    // really dont remeber how "this works"


// 20. Refactor this code using Classes

// #### Promises

// 21. What will be the output and why ? What will be the state of the promise ?

// success in upper case, the first .then takes the resolved promise whuch is success and makes it 
// upperCase 

//     ```javascript
//     Promise.resolve('Success!')
//       .then(data => {
//         return data.toUpperCase()
//       })
//       .then(data => {
//         console.log(data)
//       })
// //    

// 22. What log will be made by the following code, after 2 seconds?


    // const p = new Promise(function(resolve, reject) {
    //    setTimeout(function() {
    //       resolve("OK");
    //    }, 2000);
    // });
    // p.then().then(function(data) {
    //    console.log(data);
    // });
//     ```

// 23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process

//     ```javascript

    // async function f() {
    //   let result = 'first!';

    //   let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('done!'), 1000);
    //   });
    
    //   result = await promise;
    
    //   console.log(result);
    // }
    
    // f();
//     ```

// 24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
//     1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
//     2. Make sure to use try and catch




async function cat(){
   try {
   		const catInfo = await fetch("https://catfact.ninja/fact")
	 	if(catInfo.status >=400 && catInfo.status < 600){
       		throw new Error("bad service try again")
    	} else {
	  		const infoResult = await catInfo.json()
	  	     display(infoResult)
	 	}
	} catch(Error) {
	 	console.log(Error)
	}
	// console.log(infoResult)
	// got stuck here calling display it and it wasnt in the scope
}



async function display(catData){
	try{
       if(catData.status >=400 && catData.status < 600){
       throw new Error("bad service try again")
    }else{
    	let catFact = await catData.fact
          let p = document.createElement("p")
          let text = document.createTextNode(catFact)
          p.appendChild(text)
          document.body.appendChild(p) 
         }
       }catch(Error){
	      console.log(Error)
         }
}
cat()



