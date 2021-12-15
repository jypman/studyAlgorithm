function solution(paper) {
    const sortArray = [...paper].sort((a, b) => {return b-a})
    let resultArray = []
    for (let index in sortArray) {
        const precedenceEA = parseInt(index) + 1
        let precedenceQuotation = 0
        for (let i = 0; i < precedenceEA; i++) {
            precedenceQuotation += sortArray[i]
        }
        resultArray.push({
            g : precedenceEA,
            correctCondition : precedenceEA * precedenceEA <= precedenceQuotation
        })
    }
    console.log(resultArray)
    const answer = resultArray.reverse().find(item => {
        return item.correctCondition
    }).g
    return answer;
}

const a = [1, 0, 0, 3, 0, 1]
solution(a)
