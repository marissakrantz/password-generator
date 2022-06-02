//global variables
var options = []
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowercase = ['abcdefghijklmnopqrstuvwxyz'];
var specialCharators = [' !"#$%&()*+,-./:;<=>?@[]^_`{|}~']
var numb = ['0123456789']


// Assignment Code
var generateBtn = document.querySelector("#generate");

//code to pass users options into the options veriable
function generatePassword() {
  options = []
  var useLength = prompt("What length do you want your password to be?");
  // if user pressed Cancel, immediately end function
  if (isNaN(useLength)) {
    window.alert('You can only input numbers.')
    return generatePassword();
  }
  if (!useLength) {
    return;
  }
  else if (useLength < 8) {
    var useLength = alert("Your password must be at least 8 characters long.");
    return generatePassword();
  }
  else if (useLength > 128) {
    var useLength = alert("Your password can be no longer than 128 characters long.");
    return generatePassword();
  }
  else {
    var passwordLength = useLength
  }

  var useUppercase = confirm("Would you like your password to include uppercase?");

  if (useUppercase) {
    options = options += (uppercase);
  }

  var useLowerCase = confirm("Would you like your password to include lowercase?");

  if (useLowerCase) {
    options = options += (lowercase);
  }

  var useSpecialCharacters = confirm("Would you like your password to include special characters?");

  if (useSpecialCharacters) {
    options = options += (specialCharators);
  }

  var useNumbers = confirm("Would you like your password to include numbers?");

  if (useNumbers) {
    options = options += (numb);
  }

  if (options.length === 0) {
    var useUppercase = alert("You must select at least one character type");
    generatePassword()
  }

  //return options
  function makeid() {
    var index = "";
    for (var i = 0; i < passwordLength; i++)
      index += options.charAt(Math.floor(Math.random() * options.length));

    if (index.length === 0) {
      index = 'Your Secure Password'
    }
    return index;
  }

  return makeid();

}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);