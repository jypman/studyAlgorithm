function solution(paper) {
    const sortArray = [...paper].sort((a, b) => {return b-a})
    let resultArray = []
    for (let index in sortArray) {
        const precedenceEA = sortArray.length - index
        let precedenceQuotation = 0
        for (let i = precedenceEA - 1; i >= 0; i--) {
            precedenceQuotation += sortArray[i]
        }
        resultArray.push({
            g : precedenceEA,
            correctCondition : precedenceEA * precedenceEA <= precedenceQuotation
        })
    }
    console.log(resultArray)
    const answer = resultArray.find(item => {
        return item.correctCondition
    }).g
    return answer;
}

const a = [1, 0, 0, 3, 0, 1]
solution(a)

