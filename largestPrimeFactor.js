// exports.largestPrimeFactor = function(n){
//   var primeNumber = 0;
//   var counter =0;

//   for (var i = n; i > 0; i--) {
//     if (n % i === 0) {
//       for (var j = 2; j < i; j++) {
//         counter = 0;
//         if (i % j === 0) {
//           counter++;
//         }
//       }
//       if (counter === 1) {
//         primeNumber = i;
//       }
//     }
//   }
//   return primeNumber;
// };



exports.largestPrimeFactor = function(n){
  var primeNumber = 0;

  for (var i = 2; i < n; i++) {
    if (n % i === 0 && isPrime(i)) {
        primeNumber = i;
    }
  }
  return primeNumber;
};

function isPrime(n) {
  // while (i <num) {
  //   if (num % i === 0){
  //     return false;
  //   }
  //   i++;
  // }
  for (var i = 2; i < n; i++) {   //or i < num/2 to optimize
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}