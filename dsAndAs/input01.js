// 입력이 끝난 후 ctrl + d를 눌러야 입력 종료가 된다.
// fs의 모듈을 사용해서 파일 읽기 혹은 표준 입력(별도의 파일을 읽지 않고 본 파일에서 입력 받기) 등을 받을 수 있다.
// 만약 표준 입력을 받을 경우 fs.readFileSync의 첫번째 인자에 숫자 0을 입력한다.
// 이것은 표준입력인 stdin(standard input)을 의미하기 때문이다.
// fs.readFileSync의 인자 중에서 0만 입력한 경우 입력값이 buffer로 나온다.
// 따라서 두번 째 인자 값에 'utf-8'을 넣거나 입력값에 .toString()을 추가로 입력하여 문자열로 변환해준다.
// 참고로 fs.readFileSync의 첫번째 인자에 '/dev/stdin'이 들어가는 경우가 있다.
// 이것은 숫자 0과 같은 의미이다.
const fs = require('fs');
let input = fs.readFileSync(0,"utf-8").split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(input);
console.log(a+b);