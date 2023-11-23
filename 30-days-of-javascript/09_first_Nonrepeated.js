const nonRepeated = (str) => {

    let returnStr = [];

    for (let char of str) {
        if (returnStr.includes(char)) {
            returnStr.splice(returnStr.indexOf(char), 1);
        }
        else {
            returnStr.push(char);
        }
    }

    return returnStr[0];
}

console.log(nonRepeated("abacddbec"));