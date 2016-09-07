var inputText = document.getElementById("input");
var createButton = document.getElementById("create");
var outputText = document.getElementById("output");
var deleteListener = document.getElementsByClassName("delete");
var child = document.getElementsByTagName("div");

function createCard(){
	var inputDiv = inputText.value;
	outputText.innerHTML += "<div>" + inputDiv + "<button class='delete'>Delete Card</button></div>";
	deleteListenerEvent();
}

function deleteCard(event){
	var currentCard = event.target.parentElement;
	outputText.removeChild(currentCard);
}

function deleteListenerEvent(){
	for (var i = 0; i < deleteListener.length; i++) {
		var deleteEvent = document.getElementsByClassName("delete");
		for (var h = 0; h < deleteEvent.length; h++) {
			deleteEvent[h].addEventListener("click", deleteCard);
		}
	}
}	


function enterKeyPressed(keypress){
	if (keypress.which === 13) {
		createCard();
		inputText.value = "";
	}
}

createButton.addEventListener("click", createCard);
document.addEventListener("keypress", enterKeyPressed)
