// Instructions
// You should use this API: https://www.swapi.tech/ 
// to get the data and update it “randomly” in your 
// website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, 
// birth year, and home world of the character.

// Display the data using AJAX. Make sure to display 
// a loading message as follows:
// You can use any of these animation icons for the loading message.


const btn = document.getElementById("button")
btn.addEventListener("click", displayCharacter)


async function retrieveCharacter(){
	// LOADING HERE WELL ADD LATER 
try{ 
	let randomNum = Math.floor(Math.random() *84 + 1);
	let response = await fetch(`https://www.swapi.tech/api/people/${randomNum}`)
    if(response.status >=400 && response.status < 600){
      throw new Error("bad service try again")
   } else {
      let resultObj = await response.json()
      homeWorld(resultObj.result.properties.homeworld)
      
      return resultObj
      
     }
    } catch(error){
    	console.log(error.message)
    }

}
async function homeWorld(world){
 try{
	let response2 = await fetch(world)
     if(response2.status >=400 && response2.status < 600){
      throw new Error("bad service try again")
   } else {
      let home = await response2.json()
      return home
     }
    } catch(error){
    	console.log(error.message)
    }

}

async function displayCharacter(){
   let retrieve = await retrieveCharacter()
   const properties = retrieve.result.properties
   let home = await homeWorld(properties.homeworld)
   const api2 = home.result.properties.name
   console.log(api2)
   // const character = retrieve["result"]["properties"]["birth_year"];

   const characterArr = [properties.birth_year, properties.name, properties.gender, properties.height]
  
   const name1 = document.getElementById("name")
   name1.textContent = `name: ${properties.name}`

   const height1 = document.getElementById("height")
   height1.textContent = `height: ${properties.height}`

   const gender1 = document.getElementById("gender")
   gender1.textContent = `gender: ${properties.gender}`

   const birth1 = document.getElementById("birth-year")
   birth1.textContent = `birth year: ${properties.birth_year}`
   
   const world = document.getElementById("home-world")
   world.textContent = `planet: ${properties.birth_year}`
 }



 // })
// }		

   // const name = document.getElementById("name")
   // const textname = document.createTextNode



















// const name = document.getElementById("name")
// const height = document.getElementById("height")
// const gender = document.getElementById("gender")
// const birthYear = document.getElementById("birth-year")
// const homeWorld = getElementById("home-world")