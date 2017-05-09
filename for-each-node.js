// for each node, depth first

function forEachNode(n, f){
  n = n || document.body;
  f = f || function(e){console.log(e)};
  f(n);
  if(n.children.length){
    for(var i=0; i<n.children.length; i++){
      forEachNode(n.children[i]);
    }
  }
};