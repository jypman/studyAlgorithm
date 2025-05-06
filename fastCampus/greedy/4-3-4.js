/**
 * @see https://www.acmicpc.net/problem/1946
 * */

function solution(persons) {
  const sortedPersons = persons.sort((a, b) => b[0] - a[0]);

  let deletedPerson = 0;

  sortedPersons.forEach(([_, b], index) => {
    const isDelete = sortedPersons.slice(index).some(([_, B]) => b > B);
    if (isDelete) deletedPerson++;
  });

  return persons.length - deletedPerson;
}

console.log(
  solution([
    [3, 2],
    [1, 4],
    [4, 1],
    [2, 3],
    [5, 5],
  ])
); // 4

console.log(
  solution([
    [3, 6],
    [7, 3],
    [4, 2],
    [1, 4],
    [5, 7],
    [2, 5],
    [6, 1],
  ])
); // 3
