const Person = require("./Person");

function Student(firstName, lastName, gender, hobbies, subject){
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;

    this.sayHello = function(){
        console.log("Hi. I'm " + this.name.first + " and I study " + subject + ".");
    }
}

module.exports = Student;