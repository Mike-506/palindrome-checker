//1
const textInput = document.getElementById("text-input");
const userInput = document.getElementById("text-input").value;
const checkBotton = document.getElementById("check-btn");
const result = document.getElementById("result");


checkBotton.addEventListener("click" , (e) => {

  e.preventDefault();

  if (userInput === "") {
    alert("Please input a value")
  }

  const regex = /[\s\W_]+/gi;

  let onlyLetters = userInput.replace(regex, "");
  onlyLetters = onlyLetters.toLowerCase().split("");

  for (let i = 0; i < onlyLetters.length - 1 / 2; i++) {
    if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
      result.textContent = `${userInput} is not a palindrome`;
    } else {
    result.textContent = `${userInput} is a palindrome`;
    }
  }
})



//2
$(document).ready(function (){
  $('button').click(function (event) {
     event.preventDefault();
 
     let word = $('#text-input').val().toLowerCase();
     let isPalindrome = checkPalindrome(word);
 
     if (isPalindrome) {
         $('#result').text("'" + word + " 'is a palindrome")
     } else {
         $('#result').text("'" + word + " 'is not a palindrome")
     }
  })
 })
 
function checkPalindrome(str) {
  let originalString = /[\W_]/g;
  let newString = str.toLowerCase().replace(originalString, ''); 
  let reverseStr = newString.split('').reverse().join('');
  return reverseStr === newString;
} 