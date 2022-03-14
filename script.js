// rederence type

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1 === object2;
object1 === object3;
object1.value === object2;
object1.value === object3;

// context
let object4 = {
    a: function(){
        console.log(this);
    }
}

// Instantiation
class Player {
    // Define method which accepts 2 properties of player
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    // method or action performed with the properties of the constructor
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        // super allow us to access Player objects
        super(name, type); // this is default when ever we extend a class
        console.log('wizard', this);
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

let Wizard1 = new Wizard('Shelly', 'Healer'); // would have access to play() and introduce functions
let Wizard2 = new Wizard('Shawn', 'Dark Magic'); // would have access to play() and introduce() functions

// See what's happening
console.log(Wizard1.introduce());
console.log(Wizard1.play());
