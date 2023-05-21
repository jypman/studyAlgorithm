const table = new Map();

table.set("key1", 1);
table.set("key2", 2);
table.set("key2", 4);
table.set("key3", 3);

console.log("key1 :", table.get("key1"));
console.log("key2 :", table.get("key2"));
console.log("key3 :", table.get("key3"));

table.delete("key2");

console.log("key2 :", table.get("key2"));
console.log("size :", table.size);
console.log("keys :", table.keys());
console.log("values :", table.values());

table.clear();

console.log("size :", table.size);
console.log("entries :", table.entries());
