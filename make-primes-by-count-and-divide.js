// array of primes by counting and checking divisibility with previous primes

// n = number input as max value of primes
// primes = array of prime numbers
// c = counting
// l = limit largest possible divisor
// i = index of primes array
// t = true or false if count number is prime

var makePrimes = function(n) {
  if (n < 3) { return []; }
  var primes = [2];
  for (var c = 3; c <= n; c += 2) {
    var l = Math.ceil(Math.sqrt(c));
    var t = true;
    for (var i = 0; i < primes.length; i++) {
      if (c % primes[i] === 0) {
      t = false;
        break;
      }
      else if (primes[i] > l) { break; }
    } if (t) { primes.push(c) }
  }
  return primes;
};

