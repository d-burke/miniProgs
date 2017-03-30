// mastermind game


// generate 4 random numbers
// turn: player input guess, or quit
// if input match numbers, then you win
// else respond
//   white for each correct but wrong position, red/black for each correct and correct position

//////////////////

// random number between two provided numbers inclusively

function randomNumBetween(num1, num2){
   // checks if num1 and num2 are whole numbers
   if(!Number.isInteger(num1) || !Number.isInteger(num2)) return NaN;
   // swaps values if num1 is larger than num2
   if(num1 > num2) num2 = [num1, num1 = num2][0];
   // whole number between num1 and num2 inclusively
   var randNum = Math.floor((Math.random()*(num2-num1+1)))+num1;
   return randNum;
};


var mGame = function(){

var start=true;

// generate 4 random numbers
var code = [];
for(var i=1;i<=4;i++){code.push(randomNumBetween(1,6).toString())}

var turn= function(){

// turn: player input guess, or quit
var input=prompt('4-digit (numbers 1-6) guess or "q" to quit');

// if match win, else respond
if(input === 'q') { start=false; return 'game over: ' + code.join(''); }
if(input === code) { start=false; return 'you win! ' + code.join(''); }

//   one white for each correct but wrong position, one black for each correct and correct position
var inputAr=input.split('');
var black=0;
var white=0;
var codeCheck = code.slice();
// console.log('in:'+inputAr+'\nco: '+codeCheck)
console.log('your guess:'+inputAr+'\n')
for(var i=0;i<4;i++){
  if(inputAr[i]===codeCheck[i]) { black++; inputAr[i]=0; codeCheck[i]=0;}
}
for(var i=0;i<4;i++){
  if(inputAr[i]!=0 && codeCheck.indexOf(inputAr[i]) != -1) { white++; codeCheck[codeCheck.indexOf(inputAr[i])]=0; inputAr[i]=0; }
}
// console.log('in2:'+inputAr+'\nco2: '+codeCheck)

console.log('correct position: '+black + '\nwrong position: '+white);


if(black===4) { start=false; console.log('you win! ' + code.join('')); return; }

if(start) turn();

};

turn();

};