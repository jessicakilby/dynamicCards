var inputText = document.getElementById("input");
var createButton = document.getElementById("create");
var outputText = document.getElementById("output");
var deleteButton = document.getElementById("delete");

var counter = 0;
function createCard(){
	var inputDiv = inputText.value;
	counter += 1;
	outputText.innerHTML += `<div id="${counter}">${inputDiv}</div>`;
	console.log(`Div ID: "${counter}" for input: ${inputDiv}`);
}
	

function deleteCard(){

	console.log("delete card function");
}


function enterKeyPressed(keypress){
	if (keypress.which === 13) {
		createCard();
		inputText.value = "";
	}
}

createButton.addEventListener("click", createCard);
deleteButton.addEventListener("click", deleteCard);
document.addEventListener("keypress", enterKeyPressed)

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.