let div = document.getElementById(`container`)
console.log(div)

let ul1 = document.getElementsByTagName(`.list`)
// ul1.firstElementChild.textContent = "yaakov" 
// + ul1.firstElementChild.textContent
document.getElementsByTagName(`li`)[1].textContent = "richard"

document.getElementsByTagName(`li`)[1].textContent = "yaakov is richard"


const li = document.getElementsByTagName(`li`)
for(i = 0; i < li.length; i++){
	if(li[i].textContent === "David" || li[i].textContent === "John"){
      li[i].textContent = "yaakov"
	}
}



let li2 = document.getElementsByTagName(`ul`)[1];
// console.log(li2.firstElementChild.nextElementSibling)

li2.removeChild(li2.children[1])























 

