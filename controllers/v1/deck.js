const suits = [
  {
    suit: "diamonds",
    color: "red",
  },
  {
    suit: "hearts",
    color: "red",
  },
  {
    suit: "clubs",
    color: "black",
  },
  {
    suit: "spades",
    color: "black",
  },
];

const values = [
  {
    name: "king",
    value: 13,
  },
  {
    name: "queen",
    value: 12,
  },
  {
    name: "jack",
    value: 11,
  },
  {
    name: "10",
    value: 10,
  },
  {
    name: "9",
    value: 9,
  },
  {
    name: "8",
    value: 8,
  },
  {
    name: "7",
    value: 7,
  },
  {
    name: "6",
    value: 6,
  },
  {
    name: "5",
    value: 5,
  },
  {
    name: "4",
    value: 4,
  },
  {
    name: "3",
    value: 3,
  },
  {
    name: "2",
    value: 2,
  },
  {
    name: "ace",
    value: 1,
  },
];

const buildDeck = (req, res, next) => {
  req.info.body.deck = suits.flatMap((suitObj) =>
    values.map((valueObj) => ({
      ...suitObj,
      ...valueObj,
    }))
  );
  next();
};

const shuffleDeck = (req, res, next) => {
  const shuffledDeck = [];
  const clonedDeck = [...req.info.body.deck];

  while (clonedDeck.length > 0) {
    shuffledDeck.push(
      ...clonedDeck.splice(Math.floor(Math.random() * clonedDeck.length), 1)
    );
  }

  req.info.body.deck = shuffledDeck;

  next();
};

module.exports = {
  buildDeck,
  shuffleDeck,
};
