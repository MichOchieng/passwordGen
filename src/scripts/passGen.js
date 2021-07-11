const generartePassword = () => {
    // Clear password
    var pass = "";
    // Alphabets
    const upperAlphabet  = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerAlphabet  = "qwertyuiopasdfghjklzxcvbnm";
    const symbolAlphabet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    const numbers        = "1234567890";
    
    // Get selected options 
    var passLength   = document.getElementById("mySlider").value;
    var hasUppercase = document.getElementById("uppercaseButton").checked;
    var hasLowercase = document.getElementById("lowercaseButton").checked;
    var hasNums      = document.getElementById("numberButton").checked;
    var hasSymbols   = document.getElementById("symbolsButton").checked;

    console.log(passLength);
    // Check password critria
    for (let index = 1; index <= passLength;) {
        if (hasUppercase && index<=passLength) {
            console.log("hasUppercase: " + hasUppercase);
            // Add uppercase char to password
            pass += upperAlphabet[Math.floor(Math.random()*upperAlphabet.length)];
            index++;
        }  
        if (hasLowercase && index<=passLength) {
            console.log("hasLowercase: " + hasLowercase);
            // Add lowercase char to password
            pass += lowerAlphabet[Math.floor(Math.random()*lowerAlphabet.length)];
            index++;
        }
        if (hasNums && index<=passLength) {
            console.log("hasNums: " + hasNums);
            // Add number to password
            pass += numbers[Math.floor(Math.random()*numbers.length)];
            index++;
        }
        if (hasSymbols && index<=passLength) {
            console.log("hasSymbols: " + hasSymbols);
            // Add symbol char to password
            pass += symbolAlphabet[Math.floor(Math.random()*symbolAlphabet.length)];
            index++;
        }
        if(!hasSymbols && !hasNums && !hasLowercase && !hasUppercase){
            alert("You dont have anything selected!");
            break;
        }
        
    }
    // Return password 
    document.getElementById("passwordPreview").value = pass;
}

export default generartePassword;