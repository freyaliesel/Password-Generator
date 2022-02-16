// Assignment Code
var generateBtn = document.querySelector("#generate");

// Make "generatePassword" function
function generatePassword() {
    confirm(`Follow the prompts to establish your password criteria.`);

    // Prompt user for password criteria
    // Password Length: at least 8 no more than 128
    let passwordLength = prompt(`Enter a password length between 8 and 128`);
    console.log(`User selected: password length ${passwordLength}`);

    // check to make sure user selects a valid password length
    if (passwordLength < 7 || passwordLength > 128) {
        alert(`Password must be between 8 and 128 characters`);
        console.log(`Password must be between 8 and 128 characters`);
        return;
    }

    // Character types:
    // Uppercase
    var includeUpper = confirm(`Include upper case letters?`);
    console.log(`User selected: upper case ${includeUpper}`);
    // lowercase
    var includeLower = confirm(`Include lower case letters?`);
    console.log(`User selected: lower case ${includeLower}`);
    // Numeric
    var includeNumeric = confirm(`Include numeric characters?`);
    console.log(`User selected: numeric ${includeNumeric}`);
    // Special characters
    var includeSpecial = confirm(`Include special characters?`);
    console.log(`User selected: special ${includeSpecial}`);

    // Check that user selected at least one valid character type
    if (!includeUpper && !includeLower && !includeNumeric && !includeSpecial) {
        alert(`User must select at least one character type.`);
        console.log(`User must select at least one character type.`);
        return;
    }

    // Declare arrays for the possible character types
    const alphaUpper = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    const alphaLower = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const charNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const charSpecial = [
        " ",
        "!",
        '"',
        "#",
        "$",
        "$",
        "&",
        "'",
        ")",
        "(",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "\\",
        "]",
        "^",
        "_",
        "`",
        "{",
        "|",
        "}",
        "~",
    ];

    // Populate password array with random characters while making sure that each type of character is represented
    // Make an array to put the password in
    var password = new Array();

    // While the array is shorter than the password, populate with characters from the selected criteria
    while (password.length < passwordLength) {
        if (includeUpper && password.length < passwordLength) {
            password.push(
                alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
            );
        }
        if (includeLower) {
            password.push(
                alphaLower[Math.floor(Math.random() * alphaLower.length)]
            );
        }
        if (includeNumeric) {
            password.push(
                charNumeric[Math.floor(Math.random() * charNumeric.length)]
            );
        }
        if (includeSpecial) {
            password.push(
                charSpecial[Math.floor(Math.random() * charSpecial.length)]
            );
        }
    }
console.log(password);

    // Randomize the password order
    for (i = password.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var k = password[i];
        password[i] = password[j];
        password [j] = k;
    }

    console.log(password);

    return password.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
