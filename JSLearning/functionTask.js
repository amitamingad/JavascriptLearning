function makeCounter() {
    // instead of:
    // let count = 0

    function counter() {
        return counter.count++;
    };
    
    counter.count = 0;

    counter.set =(value)=>{
      counter.count = value;
      return counter.count;
    };

    counter.decrease = ()=>{
        return --counter.count;
    };

    return counter;
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert(counter.set(10));
alert(counter.decrease());