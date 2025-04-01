





//DOM elements to render on the browser
const displayResult = document.getElementById("result");
const numbers = document.querySelectorAll(".numbers");


const operators = document.querySelectorAll(".operators");

const clearResult =document.getElementById("clear");
const equalTo = document.getElementById("equalto");
const reciprocal =document.getElementById("reciprocal");
const squares= document.getElementById("squares");
const squareroot = document.getElementById("squareroot");
const plusOrMinus = document.getElementById("plusorminus");

let currInput = "";
let prevInput = "";
let operator = null;

    for(let i=0; i<numbers.length; i++){
        numbers[i].addEventListener("click",(e)=>{
          currInput += numbers[i].innerHTML
           
            displayResult.innerHTML =currInput;
            
        })
        
    }
   
for(let i=0;i<operators.length;i++){
        operators[i].addEventListener("click", (e)=>{
           
if(currInput === "") return;
if(prevInput !== ""){
    calculate();
}


operator = operators[i].innerText;
prevInput = currInput;
currInput = "";


        })
    }

const calculate = ()=>{
    let result;
    const prev = parseFloat(prevInput);
    const current = parseFloat(currInput);
    console.log(prev, current);

    if (isNaN(prev) || isNaN(current)) return;
    
    
    switch (operator) {
        
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by 0");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        
             
        default:
            return;
    }

    currInput = result.toString();
    operator = null;
    prevInput = "";
    displayResult.innerHTML = currInput;

}

function clearDisplay (){
    clearResult.addEventListener("click", ()=>{
        displayResult.innerHTML = "";
        currInput = "";
        prevInput ="";
        operator = null;
    
    })
}

equalTo.addEventListener("click", calculate);
reciprocal.addEventListener("click", ()=>{
    let reciprocalResult = 1/currInput;
    
    displayResult.innerHTML = reciprocalResult.toString();

    
});

squares.addEventListener("click", ()=>{
    let squaresResult = Math.pow(currInput, 2);
   
    displayResult.innerHTML = squaresResult.toString();
    
})
squareroot.addEventListener("click",()=>{
    let squarerootResult = Math.sqrt(currInput);
    displayResult.innerHTML = squarerootResult.toString();
    
});

plusOrMinus.addEventListener("click",()=>{
    if (currInput.startsWith('-')) {
        
        currInput = currInput.slice(1);
      } else {
        currInput = '-' + currInput;
      }

    displayResult.innerHTML = currInput;
})


























// // const number1 = document.getElementById("number1");
// // const number2 = document.getElementById("number2");
// // const number3 = document.getElementById("number3");
// // const number4= document.getElementById("number4");
// // const number5 = document.getElementById("number5");
// // const number6 = document.getElementById("number6");
// // const number7 = document.getElementById("number7");
// // const number8 = document.getElementById("number8");
// // const number9 = document.getElementById("number9");
// // const zero = document.getElementById("zero");

// const numbers = document.querySelectorAll("#numbers");
// const operators = document.querySelectorAll("#operators");
// const result = document.getElementById("result");
// const equalto = document.getElementById("equalto");
// // const addition = document.getElementById("addition");
// // const subtraction = document.getElementById("subtraction");
// // const division = document.getElementById("division");
// // const multiply = document.getElementById("multiply");
// // const equalTo = document.getElementById("equalto");

// console.log(numbers);
// // for(const num of numbers){
// // num.addEventListener("click", (e)=>{
// //     let currValue = num.innerHTML;
// //     console.log(currValue);
// //     console.log(currValue.length);
// //     let prevValue = currValue[currValue-1];
// //     console.log(prevValue);

// // })
// // } 

// // const addFunc = ()=>{
// //     let currValue = result.innerHTML;
// //     console.log(currValue)
// // }
// equalto.innerHTML = result.innerHTML;
// console.log(equalto.innerHTML)
//      numbers.forEach((item)=>{
//         item.addEventListener("click", (e)=>{
//             //console.log(e.target.innerHTML);
//             result.innerHTML= e.target.innerHTML
           
//             let currValue = result.innerHTML;
// console.log(currValue);
// let prevValue = currValue[currValue.length-1];
// console.log(prevValue);
// if(currValue === "") return;
// if(prevValue !== ""){
//     let resultNum;
//     if(isNaN(parseFloat(prevValue)) || isNaN(parseFloat(currValue))) return ;
//         switch(e.target.innerHTML){
//             case "+":
//                 result = prevValue + currValue;
//                 break;
//             case "-":
//                 result = prevValue - currValue;
//             case "*":
//                 result = prevValue * currValue;
//             case "/":
//                 if(currValue === 0){
//                     alert("cannot divide by 0");
//                     //clearDisplay();
//                     return;
//                 }
//                 result = prevValue / currValue;   
//             default:
//                 return;            
//         }
    
//         currValue = resultNum.toString();
//         e.target.innerHTML = null;
//     prevValue ="";
//         result.innerHTML = currValue;
    
// }

// //let prevValue = currValue[]
//             // const input = item.value;
//             // return currInput.push(input);
//             //  const input = item.value;
//             //  currInput = input.toString()
//             //  console.log(currInput);
//             //  result.innerHTML = currInput;
//             //  console.log(result.innerHTML);
//             //  return  result.innerHTML
             
//         })
//     })
// console.log(result.innerHTML);


// // number1.addEventListener("click", (event)=>{

// // });


// // number2.addEventListener("click", ()=>{
    
// //     return result.innerHTML = 2;
// // });
// // number3.addEventListener("click", ()=>{
// //     return result.innerHTML = 3;
// // });
// // number4.addEventListener("click", ()=>{
// //     return result.innerHTML = 4;
// // });
// // number5.addEventListener("click", ()=>{
// //     return result.innerHTML = 5;
// // });
// // number6.addEventListener("click", ()=>{
// //     return result.innerHTML = 6;
// // });
// // number7.addEventListener("click", ()=>{
// //     return result.innerHTML = 7;
// // });
// // number8.addEventListener("click", ()=>{
// //     return result.innerHTML = 8;
// // });
// // number9.addEventListener("click", ()=>{
// //     return result.innerHTML = 9;
// // });
// // zero.addEventListener("click", ()=>{
// //     return result.innerHTML = 0;
// // });
// // addition.addEventListener("click", addFunc);
// // subtraction.addEventListener("click", operatorFunc);
// // division.addEventListener("click", operatorFunc);
// // multiply.addEventListener("click",operatorFunc);
// // equalTo.addEventListener("click", calculate);








// // const numbers = document.querySelectorAll(".numbers");
// // let newArray = [];
// // // console.log(numbers);
// // // console.log(numbers.length);
// // // console.log(numbers[0]);
// // console.log(newArray);


// // const clickedNumbers = ()=>{
// //     for(const number of newArray){
// //         number.addEventListener("click", clickedNumbers);
// //         switch(number){
// //             case "1":
// //                return 1;
// //            case "2":
// //                return 2;
// //                case "3":
// //                    return 3;
// //                case "4":
// //                    return 4;
// //                    case "5":
// //                        return 5;
// //                    case "6":
// //                        return 6;
// //                        case "7":
// //                            return 7;
// //                        case "8":
// //                            return 8;
// //                            case "9":
// //                                return 9;
// //                            case "0":
// //                                return 0;
           
           
           
// //                }

// //     }
    
// // }

// // for(let i=0; i<numbers.length;i++){
// //     const arrayPush =  numbers[i];
// //     newArray.push(arrayPush);
    


// // }





