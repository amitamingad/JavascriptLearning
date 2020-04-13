var a = 10;
function b(){
    var a = 1;
    function a(){}
    console.log("inside function" +a);
    return a();
}

console.log(b());