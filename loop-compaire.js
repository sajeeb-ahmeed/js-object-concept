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