// Assignment Code
var generateBtn = document.querySelector("#generate");

// Make "generatePassword" function
function generatePassword() {
    // Establish user password criteria
    var includeUpper = document.getElementById("includeUpper").checked;
    console.log(`User selected: lower case ${includeUpper}`);
    // lowercase
    var includeLower = document.getElementById("includeLower").checked;
    console.log(`User selected: lower case ${includeLower}`);
    // Numeric
    var includeNumeric = document.getElementById("includeNumeric").checked;
    console.log(`User selected: numeric ${includeNumeric}`);
    // Special characters
    var includeSpecial = document.getElementById("includeSpecial").checked;
    console.log(`User selected: special ${includeSpecial}`);

    // Check that user selected at least one valid character type
    if (!includeUpper && !includeLower && !includeNumeric && !includeSpecial) {
        console.log(`User must select at least one character type.`);
        return "Select at least one character type";
    }

    // Get desired password length
    var passwordLength = parseInt(document.getElementById("passwordLength").value);
    
    // Make sure it's a number
    if (isNaN(passwordLength)){
        console.log('User entered a NaN')
        return "Password must be a number."
    }
    console.log(`User entered: ${passwordLength} as password length.`);

    // Check to make sure user selects a valid password length
    if (passwordLength < 7 || passwordLength > 128) {
        console.log(`Password must be between 8 and 128 characters`);
        return "Password must be between 8 and 128 characters";
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

    // Variable to track how many criteria the user selected
    var criteria = 0;

    // Array for fill characters
    var characters = new Array();

    // Put at least one of each type selected into the password array.
    if (includeUpper && password.length < passwordLength) {
        password.push(
            alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
        );
        characters = alphaUpper;
        criteria++;
    }
    if (includeLower) {
        password.push(
            alphaLower[Math.floor(Math.random() * alphaLower.length)]
        );
        characters = characters.concat(alphaLower);
        criteria++;
    }
    if (includeNumeric) {
        password.push(
            charNumeric[Math.floor(Math.random() * charNumeric.length)]
        );
        characters = characters.concat(charNumeric);
        criteria++;
    }
    if (includeSpecial) {
        password.push(
            charSpecial[Math.floor(Math.random() * charSpecial.length)]
        );
        characters = characters.concat(charSpecial);
        criteria++;
    }
    console.log(`User selected ${criteria} password criteria.`);

    // Fill out the rest of the password array with randomized characters from the selected arrays

    // Randomize the character array
    for (i = characters.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var k = characters[i];
        characters[i] = characters[j];
        characters[j] = k;
    }

    // Populate the rest of the password
    for (i = criteria; i < passwordLength; i++) {
        password.push(
            characters[Math.floor(Math.random() * characters.length)]
        );
    }

    // Randomize the password order
    for (i = password.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var k = password[i];
        password[i] = password[j];
        password[j] = k;
    }

    console.log(`User's randomly generated password is: ${password.join("")}`);

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
