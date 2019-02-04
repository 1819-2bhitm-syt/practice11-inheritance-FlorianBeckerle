function Person(firstName, lastName, gender, hobbies){
    this.name = {
        first: firstName,
        last: lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;

    this.sayHello = function (){
        console.log("Hello. My name is " + this.name.first + " " + this.name.last + ".");
    }

    this.tellHobbies = function() {
        if(this.hobbies.length == 1){
            console.log("My only hobby is " + this.hobbies + ".")
        }else if(this.hobbies.length == 0){
            console.log("I have no hobbies.")
        }else{
            console.log("My hobbies are:")
            for(i = 0; i < this.hobbies.length; i++){
                console.log("- " + this.hobbies[i]);
            }
        }
    }
}

module.exports = Person;