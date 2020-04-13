function sum(a){
    let result = a;


    function f(b) {
        result+= b;
        return f;
    };

    f.toString = function() {
        return result;
    };
    return f;
}

alert(sum(2)(4)(2));