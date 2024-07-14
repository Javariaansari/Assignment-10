//Exercise #4.5

let prize = prompt("Pick a number 0-10");
prize = parseInt(prize);
let output = "My Selection: ";
switch (prize){
case 0:
output += " Top";
case 1:
output += " Coin ";
break;
case 2:
output += " Big ";
case 3:
output += " Box of ";
case 4:
output += " Silver ";
case 5:
output += " Bricks ";
break;
default:
output += " Sorry Try Again";
}
console.log(output);

//PROJECTS
//Friend Chcker Game

let friends = prompt("Enter your friend name");
let message;
switch (friends) {
case "javaria" :
case "sharmeen" :
case "shamima" :
case "asia" :
case "zainab" :
message = friends + " is my friend";
break;
default :
message = "I don't know " + friends;
}
console.log(message);

// //Evaluating a number Game
let val1 = prompt("What number?");
val1 = parseInt(val1);
let val2 = 50;
let  Result= "nothing";
 if (val1 === val2) {
result = val1 + " is equal to " + val2;
}
else if (val1 > val2) {
result = val1 + " is greater than " + val2;
}  
else {
result = val1 + " is less than " + val2;
}
console.log(result);
console.log(result);

//Rock Paper Scissor
const arr =["Rock", "Papper","Scissor"]
let computer =Math.floor(Math.random()*3);
let player =Math.floor(Math.random()*3);
let final = "player " + arr[player] + " vs computer " +arr[computer] + " ";
if (player === computer) {
final += "it's a tie";
} else if (player > computer) {
if (computer == 0 && player == 2) {
final += "Computer Wins";
} else {
final += "Player Wins";
}}
console.log(final);

