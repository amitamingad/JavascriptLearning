'use strict';
(function()
{
    let person = {
        fname: "Amit",
        lname: "Kulkarni"
    }
    displayObject(Object.getOwnPropertyDescriptor(person, "fname"));


    // There are 2 properties on each object
    // 1. Enumerable: to iterate over the props
    // 2. Writable: to change the value of the prop
    // 3. configurable: 
    
    for(let p in person)
    {
        displayValue(p + ": " + person[p]);
    }

    Object.defineProperty(person, 'fname', {enumerable:false});
    for(let p in person)
    {
        displayValue(p + ": " + person[p]);
    }
    /* lname: Kulkarni */
    /* cannot enumerate over fname prop */
    /* also, during serialization and de-ser if enumarable is set to false, 
    /* Object will not have that prop */

    displayValue(Object.keys(person));
    /* lname  */
    /* Displays only lname */
    displayValue(JSON.stringify(person));
    /* {"lname":"Kulkarni"} */
    /* displyas only lname */

    /* ************************************************************************************************************* */
    person.fname = "Pavan";
    Object.defineProperty(person, 'fname', {writable:false});
    //person.fname = "Amit";
    /* EObjectDefine.js:31 Uncaught TypeError: Cannot assign to read only property 'fname' of object '#<Object>' */
    /* cannot modify fname property */

    let person1 = {
        name: {
            fname:"Amit",
            lname: "kulkarni"
        }
    }
    Object.defineProperty(person, 'name', {writable:false});
    person1.name.fname = "Pavan";
    displayValue(person1.name.fname);
    // Pavan
    // Even though, we made 'name' property as not writable, we are still
    // able to change fname because, name is just a ref to the object

    Object.freeze(person1);
    person1.name = {
        lname: "xyz"
    }
    /* Cannot assign to read only property 'name' of object */

    /* ************************************************************************************************************* */

    let person2 = {
        fname: "Amit",
        lname: "Kulkarni"
    }

    Object.defineProperty(person2, 'fname', {configurable:false});
    // By setting the configurable prop to false, we cannot define the enumerable property again
    // and also the configurable property itself
    //Object.defineProperty(person2, 'fname', {enumerable:false});
    /* Uncaught TypeError: Cannot redefine property: fname */
    //Object.defineProperty(person2, 'fname', {configurable:true});
    // however, writable descriptor can be changed
    Object.defineProperty(person2, 'fname', {writable:false});


    // also, we cannot delete property on the object once configurable is set to false on particular prop
    Object.defineProperty(person2, 'lname', {configurable:false});
    delete person2.lname; 
    /* Uncaught TypeError: Cannot delete property 'lname' of # */


})();