function permutation(numbers, pickCount) {
  if (pickCount === 1) {
    return numbers.map((num) => [num]);
  }

  let result = [];

  numbers.forEach((num, index) => {
    const rest = numbers.filter((_, id) => index !== id);

    const perm = permutation(rest, pickCount - 1);

    const combine = perm.map((elem) => [num, ...elem]);

    result.push(...combine);
  });

  return result;
}

console.log(permutation([1, 2, 3, 4, 5], 3));
