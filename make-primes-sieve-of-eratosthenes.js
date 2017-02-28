// make array of prime numbers via the Sieve of Eratosthenes method
var makePrimes = function(n) {
  var primesTF = [false, false];
  // set all values to true
  for (var i = 2; i <= n; i++) {
    primesTF.push(true);
  }
  // every multiple of each number changes to false
  for (var i = 2; i <= n; i++) {
      for (var m = i + i; m <= n; m += i) {
        primesTF[m] = false;
      }
  }
  // return array of prime numbers from primesTF
  var primes = [];
  for (var i = 2; i <= n; i++) {
    if(primesTF[i]) { primes.push(i); }
  }
  return primes;
};

