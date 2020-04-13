function parent() {
    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted; 
}
console.log(parent());