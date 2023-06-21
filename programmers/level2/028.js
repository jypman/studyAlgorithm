function solution(people, limit) {
  const sortPeople = [...people].sort((a, b) => a - b);

  let result = 0;

  while (sortPeople.length > 0) {
    let p = sortPeople.pop();

    if (p + sortPeople[sortPeople.length - 1] <= limit) {
      sortPeople.pop();
    } else if (p + sortPeople[0] <= limit) {
      sortPeople.shift();
    }

    result++;
  }

  return result;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
