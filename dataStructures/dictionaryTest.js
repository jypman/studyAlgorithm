import Dictionary from "./dictionary.js"

let dictionaryA = new Dictionary()

dictionaryA.set('a', 'a@gmail.com')
dictionaryA.set('b', 'b@gmail.com')
dictionaryA.set('c', 'c@gmail.com')

console.log(dictionaryA.has('a'))
console.log(dictionaryA.size())
console.log(dictionaryA.values())
console.log(dictionaryA.keys())
console.log(dictionaryA.get('a'))
console.log(dictionaryA.get('d'))

dictionaryA.remove('a')

console.log(dictionaryA.values())
console.log(dictionaryA.items())