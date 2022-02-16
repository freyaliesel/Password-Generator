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
    if (passwordLength < 7 || passwordLength > 129) {
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

    // Make arrays for the possible character types
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

    var characters = new Array();

    // Generate character array based on options user selected
    if (includeUpper) {
        characters = alphaUpper;
        console.log(characters);
    }
    if (includeLower) {
        characters = characters.concat(alphaLower);
        console.log(characters);
    }
    if (includeNumeric) {
        characters = characters.concat(charNumeric);
        console.log(characters);
    }
    if (includeSpecial) {
        characters = characters.concat(charSpecial);
        console.log(characters);
    }
    // Check that user selected at least one valid character type
    if (!includeUpper && !includeLower && !includeNumeric && !includeSpecial) {
        alert(`User must select at least one character type.`);
        console.log(`User must select at least one character type.`);
        return;
    }

    // Populate password array with random characters
    // Make an array to put the password in
    var password = new Array(passwordLength);

    // Need to make sure there is at least one of each type of selected character in the generated password

    // Randum number generation for each spot in the password
    for (i = 0; i < passwordLength; i++) {
        password[i] = characters[Math.floor(Math.random() * characters.length)];
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
