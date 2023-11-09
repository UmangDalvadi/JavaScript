const convertUpper = (str) => {
    let strReturn = str.split(" ");

    for (let i = 0; i < strReturn.length; i++) {
        strReturn[i] = (strReturn[i][0].toUpperCase() + strReturn[i].slice(1));
    }

    return strReturn.join(" ");
}

console.log(convertUpper("the quick brown fox"));