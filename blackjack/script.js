const deck = []
const player = {}

start();

function start() {
  createDeck(deck);
  const shuffledDeck = shuffle(deck);
  console.log(shuffledDeck);
  dealCards(shuffledDeck);
  checkScore(player);
}

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

function dealCards(deck) {
  const hand = [];
    for (let k = 0; k < 2; k++) {
      hand[k] = deck.pop();
    }
    player.hand = hand;
  console.log(player);
}

function checkScore(player) {
  let score = 0;
  for (let i = 0; i < player.hand.length; i++) {
    switch (player.hand[i].rank) {
      case 'Ace':
        score += 11;
        break;
      case 'Jack':
      case 'Queen':
      case 'King':
        score += 10;
        break;
      default:
        score += parseInt(player.hand[i].rank);
    }
  }
  player.score = score;
  console.log(score);
  console.log(player);
}

function drawAgain(input, deck) {
  if (input === "Yes") {
    player.hand.push(deck.pop());
  }
}

function checkStatus(player) {
  if (player.score > 21 ) {
    console.log("You lose");
  } else if (player.score === 21 || player.hand.length === 5)  {
    console.log("You Win");
  } else {
    console.log("Draw Again?")
  }
}
