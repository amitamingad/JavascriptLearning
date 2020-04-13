'use strict';
(function()
{
    let person1 = {
        fName: "Amit",
        lName: "Kulkarni",
        age: 18,
        isAdult()
        {
          return age >= 18;
        }
    };

    let healthStat = {
        height: 45, 
        weight: 50
    };

    function mergePersonHealt(person, health)
    {
        // return Object.assign(person, health); // This merges the props of health into person object as well
        return Object.assign({}, person, health); // This merges the props of person and health into {} empty object
    }

    let mergePerson = mergePersonHealt(person1, healthStat);
    displayObject(mergePerson);
    /* Object {
        fName: Amit
        lName: Kulkarni
        age: 18
        isAdult: isAdult() { return age >= 18; }
        height: 45
        weight: 50
        } */
    displayObject(person1);
    /* Object {
        fName: Amit
        lName: Kulkarni
        age: 18
        isAdult: isAdult() { return age >= 18; }
        height: 45
        weight: 50
        } */
        
    // To get the merged object, we also modified the Person1 object
    // To avoid this use
    // Object.assign({}, person, health);
        
    
})();
