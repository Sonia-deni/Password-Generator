// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var options = {} //create empty object to store user options
  var numChars = parseInt(prompt("How many characters would you like for your password? Please choose between 10 and 64")); //prompt user to input their password length, store in variable. Convert string to int
  var isValid = passwordLengthCheck(numChars); //boolean to check if valid, while it isn't, keep prompting for new input
  while(!isValid){
    numChars = prompt("Please try again. Choose between 10 and 64");
    isValid = passwordLengthCheck(numChars);
  }
  
  options["passwordLength"] = numChars;
  options["lowercaseLetters"]= confirm("Would you like lowercase letters?");
  options["uppercaseLetters"]= confirm("Would you like uppercase letters?");
  options["numberCharacters"]= confirm("would you like numbers?");
  options["specialCharacters"]= confirm("Would you like special characters?");
  console.log(options);
  return options;
}

//function to check password length validity
function passwordLengthCheck(numChars){
    if(numChars<10 || numChars>64){
      console.log("fail");
      return false;
      }
      else{
        console.log("pass");
        return true;
      }
  } 


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

   getPasswordOptions();
   
    

    
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



//when the user clicks the button
  //prompt for length
  //check valid, if so, store. If not, re prompt
  //next prompt for character types
  //store boolean true/false

//create new array for password characters to choose from
//if character type == true, add this array to password array
//do this for each character type
//change passwordlength from a string to a number using parseInt()
//loop over the new long array for the length of the password, and each time randomly select a character. Push this into a new array and return it
