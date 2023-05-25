// 폰켓몬

function solution(nums) {
  const pickableCount = nums.length / 2;
  const array = [...new Set(nums)];
  return array.length < pickableCount ? array.length : pickableCount;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
