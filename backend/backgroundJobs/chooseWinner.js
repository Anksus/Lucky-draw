//NOTE:: Logic to get winner randomly.
const chooseWinner = (participants) => {
  const winner = participants[Math.floor(Math.random() * participants.length)];
  return winner;
};

module.exports = chooseWinner;
