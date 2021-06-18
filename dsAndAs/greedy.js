// 욕심쟁이 알고리즘 (예시 : 최소동전 교환문제)

function MinCoinChange(coins) {
    let COINS = coins;
    this.makeChange = function(amount){
        let change = [],
            total = 0
        for (let i = COINS.length - 1; i >= 0 ; i--) {
            let COIN = COINS[i]
            // 교환할 동전 중 순차적으로 가장 금액이 큰 동전을 하나씩 추가할 때 주어진 금액을 넘는 경우는 있어선 안되기 때문에 반복문을 멈춘다.
            while (total + COIN <= amount){
                change.push(COIN)
                total += COIN
            }
        }
        return change;
    }
}

const minCoinChange = new MinCoinChange([1, 3, 4])
console.log(minCoinChange.makeChange(6))