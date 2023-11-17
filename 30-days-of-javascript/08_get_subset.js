const prompt = require("prompt-sync")();
const returnSubset = (arr, len) => {
    let returnArr = [];
    const creatSubset = (currentArr, currentLen) => {
        if (currentArr.length === len) {
            returnArr.push([...currentArr]);
            return;
        }
        for (let i = currentLen; i < arr.length; i++) {
            currentArr.push(arr[i]);
            creatSubset(currentArr, i + 1);
            currentArr.pop();
        }
    };
    creatSubset([], 0);
    return returnArr;
};

let arr = [1, 2, 3, 4, 5];
let len = 2;
console.log(returnSubset(arr, len));