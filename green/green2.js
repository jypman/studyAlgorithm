function solution(s) {
    let goodStrArray = []
    const goodCharCount = [...new Set(Array.from(s))].length
    Array.from(s).forEach((item, index) => {
        let normalS = item
        for (let i = index+1; i < s.length; i++) {
            normalS += s[i]
            goodStrArray.push(
                Array.from(normalS).length > [...new Set(Array.from(normalS))].length
                    ? null
                    : normalS
            )
        }
    })
    const finalGoodStrCount = [... new Set(goodStrArray.filter(item => item !== null))].length
    const answer = finalGoodStrCount + goodCharCount
    return answer
}

solution("abac")