// 햄버거 만들기

function solution(ingredient) {
  let result = 0;
  let tempIngredient = [...ingredient];
  let index = 0;
  const hamburger = "1231";

  while (index + hamburger.length - 1 < tempIngredient.length) {
    if (
      tempIngredient[index] === 1 &&
      tempIngredient[index + 1] === 2 &&
      tempIngredient[index + 2] === 3 &&
      tempIngredient[index + 3] === 1
    ) {
      result++;
      tempIngredient.splice(index, hamburger.length);
      if (index !== 0) index = index - hamburger.length - 1;
    } else {
      index++;
    }
  }

  return result;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
