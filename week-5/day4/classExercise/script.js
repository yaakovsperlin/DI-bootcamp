// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject (use the endWith string method)
// else resolve with the verb
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"


async function famousPersons (fnOne, fnTwo){
	
	if(typeof fnOne !== "string" || typeof fnTwo !== "string"){
		throw new Error ("u are not putting a string")
	}else{
      return [fnTwo, fnOne]
	}

} 


// .then(async => console.log(async))
// .catch(err => console.log(err))

async function getNoun(noun){
	
	if(noun.length >= 4){
		return noun
	}else{
	   throw new Error ("to small")
	}
}
async function getCity(city){
	if(city.charAt(0) === city.charAt(0).toUpperCase()){
		return city
	}else{
		throw new Error ("to small")
	}
}
async function getSentence(){
 try{  
	let nameOne = await famousPersons("jacob","beyonce")
	let noun = await getNoun("heyhey")
	let city = await getCity("Montreal")
	return `${nameOne[0]} is ${noun} and${nameOne[1]} hes from ${city}`
  } catch(error){
  	console.log(error.message)
  }
}
console.log(getSentence())
