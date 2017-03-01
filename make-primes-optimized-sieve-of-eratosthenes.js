// make array of prime numbers via the Sieve of Eratosthenes method with optimizations
var makePrimes = function(n) {
  var primesTF = [false, false, true];
  var limit = Math.sqrt(n);
  var primes = [2];
  for (var i = 3; i <= n; i+=2) {
    primesTF.push(true, false);
  }
  for (var i = 3; i <= limit; i+=2) {
    if (primesTF[i]) {
      for (var j = i * i; j <= n; j += i) {
        primesTF[j] = false;
      }
    }
  }
  for (var i = 3; i <= n; i+=2) {
    if(primesTF[i]) { primes.push(i); }
  }
  console.log(primes);
  return primes;
};
