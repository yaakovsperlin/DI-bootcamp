// 🌟 Exercise 1: Your Favorite Food
let favoriteFood = "bread";
console.log (favoriteFood);
let favoriteMeal = "lunch";
console.log (favoriteMeal);
console.log (`favorite = i like ${favoriteFood} at every ${favoriteMeal}`)
console.log (`i like ${favoriteFood} at every ${favoriteMeal}`)


// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeries = ["black mirror", "money heist", "the big bag theory"]; 
console.log (myWatchedSeries);

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length; 
console.log (myWatchedSeriesLength)


// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = `i watched, ${myWatchedSeries[0]}, and, ${myWatchedSeries[1]}, and, ${myWatchedSeries[2]}`
console.log (myWatchedSeriesSentence)

// Console.log a sentence using both of the variables created above
console.log (`i watched ${myWatchedSeriesLength} series: ${myWatchedSeries}`)

// Part II
myWatchedSeries.splice (2,1, "friends")
console.log (myWatchedSeries) 
myWatchedSeries.push ("billions");
console.log (myWatchedSeries)
myWatchedSeries.unshift("southPark")
console.log (myWatchedSeries) 
myWatchedSeries.splice (1,1,)
console.log (myWatchedSeries)
console.log (myWatchedSeries[1][2])
console.log (myWatchedSeries);

 // Exercise 3 : The Temperature Converter
let celcius = 30 
let fahrenheit = (celcius / 5 ) * 9 + 32;
console.log (celcius)
console.log(`${celcius}°C is ${fahrenheit}°F`)

 // Exercise 4 : Guess The Answers #1
 let c;
let a = 34;
let b = 21;
 //first expression
    // Prediction: 55 simply 34 plus 21
 console.log(a+b)
    // Actual: 55

 a = 2;

console.log(a+b) 
//second expression
 // Prediction: 57
// Actual:23

// realized after i changed 34 in 'a' to 2

// What is the value of c?  null or undefined 
    
    console.log(3 + 4 + '5'); 
    // result 75







