document.forms[0].addEventListener("submit", func);

function func(event){
	event.preventDefault()
	let inputs = new FormData(event.target)
	let inputsObj = Object.fromEntries(inputs.entries())
	let newinputs = JSON.stringify(inputsObj)
	console.log (newinputs) 
}