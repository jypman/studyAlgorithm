// 소수 찾기

function solution(numbers) {
  let combinedNumbers = [];

  for (let i = 1; i <= numbers.length; i++) {
    combinedNumbers.push(...permutation(numbers.split(""), i));
  }

  const reduceRedundancy = [
    ...new Set(combinedNumbers.map((elem) => elem * 1)),
  ];

  return reduceRedundancy.reduce((acc, cur) => {
    if (cur < 2) return acc;
    let divider = cur - 1;

    while (divider > 1) {
      if (cur % divider === 0) return acc;
      else divider--;
    }
    return acc + 1;
  }, 0);
}

function permutation(numbers, pickCount) {
  if (pickCount === 1) {
    return numbers.map((num) => num);
  }

  let result = [];

  numbers.forEach((num, index) => {
    const rest = numbers.filter((_, id) => index !== id);
    const perm = permutation(rest, pickCount - 1);
    const combine = perm.map((elem) => num.toString() + elem.toString());

    result.push(combine);
  });

  return result.flat();
}
