//facebook newfeed hide 'sponsored'
function adKill(w){
  w = w || 'Sponsored';
  var ns = document.body.getElementsByClassName('fbUserContent');
  for(var i=0;i<ns.length;i++){
    if(ns[i].innerHTML.indexOf(w) > 0){
      ns[i].style.display = 'none';
      console.log('blocked this ad: ', ns[i]);
    }
  }
};
setInterval(adKill, 3000);