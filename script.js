// Assignment Code
var generateBtn = document.querySelector("#generate");

// Make "generatePassword" function
function generatePassword() {

      confirm(`Follow the prompts to establish your password criteria.`);

    // Prompt user for password criteria
    // Password Length: at least 8 no more than 128
        var passwordLength = prompt(`Enter a password length between 8 and 128`);
    console.log(`User selected: password length ${passwordLength}`);

    // check to make sure user selects a valid password length
    if ((passwordLength < 7) || (passwordLength > 129)) {
      alert(`Password must be between 8 and 128 characters`);
      console.log(`Password must be between 8 and 128 characters`);
      return;     
    }

    // Character types:
    // lowercase
    var caseLower = confirm(`Include lower case letters?`)
    console.log(`User selected: lower case ${caseLower}`);

    // Uppercase
    var caseUpper = confirm(`Include upper case letters?`)
    console.log(`User selected: upper case ${caseUpper}`);

    // numeric
    var charNumeric = confirm(`Include numeric characters?`)
    console.log(`User selected: numeric ${charNumeric}`);

    // special characters
    var charSpecial = confirm(`Include special characters?`)
    console.log(`User selected: special ${charSpecial}`);

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
