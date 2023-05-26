// 의상

function solution(clothes) {
  const table = new Map();

  clothes.forEach(([name, type]) => {
    if (table.has(type)) {
      table.set(type, [...table.get(type), name]);
    } else {
      table.set(type, [name]);
    }
  });

  if (table.size === 1) return clothes.length;

  return (
    [...table.entries()].reduce(
      (acc, [_, clothing]) => acc * (clothing.length + 1),
      1
    ) - 1
  );
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
