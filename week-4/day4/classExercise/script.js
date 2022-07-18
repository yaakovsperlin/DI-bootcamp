// let facts = {
// 	         numPlanets: 8, 
// 	         yearNeptuneDiscovered: 1846
// 	     };
// console.log(facts)
// let {numPlanets, yearNeptuneDiscovered} = facts;
// console.log(numPlanets)



// function getDetails({name, house,  goodstudent,}) {
// 	console.log(name, house, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(numPlanets)
console.log(discoveryYears)
; // ? its going to return the rest of the object keys and value



function getMoreDetails(name, house, friendName, age) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', age : 20
				}
			})

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails(firstname, lastname, locationOne, locationTwo, valueHouses){
	const {first : firstName last: lastName}
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails()



class TV {
	constructer( brand, channel = 1, volume = 50){   
	this.brandTV = brand 
	this.channelTV = channel
	this.volumeTV = volume
  }
    increaseVolume(){
    	this,volume++
    	the new volume is ${this.volumeTV}
    }
}
const samsungTV = new TV("samsung", 3, 45)











































