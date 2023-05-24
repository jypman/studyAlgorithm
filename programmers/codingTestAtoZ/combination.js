function combination(numbers, pickCount) {
  if (pickCount === 1) return numbers.map((num) => [num]);

  let result = [];

  numbers.forEach((num, index) => {
    const rest = numbers.slice(index + 1);

    const com = combination(rest, pickCount - 1);

    const combine = com.map((elem) => [num, ...elem]);

    result.push(...combine);
  });

  return result;
}

console.log(combination([1, 2, 3, 4, 5], 3));
