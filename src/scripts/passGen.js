const generartePassword = (pass) => {
    // Clear password
    pass = "";
    // Alphabets
    const upperAlphabet  = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerAlphabet  = "qwertyuiopasdfghjklzxcvbnm";
    const symbolAlphabet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    const numbers        = "1234567890";
    
    // Get selected options 
    var passLength   = document.getElementById("sliderInfo").value;
    var hasUppercase = document.getElementById("uppercaseButton").value;
    var hasLowercase = document.getElementById("lowercaseButton").value;
    var hasNums      = document.getElementById("numberButton").value;
    var hasSymbols   = document.getElementById("symbolsButton").value;

    // Check password critria
    for (let index = 0; index <= passLength; index++) {
        if (hasUppercase && index<=passLength) {
            // Add uppercase char to password
            pass += upperAlphabet[Math.floor(Math.random()*upperAlphabet.length)];
            index++;
        }  
        if (hasLowercase && index<=passLength) {
            // Add lowercase char to password
            pass += lowerAlphabet[Math.floor(Math.random()*lowerAlphabet.length)];
            index++;
        }
        if (hasNums && index<=passLength) {
            // Add number to password
            pass += numbers[Math.floor(Math.random()*numbers.length)];
            index++;
        }
        if (hasSymbols && index<=passLength) {
            // Add symbol char to password
            pass += symbolAlphabet[Math.floor(Math.random()*symbolAlphabet.length)];
            index++;
        }
        
    }
    // Return password 
    document.getElementById("passwordPreview").value = pass;
}

export default generartePassword;