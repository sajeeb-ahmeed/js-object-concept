// literal 
const iconPlayer = {
    name: ' Shakib Al- Hasan',
    job: 'Cricketer',
    age: 34
}


// // 2. constructor
const person = new Object(


);
person.name = 'Mir Hossain'
// console.log(person);



// // 3. 
// const human = Object.create(null);
const human = Object.create(iconPlayer);
console.log(human);

// // 4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

}
const peop = new People('Manus', 12);
// console.log(peop);

// 5. function


// function Manus(name) {
//     this.name = name;
// }
// const man = Manus('kader');
// console.log(man);

console.log(typeof this);


//use strict
function helloThis() {
    console.log(this);
}

helloThis();

function helloThis() {
    'use strict';
    console.log(this);
}

helloThis();