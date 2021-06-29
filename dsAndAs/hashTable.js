// 해시 테이블 (체이닝과 선형탐색법)

import {LinkedList} from "./linkedList";

function hashCode(key) {
    // hash 변수를 임의의 소수로 초기화(가장 많이 쓰이는 숫자가 5381)
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
        // 33은 흔히 매직넘버라고 한다.
        hash = hash * 33 + key.charCodeAt(i)
    }
    // hash를 다시 임의의 소수(해시테이블이 가질 수 있는 크기보다 큰 소수)로 나눈다.
    return hash % 1013;
}

function HashTable() {
    let table = [];
    const ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return `[${this.key} - ${this.value}]`
        }
    };
    this.chainingPut = function (key, value) {
        const position = hashCode(key);
        if(table[position] === undefined) table[position] = new LinkedList();
        table[position].append(new ValuePair(key, value));
    };
    this.linearSearchPut = function (key, value) {
        let position = hashCode(key);
        if(table[position] === undefined){
            table[position] = new ValuePair(key, value);
        } else {
            let index = ++position;
            while (table[index] !== undefined){
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    };
    this.chainingGet = function (key) {
        const position = hashCode(key);
        if(table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) return current.element.value;
                current = current.next;
            }
            // 처음이나 마지막 원소인 경우
            if(current.element.key === key) return current.element.key;
        }
        return undefined;
    };
    this.linearSearchGet = function (key) {
        let position = hashCode(key);
        if(table[position] !== undefined){
            if(table[position].key === key) return table[position].value;
            else {
                let index = ++position;
                while (table[index] === undefined || table[index].key !== key) index++;
                if(table[index].key === key) return table[index].value;
            }
        }
        return undefined;
    }
    this.chainingRemove = function (key) {
        const position = hashCode(key);
        if(table[position] !== undefined){
            let current = table[position].getHead();
            while (current.next){
                if(current.element.key === key){
                    table[position].remove(current.element);
                    if(table[position].isEmpty()) table[position] = undefined
                    return true;
                }
                current = current.next;
            }
            if(current.element.key === key){
                table[position].remove(current.element);
                if(table[position].isEmpty()) table[position] = undefined
                return true;
            }
        }
        return false;
    };
    this.linearSearchRemove = function (key) {
        let position = hashCode(key);
        if(table[position] !== undefined){
            if(table[position].key === key) return table[position] = undefined;
            else {
                let index = ++position;
                while (table[index] === undefined || table[index].key !== key) index++;
                if(table[index].key === key) return table[index] = undefined;
            }
        }
        return undefined;
    };
}