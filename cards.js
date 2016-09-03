var inputText = document.getElementById("input");
var createButton = document.getElementById("create");
var outputText = document.getElementById("output");

function createCard(){
	var inputDiv = inputText.value;
	outputText.innerHTML += `<div id="${inputDiv}">${inputDiv}</div>`;
	console.log("new div ID: "+inputDiv);

}
	// var deleteButton = document.getElementById("delete");
	// deleteButton.addEventListener("click", function(){
	// 	var deleteCardDiv = event.target.parentNode;
	// 	console.log(deleteCardDiv);
	// 	if(deleteCardDiv.parentNode){
	// 		deleteCardDiv.parentNode.removeChild(deleteCardDiv);
	// 	}
	// });

function deleteCard(e){
	console.log(e.target);
	// var parent = document.getElementById("output");
	var parent = document.getElementsByTagName("div");
	var child = document.getElementById("delete");
	if (parent.parentNode) {
		parent.parentNode.removeChild(child); 
	}	

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
