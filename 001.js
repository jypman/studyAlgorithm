// k번째 수 - 정렬
const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2,5,3],[4,4,1],[1,7,3]]

function solution(array, commands) {
    return commands.map(
        arr => {
            const [min, max, select] = arr
            const sort_arr = array.slice(min - 1, max).sort((a, b) => a - b);
            return sort_arr[select - 1];
        });
}
console.log('K번째의 수는?',solution(array, commands))
