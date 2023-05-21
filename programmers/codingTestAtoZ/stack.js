function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  const stack = [];

  for (const chr of s) {
    if (chr === "(") {
      stack.push(chr);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
