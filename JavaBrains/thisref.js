'use strict';
(function()
{
    // 4 different ways of calling function

    // 1st way
    function foo()
    {
        displayValue("Inside func");
        console.log(this);
        // here 'this' value depends on the global object
        // if we run same function from browser, 'window' global object will be printed 
    }
    foo();
    /* ************************************************************************** */
    let p = {
        fname:"Amit", 
        lanme:"kulkarni",
        getfullName: function()
        {
            displayObject(this);
            console.log(this);
            /* here 'this' value refers to the current object,
                fname: Amit
                lanme: kulkarni
                getfullName: function() { displayObject(this); console.log(this); return this.fname + " " + this.lanme } 
            */
            return this.fname + " " + this.lanme
        }
    }
    p.getfullName();
    /* ************************************************************************** */

    function foo1()
    {
        console.log(this);
        /* foo1 {} object is created and assigned to 'this'  value */
        displayValue("Inside 3rd method");
    }
    new foo1();
    /* ************************************************************************** */

    function Bicycle(speed, gear, typrePressure)
    {
        this.speed = speed;
        this.gear = gear;
        this.typrePressure = typrePressure;
        this.inflateTyre = function()
        {
            this.typrePressure+=3;
        }
    }

    let bicycle1 = new Bicycle(20,10,50);
    bicycle1.inflateTyre();
    displayObject(bicycle1);

    let bicycle2 = new Bicycle(20,10,60);
    bicycle2.inflateTyre();
    displayObject(bicycle2);


    function Mechanic(name)
    {
        this.name = name;
    }

    let mike = new Mechanic("Mike");
    mike.inflateTyre = bicycle1.inflateTyre;
    /* we are calling inflateTyre() , but tyrePressure is not a prop of mike object */
    mike.inflateTyre();
    /* undefined */

    mike.inflateTyre.call(bicycle1);
    displayObject(mike);
    // mike object will have inflateTyre because it's assigned by bicycle1 
    /* name: Mike
    inflateTyre: function() { this.typrePressure+=3; }
    typrePressure: NaN */

    displayObject(bicycle1);
    // Now the tyrePressure value is changed
    /* {
    speed: 20
    gear: 10
    typrePressure: 56
    inflateTyre: function() { this.typrePressure+=3; }
    } */

    /* ************************************************************************** */


    /* bind, call and apply */

    // call and apply are quite same except that apply takes params in the form of array

    function Car(model, color)
    {
        this.model = model;
        this.color = color;
        this.inflateTyre = function(typrePressure, time)
        {
            displayValue(model + " car with " + color +" color is inflated by " + typrePressure + " for " + time + " seconds");
        }
    }

    let car1 = new Car("lambo", "red");
    displayObject(car1);
    car1.inflateTyre(20,20);

    let mec1 = new Mechanic("Amit");
    mec1.inflateTyre = car1.inflateTyre;
    mec1.inflateTyre.call(car1, "30", "30");
    mec1.inflateTyre.apply(car1, [20,20]);


    // .bind is usualy used for binding the object now and calling the function when ever required. It
    // will return function value

    // return function value and stored in mecInflateTyre 
    let mecInflateTyre = mec1.inflateTyre.bind(car1, 20, 20);
    mecInflateTyre();
})();