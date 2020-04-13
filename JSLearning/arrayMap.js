let map = new  Map();
map.set(1,"Syama");
map.set(2,"Rama")
let arr = Array.from(map);
console.log(arr);
arr.forEach( (item) => { item.forEach( (nestItem)=> {console.log(nestItem)})});
alert(arr.length);
alert(map.get(1));
