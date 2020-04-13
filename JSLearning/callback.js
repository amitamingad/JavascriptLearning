function calc(a,b,callback) {
    if (a==0 && b==0){
        callback();
    }
    else
        alert(a+b);
}
calc(1,0,function(){
    alert("all the values are null");
})