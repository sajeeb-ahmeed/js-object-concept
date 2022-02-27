// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 


const fida = {
    name: 'fida ahmed',
    money: 2500,
    language: {
        js: 'JavaScripts',
        py: 'Python',

    },
    picnic: function (x) {
        this.money = this.money - x
        console.log(this.money);
    },
    isStrong: true,
    favNumber: [7, 11, 77, 98, 75]
}
fida.picnic(570)


// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const templeStr = `
 Name = ${fida.name} 
 Language = ${fida.language.py}
 Favourite Number = ${fida.favNumber[1]}
`
console.log(templeStr);

// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 

const arguments = [99, 89, 333];
const zeroParam = () => arguments[1];
console.log(zeroParam());

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

const myArrow = (num) => num / 7
console.log(myArrow(28));

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const mult = (num1, num2) => (num1 + num2) / 2
console.log(mult(10, 20));

// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const multiPlus = (num1, num2) => {

    const fristNumber = num1 + 7;
    const secondNumber = num2 + 7;
    const equalValue = fristNumber + secondNumber;
    return equalValue;
}
console.log(multiPlus(22, 24));

// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const arr = [21, 45, 67, 89, 12, 34, 56, 78, 99]
const arrMap = arr.map(n => (n / 7).toFixed(2));
console.log(arrMap);


// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
// 1.
// map()= The map()method creates a new array with the results of calling a provided function on every element in the calling array
// 2. 
// find () = The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// 3. 
// filter () = ফিল্টার সেইম ম্যাপের মতোই কিন্তু এখানে অ্যাপ্লাইকৃত ফাংশন যদি trueরিটার্ণ করে তাহলেই সেটা নতুন অ্যারেতে স্থান পাবে, নতুবা যদি ফাংশন falseরিটার্ণ করে তাহলে সেই আইটেম অ্যারেতে স্থান পাবে না।

// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const accoutInfo = ['SaJeeb Ahmed', 50000, 'student']
const [name, balance, profession] = accoutInfo;
console.log(balance);
