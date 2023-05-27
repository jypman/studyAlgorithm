// 피로도

function solution(k, dungeons) {
  let cases = [];

  permutation(dungeons, dungeons.length).forEach((dun) => {
    let curFatigue = k;
    let count = 0;

    dun.forEach(([min, consume]) => {
      if (curFatigue >= min) {
        curFatigue -= consume;
        count++;
      }
    });

    cases.push(count);
  });

  return Math.max(...cases);
}

function permutation(array, count) {
  if (count === 1) {
    return array.map((num) => [num]);
  }

  let result = [];

  array.forEach((elem, index) => {
    const rest = array.filter((_, idx) => index !== idx);
    const perm = permutation(rest, count - 1);
    const combine = perm.map((el) => [elem, ...el]);
    result.push(...combine);
  });

  return result;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
