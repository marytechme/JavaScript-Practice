// if and else if statement
var z = 2;
if (z == 2) {
    document.write("z is equal to 2");
} else {
    document.write("z is not equal to 2");
}
var myAge = 30;
if (myAge > 21){
    document.write("You are over 21!");
} else if(myAge > 20){
    document.write("You are over 20");
} else if (myAge > 10){
    document.write("You are over 10")
} else {
    document.write("You are not over 10")
}

// comparison and logical operators
var myAge = 26;
if (myAge < 18 || myAge > 30 || myAge === 25) {
    document.write("you aint coming");
} else {
    document.write("you are coming");
}

// // while loops 
// var age = 5;
// while (age < 10){
//     document.write("Your age is less than 10");
//     age++;
// }
// document.write("You are now over 10");

// // for loops 
// for (i = 0; i < 10; i++){

//     if(i === 5 || i === 7){
//         continue;
//     }
//     document.write(i);

//     if(i === 6){
//        break;
//     }
// }
// document.write("the link break");
// var links = document.getElementsByTagName("a");
// for (i = 0; i < links.length; i++) {
//     links[i].className = "link-" + i;
// }

function getAverage (a,b,c,d,e,f){
    var average = (a + b + c + d + e + f) / 6; //local variable
    console.log(average);
    return average;
}
var myResult = getAverage(7,8,9,10,11,12); //global variable
console.log("the average is " + myResult);

var a = "apple";
var b = 7;

if (isNaN(a)){
    console.log("this aint a number");
}
else{
    console.log("a number")
}

var myString = 'I \'m a "fun" blue string';
console.log(myString.length)
console.log(myString.toLowerCase());

console.log("The string start at position " + myString.indexOf("blue"));
if (myString.indexOf("blue") === -1){
    console.log("the string cannot be found in the words")
} else{
    console.log("The blue start at position " + myString.indexOf("blue"));
}

var string1 = "abc";
var string2 = "bcd";

console.log(string1 > string2);
// split and slice function 
var str1 = "Hello World";
console.log(str1);
var str2 = str1.slice(2);
console.log(str2);
var str3 = str1.slice(2,7);
console.log(str3);
