function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomCode(length) {
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(getRandomInt(26) + 97);
    }
    return result;
}
