//amazon hide products by word Sponsored
// last updated 4/7/2021
let targetWords = ['Sponsored'];

function removeElement(e) {
  if(!e){ return false;}
  console.log('Removed element: ', e);
  e.parentNode.removeChild(e);
  return true;
};

function filterNewsFeed(t) {
  t = t || 3000;
  let ns = document.body.getElementsByClassName('a-spacing-medium');
  for (let i = 0; i < ns.length; i++) {
    for (let j = 0; j < targetWords.length; j++) {
      if (ns[i].innerHTML.indexOf(targetWords[j]) >= 0) {
        if(removeElement(ns[i])) {
          console.log('removed instace of: ', targetWords[j]);
        }
      }
    }
  }
  return setTimeout(function(){filterNewsFeed()}, t);
};

filterNewsFeed(300);