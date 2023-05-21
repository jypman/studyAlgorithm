const table = new Set();

table.add("key1");
table.add("key2");
table.add("key3");

table.delete("key3");

console.log("entries :", table.entries());
console.log("keys :", table.keys());
console.log("values :", table.values());

table.clear();

console.log("entries :", table.entries());
