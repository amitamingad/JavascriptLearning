function sum(...values) {
    let sum = 0;
    for(let value of values){
        sum += value;
    }
    return sum;
}

let result = sum(2,4,5,8,3,);
alert(result);