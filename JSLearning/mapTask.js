let obj = {name : "Syama",
            age : 25};
let map = new Map(Object.entries(obj));

for(let key of map.keys()){
    alert(map.get(key));
}