function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    const result = (arr1[i] | arr2[i]).toString(2);
    const frontBlank = " ".repeat(n - result.length);
    const replaceResult = result.replace(/0/g, " ").replace(/1/g, "#");
    answer.push(frontBlank + replaceResult);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
// [ '######', '###  #', '##  ##', ' #### ', ' #####', '### # ' ]
