// 롤케이크 자르기
function solution(topping) {
  const [b1Dict, b2Dict, b1Arr, b2Arr] = [new Set(), new Set(), [], []];

  topping.forEach((t1, index) => {
    b1Dict.add(t1);
    const t2 = topping.at(-index);
    if (index > 0) b2Dict.add(t2);

    b1Arr.push(b1Dict.size);
    b2Arr.push(b2Dict.size);
  });

  return b1Arr.reduce(
    (acc, cur, index) => (cur === b2Arr.at(-index - 1) ? acc + 1 : acc),
    0
  );
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2
console.log(solution([1, 2, 3, 1, 4])); // 0
