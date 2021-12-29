function palindrome(str) {
  str = str.toUpperCase();
  let arr = str.split(/[\s+\W-_]/);
  let newStr = arr.join("");
  let reverseStr = "";
  for(let i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  }
  return newStr === reverseStr;
}
