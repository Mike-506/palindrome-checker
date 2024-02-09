function palindrome(str) {
  const regex = /[\s\W_]+/gi;

  let onlyLetters = str.replace(regex, "");
  onlyLetters = onlyLetters.toLowerCase().split("");

  for (let i = 0; i < onlyLetters.length - 1 / 2; i++) {
    if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
      console.log(`${str} is not a palindrome`);
      break;
    } else {
    console.log(`${str} is a palindrome`);
    break;
    }
  }
}

palindrome("A");
palindrome("eye");
palindrome("_eye");
palindrome("not a palindrome");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
palindrome("My age is 0, 0 si ega ym.");
palindrome("almostomla");
palindrome("never odd or even");
palindrome("A man, a plan, a canal. Panama");
palindrome("race car");

  