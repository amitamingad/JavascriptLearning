'use strict';
(function()
{

    // 3 ways of creating objects
    // 1. using new keyword and function prototype
    function Person(fname, lname, age)
    {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.isAdult = function()
        {
            return this.age >= 18;
        }

    }

    let amit = new Person("Amit", "Kulkarni", 29);
    displayObject(amit);
    displayValue(amit.isAdult());

    let aishu = new Person("Aishu", "Raghu", 25);
    displayObject(aishu);
    displayValue(aishu.isAdult());

    // 2. using object literal
    // 3. using Object.create method

    let p1 = {
        fname:"Amit",
        lname: "Kulkarni"
    };

    let p2 = Object.create(
        Object.prototype,
         {
            fname: {value:"Amit", enumerable:true, writable:true, configurable:true},
            lname: {value:"Kulkarni", enumerable:true, writable:true, configurable:true},
         }
    );

    displayObject(p1);

    displayObject(p2);
    // Both are same
    /* Object {
        fname: Amit
        lname: Kulkarni
        }
        Object {
        fname: Amit
        lname: Kulkarni
        } */


})();