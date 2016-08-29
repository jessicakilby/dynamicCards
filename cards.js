var inputText = document.getElementById("input");
var createButton = document.getElementById("create");
var outputText = document.getElementById("output");

function createCard(){
	var grabText = inputText.value;
	console.log(grabText);
	outputText.innerHTML += "<div>"+grabText+"</div>";
}

createButton.addEventListener("click", createCard);

// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.