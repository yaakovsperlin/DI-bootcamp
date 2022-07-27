// 🌟 Exercise 1: Conversion
// Instructions

async function getGif (){
    let result = await fetch("https://www.swapi.tech/api/starships/9/")
      if (result.status >=400 && result.status <= 600){
        throw Error ("try again bad connection")
    } else{
        return result.json()
   }
}
console.log(getGif())


// 🌟 Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}
// answer

// it would say first calling  then resolved because beacuse the console.log is before the await

asyncCall();


