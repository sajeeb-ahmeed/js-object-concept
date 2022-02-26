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
// pairs =    its return a two dimentional array // Returns an array of key/values of the enumerable properties of an object
const pair = Object.entries(student);
console.log(pair);

// delete 
delete student.color;
console.log(student);