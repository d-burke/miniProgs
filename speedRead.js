// speed read

var stop = false;

document.body.onkeyup = function(e){if(e.key=='p'){stop=true;}};

var flashWords = function(text, wpm, node, wordsPer, startWord){
  var textAr = text.split(' ');
  wpm = wpm || 200;
  node = node || document.body;
  wordsPer = wordsPer || 1;
  startWord = startWord || 0;
  if(startWord>textAr.length) { stop=true; }
  console.log(textAr[startWord]);
  node.innerHTML = textAr[startWord];
  startWord++;
  return !stop ? setTimeout(function(){flashWords(text, wpm, node, wordsPer, startWord)}, 60000/wpm) : console.log('stop at word: ', startWord);
};
