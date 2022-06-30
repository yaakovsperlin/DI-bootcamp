// function playTheGame() {
// 	let answer = "yalla"
// 	if (confirm(answer) == false) {
//   		alert(answer) = "no problom, goodbye.";
// 	} 
// 	else {
//   		let prompt = prompt("can u type a number between 0 and 10")
//  		let numberHolder = number(prompt)
//       // if (numberHolder = NaN){


//   }

// }
// }
    let computerNumber = Math.floor((Math.random() * 10) + 1);

function playTheGame() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == false) {
    alert("no problem goodbye.")
  } else{
     let num = promptNumber()
     
      while (matchNumber(num,computerNumber)) {
        num = promptNumber();
        
  	}  
  }

}
 

function promptNumber(){
	let userNumber = prompt("please type in a number between zero and ten!")
     let numberHolder = Number(userNumber)
     while(getNumber(numberHolder)){
         promptNumber()
  	 }
  	 return numberHolder
          
}

function getNumber(numberHolder) {
    if(isNaN(numberHolder)) {
       alert("sorry try again")
       return true
     }
       return false
 }
function matchNumber(numberHolder, computerNumber){
	if (numberHolder == computerNumber) {
		alert("winner")
		return false;
	}
	else if (numberHolder > computerNumber) {
		alert("to big")
		return true
	}else if (numberHolder < computerNumber) {
		alert("to small")
		return true
	}
}

  




