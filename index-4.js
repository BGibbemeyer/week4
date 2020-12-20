console.log("Question 1");
console.log("");
/*1. Using template literals instead of concatenation, 
write a function that takes firstName and lastName and returns
‘fistName lastName'*/

function createName(firstName, lastName) {
    return `${firstName}, ${lastName}`;
};

let output = createName("Jane", "Doe");
console.log(output);
console.log("");

console.log("Question 2");
console.log("");
/*2. Write the same function as above as an arrow function with a
 different name.*/

let createAnotherName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createName("John", "Doe"));
console.log("");


console.log("Question 3");
console.log("");
/*3. Look up the JavaScript functions setTimeout() and setInterval(). 
Notice how they each take a callback.*/

console.log("Part a:");
/*a. Using setTimeout, write an inline, anonymous (has no 
    named assigned to it) arrow function in the callback 
    parameter position. The function should alert ‘Time is up!’. 
    Choose whatever length of time you want for the timeout.*/

var func = setTimeout(() => { alert("Time Is Up!!"); }, 3000);
console.log("");

console.log("Part b:");
/*b.	Write an arrow function named askAreWeThereYet that alerts
 ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet
into the callback parameter position. Choose whatever length
 of time you want for the interval.*/

 const askAreWeThereYet = (callback) => {
    setInterval(callback, 3000);
  }
  const callback = () => {
      alert("Are we there yet");
  }
  askAreWeThereYet(callback);

console.log("");

console.log("Question 4");
console.log("");

/*4.	In this step you are going to write a function that takes
a callback to better understand how callbacks work.*/


/*a. Write a function named processSplicedValue that takes 3 
parameters – an array, the index of the element to be spliced
from the array, and a callback that will process the sliced 
element.*/

let myArr = ["apple", "orange", "bananas", "kiwi", "more fuxckin fruit", "and even more", "blah fuckin blah", "I wonder if this is enough"];


function processSplicedValue(myArr, index, callback) {//part a
    let removed = myArr.splice(index, 1); //part b
    callback(removed);//part c
}
 processSplicedValue(myArr, 0, console.log); //part d


/*b.	Inside the function, use the first two parameters to
 splice an element from the array.*/


/*c.	Call the callback function and pass the spliced value 
into it.*/

/*d.	Outside of your function, create an array of strings, call 
processSplicedValue, and pass the array, an index number, and
console.log into it. 
For example: processSplicedValue(arrayName, 2, console.log);*/

/*e.	Call the processSplicedValue function again but this time
pass in the alert method instead of console.log.*/

//processSplicedValue(myArr, 1, alert); 

/*f.	Call the processSplicedValue function again, but this time
pass in an anonymous arrow function that alerts the spliced 
value.*/

processSplicedValue(myArr, 1, (value) => {
    alert(value)
});

/*g.	Call the processSplicedValue function one more time, but 
this time, pass in a custom function of your choice that you 
should create and name.*/

processSplicedValue(myArr, 2, function fruit(fuzzy) {
    alert(`${fuzzy}`)
}); 

