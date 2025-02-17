const reverseString = function(message) {
    let messageArray = message.split("")
    let lenArray = messageArray.length - 1
    let reversed = ""
    for (let i = lenArray; i >= 0; i--) {
        reversed += messageArray[i]
    } return reversed

};

// Do not edit below this line
module.exports = reverseString;
