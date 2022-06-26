

const birthYear = 2000;
let futureYear = 2050
let futureAge  = futureYear - birthYear
console.log (`in ${futureYear} i will be ${futureAge}`)

let colors = ["blue", "yellow", "green"]; 
console.log(typeof(colors)) // object

let pets = ["cat", "dog", "fish", "rabbit", "cow,"];
console.log (pets[1]); 
console.log (pets);
pets.splice(4, 1, "horse");
console.log (pets);
pets.splice (3,1,);
console.log (pets);
pets.push ("mice")
console.log (pets)

let favoriteFood = "bread";
let favoriteMeal = "lunch";
console.log (`favorite = i like ${favoriteFood} at every ${favoriteMeal}`)

let myWatchedSeries = ["black mirror", "money heist", "the big bag theory"]; 
console.log (myWatchedSeries);

let myWatchedSeriesLength = myWatchedSeries.length; 
console.log (myWatchedSeriesLength)

let myWatchedSeriesSentence = `i watched ${myWatchedSeries[0]}, and ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`

console.log (`i watched ${myWatchedSeriesLength}: ${myWatchedSeries}`)
console.log (myWatchedSeries);
console.log (myWatchedSeries);
myWatchedSeries.push (3, 1, "billions");
console.log (myWatchedSeries);
myWatchedSeries.unshift("southPark")
console.log (myWatchedSeries);
console.log (myWatchedSeries);
myWatchedSeries.splice (1,1,)
console.log (myWatchedSeries);
myWatchedSeries.splice (3,4,)
console.log (myWatchedSeries);


// let tempratures = "30 celcius";

// const celcius = 22 
// const farenheit = (celcius / 5 ) * 9 + 32;
// console.log (celcius + "°C is " + farenheit + "°F.")

let celcius = 30 
let fahrenheit = (celcius / 5 ) * 9 + 32;
console.log(`${celcius}°C is ${fahrenheit}°F`)

let c;
let a = 34;
let b = 21;
 //first expression
    // Prediction: 55
 console.log(a+b)
    // Actual: 55

 a = 2;
 console.log(a+b) //second expression
    // Prediction: 57

    // Actual:
    console.log(3 + 4 + '5');
 













