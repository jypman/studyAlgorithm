// 집합

function Set() {
    let items = {};
    // 어떤 원소가 집합에 포함되어 있는지 여부를 boolean으로 반환한다.
    this.has = function (value) {
        // return value in items; 이것 대신 아래 방법이 가독성 면에서 좋다.
        return items.hasOwnProperty(value)
    };
    this.add = function (value) {
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        if(this.has(value)){
            delete items[value]
            return true;
        }
        return false;
    };
    // 집합의 모든 원소를 날리는 메소드 
    this.clear = function () {
        items = {}
    };
    // 집합의 원소 갯수를 반환
    this.size = function () {
        return Object.keys(items).length;
    };
    // 집합의 모든 프로퍼티를 추출해 배열 형태로 반환
    this.values = function () {
        return Object.keys(items);
    };
    // 합집합
    this.union = function (otherSet) {
        let unionSet = new Set();
        // 여기서 this는 첫 번째 집합(현재 인스턴스)을 의미하며 setA를 가리킨다.
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            // null 집합인 unionSet에 setA의 원소를 추가
            unionSet.add(values[i])
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
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
    // 차집합
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
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let setC = new Set();
setC.add(2);
setC.add(3);

const unionAB = setA.union(setB)
console.log('합집합: ',unionAB.values());

const differenceAB = setA.difference(setB);
console.log('차집합: ',differenceAB.values());

const intersectionAB = setA.intersection(setC)
console.log('교집합: ',intersectionAB.values());

console.log('setC는 setA의 부분집합인가?: ', setC.subSet(setA));