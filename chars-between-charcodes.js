// return string of chars between two character codes

function charsBetween(num1, num2){
   num2 = num2 || num1;
   if(!Number.isInteger(num1) || !Number.isInteger(num2)) return NaN;
   if(num1 == num2) return String.fromCharCode(num1);
   var ch = '';
   var reverse=false;
   if(num1 > num2) {
      num2 = [num1, num1 = num2][0];
      reverse=true;
   }
   if(!reverse){
      for(var i=num1; i<=num2; i++){
         ch+=String.fromCharCode(i);
      }
   } else {
      for(var i=num2; i>=num1; i--){
         ch+=String.fromCharCode(i);
      }
   }
   return ch;
};