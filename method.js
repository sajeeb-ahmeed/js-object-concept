const student = {

    name: ' Tom Alex',
    money: 5000,
    age: 21,
    subject: ' Mathmaticies',
    section: ['day', 'evening', 'night'],
    hobby: {
        name: 'travelling',
        spot: 'cox Bazar',
        duration: '4 days'
    },
    friends: ['jhon', 'tom', 'nike', 'adam'],
    takeExam: function () {
        this.name + 'taking exam';
        console.log(this.name, ' taking exam');
        // return this.name
    },
    treat: function (expense, tips) {

        this.money = this.money - expense - tips;
        return this.money
    }
}

student.takeExam();
const remaning1 = student.treat(900, 50)
const remaning2 = student.treat(300, 50)
console.log(remaning2);