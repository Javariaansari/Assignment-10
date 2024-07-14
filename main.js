//Exercise # 6.1
function addToVal(num1, num2) {
    return num1 + num2;
}
    const val1 = 30;
    const val2 = 50;
    console.log(addToVal(10, 20));
    console.log(addToVal(val1, val2));

//Exercise #6.2
const arr = ["ali", "sara", "zain", "hadi", "ayan"];
function myArr() {
const question = prompt("What is your name?");
const nameArr = Math.floor(Math.random() * arr.length);
console.log(arr[nameArr] + " " + question );
}
myArr();

//Exercise #6.3
const firstNum = parseInt(prompt("Enter First Number"));
const SecondNum = parseInt(prompt("Enter Second Number"));
let operat = "-";
function cal(a, b, op) {
if (op == "-") {
alert(a - b);
} else {
alert(a + b);
}
}
cal(firstNum, SecondNum, operat);

