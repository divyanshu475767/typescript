const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.getElementById("button")!;
//const numResults: number[] = [];
const stringResults: string[] = [];

const numResults: Array<number>= [];


type NumorString = number | string;
type Result = { val: number; timestamp: Date };
interface Resultobj {
  // same as type result above
  val: number;
  timestamp: Date;
}

function add(num1: NumorString, num2: NumorString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + "  " + num2;
  } else {
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

function printResult(resultobj: Result) {
  console.log(resultobj.val);
}

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  const result = add(+num1, +num2);
  const stringresult = add(num1, num2);

  numResults.push(result as number);
  stringResults.push(stringresult as string);
  printResult({ val: result as number, timestamp: new Date() });
  console.log(numResults, stringResults);
});


const myPromise = new Promise<string>((resolve, reject) => {

    setTimeout(()=>{
        resolve('it worked')
    },1000)
})

myPromise.then((result) => {
    console.log(result.split(' '));
})