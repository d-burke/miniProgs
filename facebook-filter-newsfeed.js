//facebook hide newsfeed articles by word
function newsFeedSnipe(w, t) {
   w = w || 'Sponsored';
   t = t || 3000;
   var ns = document.body.getElementsByClassName('fbUserContent');
   for (var i = 0; i < ns.length; i++) {
      if (ns[i].innerHTML.indexOf(w) > 0) {
         ns[i].parentNode.removeChild(ns[i]);
         console.log('blocked an instance of ', w);
      }
   }
   return setTimeout(function(){newsFeedSnipe(w)}, t);
};

//facebook newsfeed hide crap
var filterNewsFeed = function(w) {
   var rid = ['Sponsored', ' reacted to this.', ' replied to a ', 'was mentioned in a ', 'Friend Suggestions', ' commented on this.', ' is interested in an event.', ' liked this', 'Suggested Videos',  'Popular Live Video', ' was tagged in a photo.', '\'s cover photo.'];
   if (w) { rid.push(w); }
   setInterval(function() {
      var rColumnChrome = document.getElementsByClassName('ego_section')[0];
      if (rColumnChrome.style.display != 'none'){ rColumnChrome.style.display = 'none'; }
      var rColumnFirefox = document.getElementById('rightCol');
      if (rColumnFirefox.style.display != 'none'){ rColumnFirefox.style.display = 'none'; }
   }, 3000);
   for (var i = 0; i < rid.length; i++) {
      newsFeedSnipe(rid[i]);
   }
};

filterNewsFeed();