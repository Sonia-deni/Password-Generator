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

// Function to prompt user for password options and return the options as an object
function getPasswordOptions() {

  var options = {}; //create empty object to store user options
  
  var numChars = prompt("How many characters would you like for your password? Please choose between 10 and 64"); //prompt user to input their password length, store in variable. Convert string to int
  var isValid = passwordLengthCheck(numChars); //boolean to check if valid, while it isn't, keep prompting for new input
  while(!isValid){
    numChars = prompt("Please try again. Choose between 10 and 64");
    isValid = passwordLengthCheck(numChars);
  }
  options["passwordLength"] = parseInt(numChars); //assign the value to the key in the object

  //Once a correct password length has been selected, validate the rest of the options
  var isEnough = populateOptions(); //call the function to get the input and store in the object, also return true/false if none have been selected
  while(!isEnough){ //alert while there aren't any character types selected, and re prompt for input
    alert("Please try again. You must select at least one character type");
    isEnough = populateOptions();
  }
  console.log(options);
  
  function populateOptions(){
    options["lowercaseLetters"]= confirm("Would you like lowercase letters?");
    options["uppercaseLetters"]= confirm("Would you like uppercase letters?");
    options["numberCharacters"]= confirm("would you like numbers?");
    options["specialCharacters"]= confirm("Would you like special characters?");
    //check at least one of the character types is selected
    var selectedOptions = Object.values(options); //create an array of key values to check for true/false
    selectedOptions.shift(); //remove the first element before checking for boolean values, otherwise it will always return true
    var isSelected = selectedOptions.some(function(checkSelected){ //this function will return true if there is at least one option selected
      return checkSelected;
    }); 
    return(isSelected);
  }
  return options;
}

//function to check password length validity
function passwordLengthCheck(numChars){
  if(isNaN(numChars)){ //check if input is a number first
    return false;
  }
    else if(numChars<10 || numChars>64){ //if input is a number, check if it is in range
      return false; 
      }
      else{
        return true;
      }
  } 


// Function to generate password with user input
function generatePassword() {

   var passwordOptions = getPasswordOptions();
   //create an array with the options to randomly generate characters from. Use the options from the object passed back from the getPasswordOptions function
   var characterChoices = [];
   if(passwordOptions.lowercaseLetters){
    characterChoices = characterChoices.concat(lowerCasedCharacters);
   }
   if(passwordOptions.uppercaseLetters){
    characterChoices = characterChoices.concat(upperCasedCharacters);
   }
   if(passwordOptions.numberCharacters){
    characterChoices = characterChoices.concat(numericCharacters);
   }
   if(passwordOptions.specialCharacters){
    characterChoices = characterChoices.concat(specialCharacters);
   }
   
   //create an empty string. Then for the length of the password, loop over the array and randomly select a character
   var password = "";
   var pLength = passwordOptions.passwordLength; 
   var oLength = characterChoices.length; //the length of the array of options, so that the random number generated is correct
   for(var i=0; i<pLength; i++){
    var ramdomCharSelect = Math.floor(Math.random()*oLength);
    password += characterChoices[ramdomCharSelect]; //add the randomly selected character to the string
   }
   console.log(password);
   return password;
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

