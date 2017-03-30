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