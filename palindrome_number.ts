// using brute force
function isPalindrome(x: number): boolean {
  let yString = x.toString();
  let cmpArr: string = "";
  for (let i = yString.length - 1; i >= 0; i--) {
    cmpArr += yString[i];
  }
  return yString === cmpArr;
}

// using Math

function isPali(x: number): boolean {
  // Handle negative numbers (which are not palindromes)
  if (x < 0) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
}
console.log(isPali(-121));
