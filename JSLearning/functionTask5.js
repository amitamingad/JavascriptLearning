let result = 0;
function sum(...a){
    for(let v of a){
        result += v;
    }


    sum.toString = function(){
        return result;
    }
    console.log(sum);
    return sum;
}

alert(sum(2,2,2)(3)(5));