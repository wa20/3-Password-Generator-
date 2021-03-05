const resultEl = document.getElementById("result");
let copyEl = document.getElementById("copy");

let generateEl = document.getElementById("generate");

function copyButton() { // Function once copy button is pressed 
  resultEl.select();
  resultEl.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied password: " + resultEl.value);
}
copyEl.addEventListener("click", copyButton);



function generatePassword() { //Main Function once Generate Password is pressed
  
  const lengthEl = document.getElementById("length").value;
  const symbolEl = document.getElementById("symbols").checked;
  const numberEl = document.getElementById("numbers").checked;
  const lowerCaseEl = document.getElementById("lowerCase").checked;
  const upperCaseEl = document.getElementById("upperCase").checked;
  const specialCharacterEl = document.getElementById("specialCharacter").value;

  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVW";
  const symbols = "§!@£#$%^&*()_-+><?";
  let password = "";
  let wordOps = "";


if(symbolEl === false && numberEl === false && lowerCaseEl === false && upperCaseEl === false){
    alert("Select at least one option")
    return;
} else 

if(numberEl < 8 || numberEl > 128) {
    alert("Password Length: Min 8 - Max 128")
    return; 

} else  return 


  function includeSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function includeNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }

  function includeLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  function includeUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  if(specialCharacterEl.length > 0) {
      password += specialCharacterEl
  }


  if (symbolEl === true) {
    let randomSymbol = includeSymbols();
    password += randomSymbol;
    wordOps += symbols
  }


  if (numberEl === true) {
    let randomNumber = includeNumbers();
    password += randomNumber;
    wordOps += numbers
  }


  if (lowerCaseEl === true) {
    let randomLowerCase = includeLowerCase();
    password += randomLowerCase;
    wordOps += lowerCase
  }


  if (upperCaseEl === true) {
    let randomUpperCase = includeUpperCase();
    password += randomUpperCase;
    wordOps += upperCase
  }


  for( var i = password.length; i < lengthEl; i++ ) {

    password += wordOps[Math.floor(Math.random() * wordOps.length)]

  }

  resultEl.value = password;


}


generateEl.addEventListener("click", generatePassword);



