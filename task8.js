let myMap = new Map();
myMap.set("name", "Ivan");
myMap.set("age", "10");
myMap.set("city", "Moscow");

for (let index of myMap.keys()) {
    console.log(`Ключ — ${index}, значение — ${myMap.get(index)}`);
}