// rotate array right

var rotateArrayRight = function(ar, shift){
   ar=ar.splice(-shift % ar.length).concat(ar);
   return ar;
};