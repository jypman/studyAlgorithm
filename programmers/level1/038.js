// 푸드 파이터 대회
function solution(food) {
  const leftFoods = food.reduce((acc, cur, index) => {
    const foodCount = cur % 2 === 1 ? cur - 1 : cur;
    let foodIndexes = "";

    for (let i = 0; i < foodCount / 2; i++) {
      foodIndexes += `${index}`;
    }

    return `${acc}${foodIndexes}`;
  }, "");

  return `${leftFoods}0${leftFoods.split("").reverse().join("")}`;
}

console.log(solution([1, 3, 4, 6], "1223330333221"));
console.log(solution([1, 7, 1, 2], "111303111"));
