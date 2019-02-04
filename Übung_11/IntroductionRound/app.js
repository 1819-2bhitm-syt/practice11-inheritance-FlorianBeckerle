const Person = require("./Person");
const Teacher = require("./Teacher");
const Student = require("./Student");

const p = new Person("Richard", "Roe", "male", ["reading"]);
p.sayHello();
p.tellHobbies();

/*/////////////////////////Test der Fälle\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log("\n//Ausgabe falls hobbies == ['reading']");
const tp1 = new Person("T1Hans", "T1Peter", "male", ["reading"]);
tp1.tellHobbies();

console.log("\n//Ausgabe falls hobbies == [ ]");
const tp2 = new Person("T2Hans", "T2Peter", "male", []);
tp2.tellHobbies();

console.log("\n//Ausgabe falls hobbies == ['cooking', 'swimming', 'travelling']");
const tp3 = new Person("T3Hans", "T3Peter", "male", ["cooking", "swimming", "travelling"]);
tp3.tellHobbies();
/////////////////////////////////////////////////////////////////////////*/

console.log("\n");
const t = new Teacher("Jane", "Doe", "female", [], "programming");
t.sayHello();
t.tellHobbies();

console.log("\n");
const s = new Student("John", "Smith", "male", ["cooking", "swimming", "travelling"], "history");
s.sayHello();
s.tellHobbies();
