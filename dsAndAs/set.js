// 집합

function Set() {
    let items = {};
    // 특정 원소가 이미 집합에 포함되어 있는지 여부를 boolean으로 반환하여 확인할 수 있다.
    this.has = function (value) {
        // return value in items; 이것 대신 아래 방법이 가독성 면에서 좋다.
        return items.hasOwnProperty(value)
    };
    this.add = function (value) {
        // 기존에 추가한 원소와 같은 원소를 저장하는 것을 방지하기 위함이다.
        // 그래서 if문으로 새로 추가할 원소가 기존 원소에 이미 저장되어 있는지 확인한다.
        if(!this.has(value)){
            // 키와 값을 동일하게 저장하는 이유는 나중에 값을 찾을 때 편리하기 때문이다.
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        // 특정 원소를 삭제하기 전 해당 원소가 집합에 있는지 확인부터 한다.
        if(this.has(value)){
            delete items[value]
            return true;
        }
        return false;
    };
    // 집합의 원소 갯수를 반환
    this.size = function () {
        return Object.keys(items).length;
    };
    // 집합의 모든 프로퍼티를 추출해 배열 형태로 반환
    this.values = function () {
        return Object.values(items);
    };
    // 집합의 모든 원소를 날리는 메소드
    this.clear = function () {
        items = {}
    };
    // 합집합
    this.union = function (otherSet) {
        // unionSet에 Set 객체를 할당한 이유는 각 집합의 원소를 unionSet의 원소로 추가할 때 중복된 값을 저장하는 것을 방지하기 위함이다.
        let unionSet = new Set();

        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        const otherValues = otherSet.values();
        for (let i = 0; i < otherValues.length; i++) {
            unionSet.add(otherValues[i]);
        }
        return unionSet;
    };
    // 교집합
    this.intersection = function (otherSet) {
        let intersectionSet = new Set();

        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if(otherSet.has(values[i]))
                intersectionSet.add(values[i]);
        }
        return intersectionSet;
    };
    // 차집합 : 첫번쨰 집합에는 있지만 두번째 집합에는 없는 원소
    this.difference = function (otherSet) {
        let differenceSet = new Set();

        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i]))
                differenceSet.add(values[i])
        }
        return differenceSet;
    };
    // 부분집합
    this.subSet = function (otherSet) {
        if(this.size() > otherSet.size())
            return false;
        else {
            const values = this.values();
            for (let i = 0; i < values.length; i++) {
                if(!otherSet.has(values[i]))
                    return false;
            }
            return true;
        }
    };
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(5);
setB.add(6);

let setC = new Set();
setC.add(7);
setC.add(8);
setC.add(9);

const unionAB = setA.union(setB)
console.log('합집합: ', unionAB.values());

const intersectionAB = setA.intersection(setC)
console.log('교집합: ', intersectionAB.values());

const differenceAB = setA.difference(setB);
console.log('차집합: ', differenceAB.values());

console.log('setC는 setA의 부분집합인가?: ', setC.subSet(setA));

setA.clear()
setB.clear()
setC.clear()

console.log('setA : ', setA.values());
console.log('setB : ', setB.values());
console.log('setC : ', setC.values());