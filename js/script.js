// Variables (var)
//1 Declaring separately
var x;
var age;
//var studentsAge;
// var y;
// var square_area;  //snake_case
// var myVariable;  // camelCase

// variables can not start with numbers and can not have spaces
// Assign a value to the variables with = symbol
age = 19;
var studentsAge = 19;
var numberofStudents  = 10;


//Can also declare and assign a value at the same time
//var x = 21;

// 2 Declare multiple variables at once with comma separation
//var x,y,square_area;

var total = studentsAge * numberofStudents;
//console.log(total);

var x = 31;

var y = 3;

//console.log ( x % y);

// At this stage we can perform normal math operations

 var myMath = x + y;

// moreMath = x*y;

// even_Moremath = x%y;

//console.log("myMath equals " + myMath);
//console.log("moreMath equals " + moreMath);
//console.log("even_Moremath equals " + even_Moremath);

// What is happening in the console.log method ?
// + what is the plus doing

//Data Types that can be stored in Variables
//Numbers
//Strings (text)  'hello' or "hello"
//Boolean true or false
// null (empty)
//undefined ( not yet defined)

//var typeofCar = "infiniti";
//var happyMood = true;
//var happyMood = null;

//console.log (happyMood);

var numberofStudents = 25;
//console.log("1st variable assignment " + numberofStudents);

// numberofStudents = "25";
// console.log("2nd variable assignment " + numberofStudents);

// //numberofStudents = null;
// //console.log("3rd variable assignment " + numberofStudents);

//How to check for data type
//typeof numberofStudents;

//whatDataType = typeof numberofStudents;
//console.log ("numberofStudents is a " + whatDataType);

//var x = "10";

//To convert a string to a whole number/integer

//parseInt(x);

//combineStuff = parseInt('10') + 5;
//console.log(combineStuff);

// To convert to a floating number ( decimal)
// var gallonsGas = parseFloat('10.25');
// console.log(" gallonsGas = " + gallonsGas);

//Let's check to see what the data type is
// whatDataType = typeof gallonsGas;
// console.log ("gallonsGas is a " + whatDataType);

//Dialog Boxes
//alert("some text goes here");
//alert("Warning, It looks like your computer may have a virus");// outputs a string

//confirm  (Boolean value)
//confirm("are you sure?")
//confirm('Are you sure you want to delete this?'); //true or false

// var height, width, area;
// height = 5;
// width = 5;
// area = height * width;
//console.log(area);

//prompts
//var numberinGrade = 0;
var numberinGrade = prompt("Enter number of students in the 11th grade: "); //captures the value inserted.
console.log ("Number of students in 11th grade is  " + numberinGrade);

DonutsforStudents = numberinGrade * 2;
console.log ("Number of donuts the 11th grade students get   " + DonutsforStudents);





//What's wrong

// convertedStudents = parseInt(numberinGrade);
// DonutsforStudents = convertedStudents * 2;
// console.log ("Number of students that get donuts  " + DonutsforStudents);





// Diaconsole.log Boxes (alert, confirm, prompt)
// square_area = x*y
// console.log(square_area);
// alert(square_area);
//Conditional Statements (if/else)

  // if() {

  // } else {

  // };
