const Person = require("./Person");

function Teacher(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;


    this.sayHello = function(){

        if (this.gender == "male") {
            console.log("Hello. My name is  Mr. " + this.name.last + " and I teach " + subject + ".");
        } else {
            console.log("Hello. My name is  Mrs. " + this.name.last + " and I teach " + subject + ".");
        }
    }
}



Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

module.exports = Teacher;