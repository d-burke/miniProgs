// facebook hide newsfeed articles containing target words
// last updated 9/1/2020
let targetWords = ['Sponsored', ' reacted to this.', ' replied to a ', 'was mentioned in a ', 'Friend Suggestions', ' commented on this.', ' is interested in an event.', ' liked this', 'Suggested Videos',  'Popular Live Video', ' was tagged in a photo.', '\'s cover photo.', 'Suggested for You'];

function removeElement(e) {
  if(!e){ return false;}
  console.log('Removed element: ', e);
  e.parentNode.removeChild(e);
  return true;
};

function filterNewsFeed(t) {
  t = t || 3000;
  let ns = document.body.getElementsByClassName('sjgh65i0');
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

filterNewsFeed();
