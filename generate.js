// Elements

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

//Password Characters as per https://owasp.org/www-community/password-special-characters

let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|:;<,>.?';
let passwordLength = '';
let passwordValue = '';

const createPassword = () => {
        //ask for a password length
        //first prompt to determine password length
        passwordLength = (prompt("What length password are you looking to generate? (Select a length between 8 and 128 characters)"));

        // check for password length input
        if (passwordLength <= 7 || passwordLength >= 129) {
            alert("Please enter a valid password length by choosing a number between 8 and 128 to determine character length of the randomly generated password");
            return;
        }

        // confirms length of password 
        else {
            alert(`Please proceed with selecting what comprises your ${passwordLength} character long password! Atleast one selection must be considered to create a randomly generated password.`);
        }
        //Create Password
        passwordValue = ''; // resets password each time to ensure we start with a clean slate

        for (let i = 0; i < passwordLength; i++) {
            let number = Math.floor(Math.random() * characters.length);
            passwordValue += characters.substring(number, number + 1) // adds the second character to first by appending it as opposed to replacing it 
        }

        password.value = passwordValue;
    }
    //Event Listener

generateBtn.addEventListener('click', createPassword);