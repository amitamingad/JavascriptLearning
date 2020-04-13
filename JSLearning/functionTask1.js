function min(a,b){
    return a < b ? a : b;
}

let a = prompt("enter the first value");
let b = prompt("enter the second value");
let c = min(a,b);
alert("result" + c);