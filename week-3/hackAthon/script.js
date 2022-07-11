let listTasks = [];

let form = document.forms[0];

// function addTask(event){
// 	event.preventDefault();
// 	let input = 
// }

form.addEventListener("submit", addTask);

function addTask (ev) {
	ev.preventDefault(); //prevent the form from submitting
	let showInput = {
		fname : form.elements.fname.value
	}
		
    listTasks.push(showInput);
    console.log(form)

    showtask(showInput)
}


function showtask(showInput){
		let div = document.getElementById("listTasks");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let checkBox = document.createElement("input");
        let text = document.createTextNode(`${showInput["fname"]}`);
        checkBox.setAttribute("type", "checkbox");
        li.setAttribute("id", "liFor");
		li.appendChild(checkBox)
		li.appendChild(text);
		ul.appendChild(li);
		div.appendChild(ul);
}














