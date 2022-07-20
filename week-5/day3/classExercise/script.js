// const promises = function(param){
//   return new Promise (function(resolve, reject){
//    setTimeout(() => {
//    	if(typeof param === "string"){
//    		resolve(param.toUpperCase())
//    	}else{
//       reject("nope")
//    	}
//    },2000)
//   })
//  };

// console.log(promises("this is a string"));


let gifbtn = document.getElementById("btn")
btn.addEventListener("click", requestData)

function requestData(search){
  fetch(`https://api.giphy.com/v1/gifs/random?tag=${search}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
  .then(result => {
    if(result.status == 200){
         return result.json()
      }else{
        throw new Error ("not 200")
      }
  })
  .then(gif =>{ 
    console.log(gif)
     const {data:
            {images:
              {original:
                {url}
              }
            }
         } = gif 
    displayData(url)
  })
}

function displayData(data){
  const gifDisplay = document.createElement("img") 
  gifDisplay.setAttribute("src", data)
  document.body.appendChild(gifDisplay)
}

function oneWord(){
  fetch("http://random-word-api.herokuapp.com/word?number=1")
   .then(word => {
      if(word.status == 200){
          return word.json()
        }else{
          throw new Error ("not 200")
        }
       
   })
   requestData(oneWord)
}











 



