var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];


cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardOne); 

cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardTwo); 


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	window.alert("You found a match!");
} else {
	window.alert("Sorry, try again.");
}
