// rotate array left

var rotateArrayLeft = function(ar, shift){
   ar=ar.splice(shift % ar.length).concat(ar);
   return ar;
};