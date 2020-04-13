let add = (function maxCount(){
    let count = 0;
   return function counter(){
        ++count;
        alert(count);
        return counter;
    }
    //counter.count = 10;
    //return counter;
})();

add()()();
/*
let count = maxCount();
alert(count());

alert(count.count);
alert(count.count);*/
