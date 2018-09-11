



var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function() { 
};

var flipCard = function(cardId) {

console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

checkForMatch();

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

}; 

flipCard(0);
flipCard(2);


// function that stores steps related to selecting or flipping a card
// add the card selected to the aray when it has been flipped - if it matches the other card, then that's a match


//group logic to check if two cards match- giv euser feed back so they know 




