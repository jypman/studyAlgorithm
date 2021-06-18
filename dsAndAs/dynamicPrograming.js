// 동적 프로그래밍 (예시 : 최소동전 교환문제)

function MinCoinChange(coins) {
    const COINS = coins // 1
    let cache = {} // 2
    this.makeChange = function (amount) {
        const me = this;
        if(!amount) return [] // 3
        if(cache[amount]) return cache[amount] // 4
        let min = [], newMin, newAmount;
        for (let i = 0; i < COINS.length; i++) { // 5
            const COIN = COINS[i]
            newAmount = amount - COIN  // 6
            if(newAmount >= 0) newMin = me.makeChange(newAmount) // 7
            if(newAmount >= 0 // 8
                && (newMin.length < min.length - 1 || !min.length) // 9
                && (newMin.length || !newAmount)){ // 10
                min = [COIN].concat(newMin) // 11
                console.log('동전으로 교환할 경우 :', min, '|', '주어진 금액 :', amount)
            }
        }
        return (cache[amount] = min) // 12
    }
}

const minCoinChange = new MinCoinChange([1, 3, 4])
console.log(minCoinChange.makeChange(6))