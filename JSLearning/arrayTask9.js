let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];
arr1 = arr.map(item => item.name);
console.log(arr1);
arr1.sort();

// now: [john, mary, pete]
alert(arr1[1]); // Mary
