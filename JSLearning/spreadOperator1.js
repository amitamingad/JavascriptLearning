function large(...values) {
    let large = 0;

    for(let value of values){
       if(large<value){
           large = value;
       }
    }
    alert(large);
}
let arr = [2,8,9,10];
large(...arr);