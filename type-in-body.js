// type text in body content
var keylogger = [];
document.body.innerHTML += '<div id="typedText"></div>';
document.body.onkeyup = function(e){
    var k = {
        'Shift' : true,
        'Shiftx' : '',
        'Enter' : true,
        'Enterx' : '\n',
        'Control' : true,
        'Controlx' : '',
        'Alt' : true,
        'Altx' : '',
        'Meta' : true,
        'Metax' : '',
    };
    if(k[e.key]){
        keylogger.push(k[e.key+'x']);
    } else if (e.key === 'Backspace'){
        keylogger.pop();
    }
    else {
        keylogger.push(e.key);
    }
    document.getElementById('typedText').innerText = keylogger.join('');
};