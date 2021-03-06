function Dictionary() {
    let items = {}
    this.has = function (key) {
        return items.hasOwnProperty(key)
    }
    this.set = function (key, value) {
        items[key] = value
    }
    this.remove = function (key) {
        if(this.has(key)){
            delete items[key]
            return true;
        }
        return false;
    }
    this.get = function (key) {
        return items[key]
    }
    // 딕셔너리 전체 원소의 값을 배열로 변환하여 반환한다.
    this.values = function () {
        return Object.values(items)
    }
    // 딕셔너리 전체 원소의 키를 배열로 변환하여 반환한다.
    this.keys = function () {
        return Object.keys(items)
    }
    this.clear = function () {
        items = {}
    }
    this.size = function () {
        return Object.keys(items).length
    }
    this.items = function () {
        return items
    }
}

export default Dictionary;