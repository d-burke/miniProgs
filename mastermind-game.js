// mastermind game

//////////////////
// generate 4 random numbers
// turn: player input guess, or quit
// if input match numbers, then you win
// else respond
//   white for each correct but wrong position,
//   black for each correct and correct position
// repeat turn until win, or quit.
//////////////////


// initialize div
document.write('<div id="app"></div>');


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
  // start game and generate code of 4 random numbers
  var start=true;
  var code = [];
  for(var i=1;i<=4;i++){code.push(randomNumBetween(1,6).toString())}

  // turn function
  var turn= function(){
    // turn: player input guess, or quit
    var input=prompt('4-digit (numbers 1-6) guess or "q" to quit');

    // input 'q' to quit, else respond
    if(input === 'q') {
      start=false;
      console.log('game over: ' + code.join(''));
      document.getElementById('app').innerHTML+='<br>'+'game over: ' + code.join('');
    } else {
      //   one white for each correct but wrong position, one black for each correct and correct position
      var inputAr=input.split('');
      var black=0;
      var white=0;
      var codeCheck = code.slice();
      // print input
      console.log('your guess:'+inputAr+'\n')
      document.getElementById('app').innerHTML+='<br>'+input+'\n';
      // check input against solution code
      for(var i=0;i<4;i++){
        if(inputAr[i]===codeCheck[i]) {
          black++;
          // accounted for vales marked off by reassigning to 0
          inputAr[i]=0;
          codeCheck[i]=0;
        }
      }
      for(var i=0;i<4;i++){
        if(inputAr[i]!=0 && codeCheck.indexOf(inputAr[i]) != -1) {
          white++;
          codeCheck[codeCheck.indexOf(inputAr[i])]=0;
          inputAr[i]=0;
        }
      }
      // print feedback
      document.getElementById('app').innerHTML+='<br>'+'correct position: '+black + '\nwrong position: '+white+'\n';
      console.log('correct position: '+black + '\nwrong position: '+white);

      // if winning condition is met
      if(black===4) {
        start=false; document.getElementById('app').innerHTML+='<br>'+'you win! ' + code.join('');
        console.log('you win! ' + code.join(''));
        return;
      }

      // if game has not ended then start next turn
      if(start) setTimeout(turn, 100);
    }
  };
  turn();
};
