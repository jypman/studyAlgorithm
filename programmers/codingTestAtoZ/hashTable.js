function solution(genres, plays) {
  const hashTable = new Map();
  const maxSingCountPerGenre = 2;

  // 특정 장르에 해당하는 노래들의 재생수와 고유번호를 원소로 하는 배열을 값으로 할당
  // 만약 장르가 겹친다면 속한 노래들의 재생수와 고유번호를 원소로 하는 배열에 새로운 원소로 추가한다.
  // 노래 재생수가 많은 순으로 정렬한다.
  // 즉 해시충돌 시 체이닝 기법으로 해결한다는 의미이다.
  genres.forEach((genre, index) => {
    if (hashTable.has(genre)) {
      hashTable.set(
        genre,
        [...hashTable.get(genre), { key: index, playCount: plays[index] }].sort(
          (a, b) => b.playCount - a.playCount
        )
      );
    } else {
      hashTable.set(genre, [{ key: index, playCount: plays[index] }]);
    }
  });

  return (
    [...hashTable.values()]
      // 속한 노래가 많이 재생된 장르순으로 정렬한다.
      .sort((a, b) => {
        return (
          b.reduce((result, cur) => {
            return result + cur.playCount;
          }, 0) -
          a.reduce((result, cur) => {
            return result + cur.playCount;
          }, 0)
        );
      })
      // 장르당 최대 두개까지만 선정할 수 있다.
      // 노래의 고유번호만 파싱한다.
      .map((elem) => {
        return elem.slice(0, maxSingCountPerGenre).map((val) => val.key);
      })
      // 장르를 구분하는 이중 배열을 없애준다.
      .flat()
  );
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
