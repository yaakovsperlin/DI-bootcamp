// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// Promise.all([
//   promise1,
//   promise2,
//   promise3
// ]).then((messages) =>{
//    console.log(messages)
// })
// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// const forms = document.querySelector("#form1")
// const btn = document.getElementById("button")
// const searchLat = document.getElementById("searchlat").value
// const searchLng = document.getElementById("searchlng").value



// async function getCity(lat,lng){
//   try{  
//     let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
//     if(response.status >=400 && result.status < 600){
//        throw new Error("bad service try again")
//     } else {
//        const data = await response.json()
//       console.log(data.results.sunrise)
//        return data.results.sunrise

//     }
//    } catch(error){
//     console.log(error)
//    }
//    displayTime(data)
// }


// forms.addEventListener("submit", (e) => {
//   e.preventDefault()
//   getCity(searchLat, searchLng)
// })

// async function displayTime(data){
//   let p = document.createElement("p")
//   let text = document.createTextNode(data)
//   p.appendChild(text)
// }








const forms = document.querySelector("#form1")
const btn = document.getElementById("button")

const searchLat = document.getElementById("searchlat").value
const searchLng = document.getElementById("searchlng").value

const searchLat2 = document.getElementById("searchlat2").value
const searchLng3 = document.getElementById("searchlng3").value



async function getCity(lat,lng,lat2,lng3){
  try{  
    let response1 = await (`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
    let response2 = await (`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng3}`)
     const [city1, city2] = await Promise.all([fetch(response1), fetch(response2)])
     const allResults = await Promise.all([city1.json(), city2.json()])
     console.log(allResults)
   } catch(error){
    console.log(error)
   }   
  }
  

    // if(response.status >=400 && result.status < 600){
    //    throw new Error("bad service try again")
    // } else {
    //    const data = await response.json()
    //   console.log(data.results.sunrise)
    //    return data.results.sunrise 

   //  }
   // } catch(error){
   //  console.log(error)
   // }
//    displayTime(data)
// }


forms.addEventListener("submit", (e) => {
  e.preventDefault()
  getCity(searchLat, searchLng, searchLat2, searchLng3)
})

async function displayTime(data){
  let p = document.createElement("p")
  let text = document.createTextNode(data)
  p.appendChild(text)
}
 

