// 달리기 경주

function solution(players, callings) {
  const tempPlayers = [...players];
  const playersPositionInfo = {};

  players.forEach((player, index) => {
    playersPositionInfo[player] = index;
  });

  callings.forEach((player) => {
    const playerIndex = playersPositionInfo[player];
    const prevPlayer = tempPlayers[playerIndex - 1];
    tempPlayers[playerIndex - 1] = player;
    tempPlayers[playerIndex] = prevPlayer;

    playersPositionInfo[player] -= 1;
    playersPositionInfo[prevPlayer] += 1;
  });

  return tempPlayers;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
