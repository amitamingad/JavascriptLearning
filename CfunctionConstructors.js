'use strict';
(function()
{
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

})();