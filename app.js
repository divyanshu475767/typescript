"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.getElementById("button");
//const numResults: number[] = [];
const stringResults = [];
const numResults = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + "  " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
/*

if(buttonElement){
    buttonElement.addEventListener('click',()=>{
        const num1 = num1Element.value;
        const num2 = num2Element.value;
       
       
        const result = add(+num1, +num2);
        console.log(result);
       })
}

*/
function printResult(resultobj) {
    console.log(resultobj.val);
}
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringresult = add(num1, num2);
    numResults.push(result);
    stringResults.push(stringresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(' '));
});
