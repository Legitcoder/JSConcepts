function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.printName = function(){
            console.log(this.firstName + " " + this.lastName);
        }
}

Person.prototype.printHello = function(){
    console.log("Hello");
}

Person.printNameTwo = function(){
            console.log(this.firstName + " " + this.lastName);
        }

function Professional(firstName, lastName, title){
        Person.call(this, firstName, lastName);
        this.title = title;
}

Professional.prototype = Object.create(Person.prototype);

var prof = new Professional("Moin", "Uddin", "Mr.");
var per = new Person("Moin", "Uddin");
console.log(per.printName());
