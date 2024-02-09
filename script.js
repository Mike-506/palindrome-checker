const textInput = document.getElementById("text-input");
const userInput = document.getElementById("text-input").value;
const checkBotton = document.getElementById("check-btn");
const result = document.getElementById("result");



function palindrome(str) {
  const regex = /[\s\W_]+/gi;

  let onlyLetters = str.replace(regex, "");
  onlyLetters = onlyLetters.toLowerCase().split("");

  for (let i = 0; i < onlyLetters.length - 1 / 2; i++) {
    if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
      result.textContent = `"${str}" is not a palindrome`;
    } else {
    result.textContent = `"${str}" is a palindrome`;
    }
  }
}

function error(str) {
  if (str === "") {
    alert("Please input a value")
  }
}

checkBotton.addEventListener("click", (e) => {
  e.preventDefault();
  palindrome(userInput) || error(userInput);
}
)

// change theme dark/light
const colorSwitch = document.querySelector('.switch-label input[type="checkbox"]');

function changeTheme(ev){
  if(ev.target.checked){
    document.documentElement.setAttribute('theme', 'light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
  }
}
colorSwitch.addEventListener('change', changeTheme);

