// 베스트 앨범

function solution(genres, plays) {
  const table = new Map();

  genres.forEach((genre, index) => {
    const elem = { index: index, val: plays[index] };
    if (table.has(genre)) {
      table.set(genre, [...table.get(genre), elem]);
    } else {
      table.set(genre, [elem]);
    }
  });

  return [...table.entries()]
    .sort((a, b) => {
      const prev = a[1].reduce((acc, cur) => acc + cur.val, 0);
      const next = b[1].reduce((acc, cur) => acc + cur.val, 0);
      return next - prev;
    })
    .map((elem) =>
      elem[1]
        .sort((a, b) => b.val - a.val)
        .slice(0, 2)
        .map((el) => el.index)
    )
    .flat();
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
