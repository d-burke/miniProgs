/*****************
Program Name: Drunk web surfing simulator!
Description: Makes divs shift and move irradically.
Creator: Dan Burke
Version: 1
Last Updated: Oct 25, 2016
Date Created: Oct 25, 2016
*****************/

//executes program
function getDrunk(howLong, speed){
  howLong = howLong/4 || 6;
  speed = 10-speed || 5;

  //create array of div functions from getTipsyDiv
  var len = document.querySelectorAll('div').length;
  var divFunctions =[];
  for(var i = 0; i<len; i++){
    divFunctions.push(getTipsyDiv(document.querySelectorAll('div')[i], howLong, speed));
  }

  //run all array div functions
  for(var i = 0; i<len; i++){
    divFunctions[i]();
  }
};

//returns function for each div
function getTipsyDiv(div, rotations, time){
  return function(){
    var t=0;
    var timeout = function(){
      var duration = (Math.floor((Math.random()*time)));
      setTimeout(function (){
        div.style.transitionDuration = (duration+1) +"s";
        var translateStr = 'translate(' + (Math.floor(Math.random() *16)-0) + 'px, ' + (Math.floor(Math.random() *10)-5) + 'px)';
        var rotateStr = 'rotate('+(Math.floor(Math.random() * 6)-3)+'deg) ';
        var skewStr='skew(' + (Math.floor((Math.random() * 10) -5)) +'deg, '+ (Math.floor((Math.random() * 10) -5)) + 'deg) ';
        div.style.transform= translateStr + rotateStr;
        t++;
        if(t<rotations){timeout();}
      }, (duration*1000)+500);
    }
    timeout();
  };
};