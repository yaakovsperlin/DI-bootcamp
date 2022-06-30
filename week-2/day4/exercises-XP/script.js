//  // Exercise 1 : Information


function infoAboutMe(){
	let myAge = "22,";
	let myHeight = "15,";
	if (true) {
		return `my age is ${myAge} and my mom is ${myHeight}`
	}else{
		return false
	}
}
let a = infoAboutMe()
console.log(a)

Part II : function with three parameters

function infAboutPerson(personName, personAge, personFavoriteColor) { 
	let sentence = (`my name is ${personName} my age is ${personAge} and my favorite color is ${personFavoriteColor}:`)
	return sentence
}

   let a = infAboutPerson("sara", 22, "red",)
   let b = infAboutPerson("ben", 40, "blue,")
    console.log(a)
    

     // Exercise 2 : Tips

function calculateTip(){
	let bill = prompt("how much was the bill?");
	let under = Number(bill);
	if (under < 50) {
		under = under*1.4
		return (`your bill plus tax is ${under} thank you`)
   }else if (under > 50 && under <200){
     under = under*1.3
     return(`your bill plus tax is ${under} thank you`) 
   }else if(under > 200){
     under = under *1.2
     return(`your bill plus tax is ${under} thank you`)
   }
}
   let pleaseWork = calculateTip() 
   alert(pleaseWork)console.log(b)


// Exercise 3 : Find The Numbers Divisible By 23


// function twenty() {
// 	let sum =0;


// for(let i =0;  i < 500; i++) {

//   if (i %23 ==0) {
//   	sum = sum+i;
//   	
//   	}
	
// 	}
// 	console.log('Sum:',sum);

// }

// 	return sum

// let totalSum = sum 
// console.log(totalSum)
// // twenty()



// 🌟 Exercise 4 : Shopping List

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana","orange","apple",]

function myBill(){
	let price = 0;
	if (stock.banana > 0) {
       price += prices.banana 
	}
	if (stock.orange > 0) {
		price += prices.orange
	}
	if (stock.apple > 0) {
		price += prices.apple
	}
	return price 
	
}
let yallaWork = myBill()
	console.log(yallaWork) 


