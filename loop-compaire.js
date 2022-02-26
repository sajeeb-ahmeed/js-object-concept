const student = {
    name: ' Tom Alex',
    money: 5000,
    age: 21,
    subject: ' Mathmaticies',
    color: ' black'
}
for (const stu in student) {
    console.log(stu, student[stu]);
}
const keys = Object.keys(student)
console.log(keys);
for (const key of keys) {
    console.log(key, student[key]);
}

// compaire 

const frist = {
    name: 'jhon'
}
const second = {
    name: 'jhon'
}
const third = frist;



if (frist == third) {
    console.log('object same ');
} else {
    console.log('object are not qual');
}
// ========
if (frist == second) {
    console.log(' Object are same');
} else {
    console.log('object are different');
}
// =======
if (JSON.stringify(frist) == JSON.stringify(second)) {
    console.log(' Object are same');
} else {
    console.log('object are different');
}

const frist2 = {
    b: 1,
    a: 2
}

const second2 = {
    a: 2,
    b: 1
}

if (JSON.stringify(frist2) == JSON.stringify(second2)) {
    console.log(' Object are same');
} else {
    console.log('object are different');
}


function compaireObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const num in obj1) {
        if (obj1[num] !== obj2[num]) {
            return true
        }
    }
}
const result = compaireObj(frist2, second2);
console.log(result);