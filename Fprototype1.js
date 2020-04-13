'use strict';
(function()
{
    function Person(name,age)
    {
        this.name = name;
        this.age = age;
    }
    // Person.prototype will have constructor
    // Inside that constructor, it will have __proto__ object pointing to Object Proto
    // Person.prototype (run it in browser)
    /*      {constructor: ƒ} // this curly brace is not object // below one is object for contructor
                constructor: ƒ Person(name,age)
                __proto__: Object */

    let p = new Person("Amit", 29);
    // p.prototype
    /*      {constructor: ƒ}
                constructor: ƒ Person(name,age)
                __proto__: Object */
    // Person.protype === p.__proto__    /* ****************** TRUEEEEEEEEEEEEE ***********************/

    /* Person.prototype.__proto__
            {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()hasOwnProperty: ƒ hasOwnProperty()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toString: ƒ toString()valueOf: ƒ valueOf()toLocaleString: ƒ toLocaleString()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
       p.__proto__.__proto__
            {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} */

    // SO, Person.prototype.__proto__ === p.__proto__.__proto__
    // last __proto__ is of objects
    displayObject(Person.prototype);
    displayObject(p.__proto__);
    displayValue(Person.prototype === p.__proto__);
    displayValue(Person.prototype.__proto__ == p.__proto__.__proto__);
    displayObject(Person.prototype.__proto__);
    // last proto is object constructor proto so, Object.prototype === p.__proto__.__proto__ === Person.prototype.__proto__  
    /* Object {
    }
    */
    displayObject(p.__proto__.__proto__);
    /* Object {
        }    */

    /* There are 2 types of prototype inheritance */
    // 1. Function prototype
    // 2. Instance proto(__proto__)


})();