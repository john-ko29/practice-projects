const deck = [];

const players = [
  { name: 'John', hand: '' },
  { name: 'David', hand: '' },
  { name: 'Eric', hand: '' },
  { name: 'Kevin', hand: '' }
];

start();

function start() {
  createDeck(deck);
  const shuffledDeck = shuffle(deck);
  dealCards(shuffledDeck);
  compare(players);
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
  for (let i = 0; i < players.length; i++) {
    const hand = [];
    for (let k = 0; k < 13; k++) {
      hand[k] = deck.pop();
    }
    players[i].hand = hand;
  }
  console.log(players);
}

function compare(players) {
  const topCard = [];
  let position = 0;
  for(let i = 0; i < players.length; i++) {
    topCard[i].hand = players[i].hand.pop();
  }
  console.log(topCard)
  const currentScores = rankCards(topCard)
  let highestCard = currentScores[0];
  for (let i = 1; i < currentScores.length; i++)  {
    if(highestCard < currentScores[i]) {
      highestCard = currentScores[i]
      position = i
    }
  }
  winResult(position, currentScores)
}

function winResult(post, scores) {
  for (let i = 0; i < scores.length; i++) {
    players[post]  = scores.pop();
  }
  console.log(players)
}

function rankCards(cards) {
  let score = 0;
  const playerScore = [];
  for (let i = 0; i < cards.length; i++) {
    switch (cards[i]) {
      case 'Ace':
        score += 11;
        break;
      case 'Jack':
      case 'Queen':
      case 'King':
        score += 10;
        break;
      default:
        score += parseInt(cards[i]);
    }
    playerScore.push(score);
  }
  console.log(playerScore)
  return playerScore;
}
