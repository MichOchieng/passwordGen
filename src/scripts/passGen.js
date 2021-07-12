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

    // Check password critria
    for (let index = 1; index <= passLength;) {
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
        if(!hasSymbols && !hasNums && !hasLowercase && !hasUppercase){
            // Stops infinite loop
            alert("You dont have anything selected!");
            break;
        }
        
    }

    // Temporary solution for scrambling the generated password
    var x = pass.split("");
    for (let index = passLength-1; index > 0; index--) {
        var j = Math.floor(Math.random() * (index + 1));
        var temp = x[index];
        x[index] = x[j];
        x[j] = temp;
    }

    var result = x.join("");

    // Return password 
    document.getElementById("passwordPreview").value = result;
}

export default generartePassword;