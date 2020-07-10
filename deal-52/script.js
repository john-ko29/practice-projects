const players = [
  { name: 'John', hand: '' },
  { name: 'David', hand: '' },
  { name: 'Eric', hand: '' },
  { name: 'Kevin', hand: '' }
];

const deck = [];
const discard = [];

function createDeck(deck) {
  const suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (let k = 0; k < 4; k++) {
    const currentSuit = suit[k];
    for (let i = 1; i < 14; i++) {
      if (i === 1) {
        deck.push({ rank: 'Ace', suit: currentSuit });
      } else if (i === 11) {
        deck.push({ rank: 'Jack', suit: currentSuit });
      } else if (i === 12) {
        deck.push({ rank: 'Queen', suit: currentSuit });
      } else if (i === 13) {
        deck.push({ rank: 'King', suit: currentSuit });
      } else {
        deck.push({ rank: i, suit: currentSuit });
      }
    }
  }
}

function shuffle(deck) {
  var tempArray = [];
  var newArray = [];
  for (let i = 0; i < deck.length; i++) {
    tempArray[i] = deck[i];
  }
  while (tempArray[0]) {
    const randomCard = Math.floor((Math.random() * tempArray.length));
    newArray.push(tempArray[randomCard]);
    tempArray.splice(randomCard, 1);
  }
  return newArray;
}
