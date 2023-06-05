// 옹알이

function solution(babbling) {
  let result = 0;
  const myBabbling = ["aya", "ye", "woo", "ma"];

  babbling.forEach((word) => {
    if (
      myBabbling.some(
        (elem) => word.length > word.replaceAll(`${elem}${elem}`, "").length
      )
    )
      return;
    if (myBabbling.includes(word)) return result++;

    let temp = word;

    myBabbling.forEach((myWord) => {
      temp = temp.replaceAll(myWord, " ");
    });

    if (temp.replace(/\s/g, "").length === 0) result++;
  });

  return result;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2

console.log(solution(["mama", "yeye", "woowoo", "ayaaya"])); // 0

console.log(solution(["yayae"])); // 0

console.log(solution(["ayayeayayeaya"])); // 1
