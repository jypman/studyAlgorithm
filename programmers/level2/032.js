// 할인 행사

function solution(want, number, discount) {
  const dayCount = 10;
  let answer = 0;
  let startIndex = 0;

  const wantObj = want.reduce((acc, cur, index) => {
    acc[cur] = number[index];
    return acc;
  }, {});

  while (startIndex + dayCount <= discount.length) {
    const discountObj = discount
      .slice(startIndex, startIndex + dayCount)
      .reduce((acc, cur) => {
        if (acc[cur]) {
          acc[cur] += 1;
        } else {
          acc[cur] = 1;
        }
        return acc;
      }, {});

    startIndex++;

    const isAvailable = Object.entries(discountObj).every(
      ([discountName, discountEA]) => wantObj[discountName] === discountEA
    );

    if (isAvailable) answer++;
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); // 3

console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
); // 0
