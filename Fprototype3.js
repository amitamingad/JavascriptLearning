'use strict';
(function()
{
    function Person(fname,lname,age)
    {
        this.fname = fname;
        this.lname = lname;
        this.age = age;

        Object.defineProperty(this, 'fullName', {
            get: function()
            {
                return this.fname + ' ' + this.lname;
            },
            enumerable:true
        });
    }

    function Student(fname, lname, age)
    {
        /* ********************************************* IMPORTANT********************************************* */
        Person.call(this, fname, lname, age);
        this.enrolledCourses = [];
        this.enroll = function(courseId)
        {
            this.enrolledCourses.push(courseId);
        }
        this.getCourses = function()
        {
           return this.fullName + " enrolled for " + this.enrolledCourses.join(',');
        }
    }

    /* ********************************************* IMPORTANT********************************************* */
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let jim = new Student('jim', 'cooper', 29);

    displayObject(jim);
    // STudent jim has all props of Student constructor except from Person
    /* Student {
        enrolledCourses:
        enroll: function(courseId) { this.enrolledCourses.pusu(courseId); }
        getCourses: function() { }
        }
         */
    
    // jims proto has Student      
    displayObject(jim.__proto__);
    /* Student {
        }
        */

    // jims proto's proto has Person    
    displayObject(jim.__proto__.__proto__);
    /* Person {
        } */
    jim.enroll('cs001');
    jim.enroll('cs002');    
    console.log(jim.getCourses());    
}
)();