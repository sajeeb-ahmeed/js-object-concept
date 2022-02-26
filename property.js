const student = {
    name: ' Tom Alex',
    money: 5000,
    age: 21,
    subject: ' Mathmaticies',
    color: ' black'
}

// get keys of object useing keys method
const keys = Object.keys(student);
console.log(keys);
//get values useing of values method 
const value = Object.values(student);
console.log(value);
// pairs =    its return a two dimentional array 
const pair = Object.entries(student);
console.log(pair);