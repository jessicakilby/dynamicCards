var inputText = document.getElementById("input");
var createButton = document.getElementById("create");
var outputText = document.getElementById("output");

function createCard(){
	var inputDiv = inputText.value;
	outputText.innerHTML += `<div id="${inputDiv}">${inputDiv}<button onclick="deleteCard()" id="delete">Delete Card</button></div>`;
	console.log(inputDiv);
}

function deleteCard(){
	var parent = document.getElementById("output");
	var child = document.getElementsByTagName("div");
	parent.parentNode.removeChild(child); 
	//Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'
	console.log("deleted");
}

function enterKeyPressed(keypress){
	if (keypress.which === 13) {
		createCard();
		inputText.value = "";
	}
}

createButton.addEventListener("click", createCard);
document.addEventListener("keypress", enterKeyPressed)
