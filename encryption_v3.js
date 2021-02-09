
function clickedEncypt() {
    //get input and shif amount then send it to encryption
    var input = document.getElementById("EncryptData").value;
    var steps = parseInt(document.getElementById("shift").value);
    var enc = encrypt(input, steps);

    //debug
    console.log("Encrypted text: " + enc);
    //change HTML
    document.getElementById("enc").textContent = enc;
}
function clickedDecrypt() {
    //get input and shif amount then send it to decryption
    var input = document.getElementById("DecryptData").value;
    var steps = parseInt(document.getElementById("shift").value);
    var dec = decrypt(input, steps);

    //debug
    console.log("Decrypted text: " + dec);
    //change HTML
    document.getElementById("dec").textContent = dec;
}

function encrypt(text, offset) {
    var result = "";
    //search each character and set the new encrypted character to it
    for (var i = 0; i < text.length; i++) {
        var ascii = text[i].charCodeAt();
        //if the input char = the character inside chars
        if (ascii >= 97 & ascii <= 122) {
            result += String.fromCharCode(((ascii - 97 + offset) % 26) + 97)
        } else if (ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(((ascii - 65 + offset) % 26) + 65)
        }else{
            result += text[i];
        }
    }
    //return array[,,]
    return result;
};

function decrypt(text, offset) {
    //split the text
    offset = -offset + 26;
    var result = "";
    //search each character and set the new encrypted character to it
    for (var i = 0; i < text.length; i++) {
        var ascii = text[i].charCodeAt();
        //if the input char = the character inside chars
        if (ascii >= 97 & ascii <= 122) {
            result += String.fromCharCode(((ascii - 97 + offset) % 26) + 97)
        } else if (ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(((ascii - 65 + offset) % 26) + 65)
        }else{
            result += text[i];
        }
    }
    //return array[,,]
    return result;
};

