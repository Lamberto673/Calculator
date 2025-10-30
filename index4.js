// Date Objects = Objects that contain values that represents dates and times. These date objects can be changed and formatted
// Date (year, month, day, hour, minute, second, ms)
// 2024-01-02T12:00:00Z
// const date = new Date();
// const date1 = new Date("2023-12-21");
// const date2 = new Date("2024-01-01");

// if(date1 < date2){
//     console.log("Happy new year");
//     const year = window.prompt(`Whats the year`);
//     date.setFullYear(year);
//     console.log(date)
// }
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const second = date.getSeconds();
// const milisecond = date.getMilliseconds();
// const dayofweek = date.getDay();
// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(2);
// date.setHours(12);
// date.setMinutes(0);
// date.setSeconds(0);

// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(second);
// console.log(milisecond);
// console.log(dayofweek);

// Closure = A function defined inside another function, the inner function has access to the variables

// function outer(){

//     let message = "Hello Words";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();
// function createacounter(){
//     let count = 0;

//     function loopingPlus(){
//         let i = window.prompt(`How many times do you want to loop?`);
//         for(let j = 0; j < i; j++){
//             increment();
//         }
//     }
//     function loopminus(){
//         let j = window.prompt(`How many times do you want to loop?`);
//         for(let k = 0; k < j; k++){
//             decrement();
//         }
//     }
//     function increment(){
//         count++;
//     }
//     function decrement(){
//         count--;
//     }
//     function getcount(){
//         if(count < 0){
//             return `negative: ${count}`;
//         }else{
//             return `positive: ${count}`;
//         }
//     }
//     return {increment, decrement, loopingPlus, loopminus, getcount};

// }

// const count = createacounter();
// count.loopingPlus();
// count.loopminus();
// console.log(`Your count number is ${count.getcount()}`);

// function createGame(){
//     let score = 0;
//     function increasesScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//     }
//     function decreasesScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//     }
//     function getSCore(){
//         return score;
//     }
//     return {increasesScore, decreasesScore, getSCore}
// }
// const game = createGame();
// game.increasesScore(10);
// game.increasesScore(10);
// game.decreasesScore(10);
// console.log(`Your score is ${game.getSCore()}`);
// setTimeout(() => {
//     console.log("Hello")
// }, 1000);
// setTimeout(function(){
//     console.log("Hello");
// }, 1000)
// function sayhello(){
//     window.alert(`Hello`);
// }
// const systemout = setTimeout(() => {
//     console.log("Hello");
//     window.alert("Hello");
// }, 2000);
// console.log(systemout);

// function foo(){
//     let g = x + 2;
//     console.log(g);
// }
// let x = 2;
// foo()
// const btn = document.getElementById("btn");


// function loading(){
//     btn.addEventListener("click", ()=> {btn.value = "Loading"
//     setTimeout(() =>{
//         btn.value = "Done";
//         setTimeout(() => {
//             btn.value = "Submit"
//         },500)
//     }, 1000)
// });
// }

// SetTimeout Function
// let timeoutID;
// function loading(){
//     timeoutID = setTimeout(() => window.alert("Hello"), 3000);
//     console.log("Starter")
// }
// function Clear(){
//     clearTimeout(timeoutID);
//     window.alert("Clearr");
// }

// function updateClock(){

//     const now = new Date();
//     let hours = now.getHours();
//     const merdiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);
//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2,0);

//     const timeString = `${hours}:${minutes}:${seconds} ${merdiem}`;

//     document.getElementById("clock").textContent = timeString;
// }

// updateClock();
// setInterval(updateClock, 1000);


// const display = document.getElementById("display");
// let timer = null;
// let startTime= 0;
// let elapsedTime = 0;
// let running = false;
// const newaudio = new Audio('audio/audio.mp3');

// function start(){
//     if(!running){
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         running = true;

//     }   
// }
// function stop(){
//     if(running){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         running= false;
//     }
// }function reset(){
//     clearInterval(timer);
//     elapsedTime = 0;
//     startTime = 0;
//     running = false;
//     display.textContent = "00:00:00";
// }
// function update(){
//     const currenttTime = Date.now();
//     elapsedTime = currenttTime - startTime;
    
//     let hours = Math.floor(elapsedTime / (1000*60*60));
//     let minutes= Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60)
//     let miliseconds = Math.floor(elapsedTime % 1000/ 10);
    
//     let hour = String(hours).padStart(2, "0");
//     let minute = String(minutes).padStart(2, "0");
//     let second = String(seconds).padStart(2, "0");
//     let milisecond = String(miliseconds).padStart(2, "0");

//     display.textContent = `${hour}:${minute}:${second}:${milisecond}`;
//     if(hour === '0' && minute === '0' && second === '5' && milisecond === '0'){
//         newaudio.play();
//     }
// }   
// ES6 Modules = A file that contains code that is executed in strict mode and the variables, functions, and classes defined in the module are scoped to the module itself and not to the global scope. Modules can import and export code from other modules using the import and export keywords.
// import {PI, getArea, getCircumference, getVolume} from "./Mathutil.js";

// console.log(PI);
// const getcircumference = getCircumference(5);
// const getarea = getArea(5);
// const volume = getVolume(10);

// console.log(`The circumference is ${getcircumference.toFixed(2)}`);
// console.log(`The area is ${getarea.toFixed(2)}`);
// console.log(`The volume is ${volume.toFixed(2)} cm^2`);


//synchronous vs asynchronous
// synchronous = code that is executed line by line, each line of code waits for the previous line to finish before executing

// asynchronous = code that is executed independently of the main program flow, allowing other operations to continue while waiting for a task to complete

// function func1(callback){
//     setTimeout(() => {
//         console.log("Task 1");
//         callback()}
//     ,3000);
// }
// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }
// // console.log("Task1");
// func1(func2);

//Error  = object that contains information about an error that occurred during the execution of a program. Errors can be thrown and caught using try...catch statements, and they can also be created using the Error constructor or one of its subclasses such as TypeError, ReferenceError, SyntaxError, etc.

// try{} = block of code that is executed and monitored for errors
// catch{} = block of code that is executed if an error is thrown in the try block
// finally{} = block of code that is executed after the try and catch blocks, regardless of whether an error was thrown or not

// try{
//     console.log("Start of try runs");
// }
// catch(error){
//     console.error(`Error: ${error.message}`);
// }
// finally{
//     // Close file
//     // close connection
//     // release resources
//     console.log("This always exectures")
// }
// // Network Error
// // promise rejection
// //secutiry error
// console.log("You have come to the wrong place");

// try{
//     const dividand = Number(window.prompt("Enter the dividand: "));
//     const divisor = Number(window.prompt("Enter the divisor: "));

//     if(divisor == 0){
//         throw new Error("You cannot divide by zero");
//     }
//     if(isNaN(divisor) || isNaN(dividand)){
//         throw new Error("You must enter a number");
//     }
//     const result = dividand / divisor;
//     console.l0g(result);
// }
// catch(error){
//     console.error(`Error: ${error.message}`);
// }
// console.log("You have come to the wrong place");

const display = document.getElementById("display");


function appendNumber(number){
    let v = display.value;
    if(v === "0" || v === "Error"){
        display.value = number;
        return;
    }
    display.value += number;
}
function appendOperator(operator){
    const v = display.value;
    if (v && /[0-9.)(]$/.test(v)) {
    display.value += operator;
    }else if(/[+\-*/]$/.test(v)){
        display.value = v.slice(0, -1) + operator;
    }

}
function calculateResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = error.message
        setTimeout(() => {
            display.value = "";
        },1000);
    }

}
function clearDisplay(){
    display.value = "";

}
function toggleSign(input){
    let displayyy = display.value;
    if(!displayyy){
        return;
    }
    let lastOP = Math.max(
        displayyy.lastIndexOf("+"),
        displayyy.lastIndexOf("-"),
        displayyy.lastIndexOf("*"),
        displayyy.lastIndexOf("/")
    );

    let prefix = displayyy.slice(0, lastOP + 1);
    let lastnum = displayyy.slice(lastOP + 1);

    if(lastnum.startsWith("(-") && lastnum.endswith(")")){
        lastnum = lastnum.slice(2, -1);
    }else{
        lastnum = "(-" + lastnum + ")";
    }
    display.value = prefix + lastnum;

}
function appendDecimal(){
    const displayy = display.value;
    if(!displayy){
        return;
    }
    if(displayy && /[0-9]$/.test(displayy)){
        display.value += ".";
    }
}
function backspace(){
    display.value = display.value.slice(0,-1);
}
function clearEntry(){
    display.value = "I dont know what this for :)";
    setTimeout(() => {
            display.value = "";
        },1000);
}