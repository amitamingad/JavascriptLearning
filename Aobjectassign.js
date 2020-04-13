'use strict'; 
(function() {

  let person1 = {
      fName: "Amit",
      lName: "Kulkarni",
      age: 18,
      isAdult()
      {
        return age >= 18;
      }
  };

  let person2 = {};
  displayObject(person2);
 /* Object {
} */
  Object.assign(person2, person1);
  displayObject(person2);
  /* Object {
    fName: Amit
    lName: Kulkarni
    age: 18
    isAdult: isAdult() { return age >= 18; }
    } */  
  // copies person1 value to person2 object 
})();