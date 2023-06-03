// 카드 뭉치

function solution(cards1, cards2, goal) {
  const card1Queue = [...cards1];
  const card2Queue = [...cards2];
  const array = [];
  let index = 0;

  while (card1Queue.length !== 0 || card2Queue.length !== 0) {
    const card =
      card1Queue[0] === goal[index] ? card1Queue.shift() : card2Queue.shift();

    if (card === undefined) return "No";

    array.push(card);
    index++;
    if (array.join("") === goal.join("")) return "Yes";
  }

  return "No";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "No"
