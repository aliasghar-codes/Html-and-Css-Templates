// // Practice Questions

// // Q1) Write a JavaScript program that displays the largest integer among two integers.
// let firstint = Number.parseInt(prompt('Enter your first integer to compare.','0')); //declaring first integer
// let secondint = Number.parseInt(prompt('Enter your second integer to compare.','0')); // declaring second integer
// if(firstint > secondint){
//     console.log(` The larger value between ${firstint} and ${secondint} is first value which is ${firstint}`); // printing first value if its larger
// }
// else if(secondint > firstint){
//     console.log(` The larger value between ${firstint} and ${secondint} is second value which is ${secondint}`); // printing second value if its larger
// }
// else{
//     console.log('Values are equal'); // If the values are equal
// }
// console.log('Done!')

// // Q2) Take a user input in number and check if it is prime or not?
// let userinput = Number.parseInt(prompt("Enter the number your want to check")); // taking userinput in number
// let count = 2; //initializing variable with a default value of 2
// let prime = true; // initializing a variable with default value of true
// while(userinput > count){ // code will go into while loop if user input value is greater than count variable
//     if(userinput % count == 0){ // if userinput value completely divides by count variable
//         prime = false; // prime variable will be false
//         break; // this will break if statement
//     }
//     count++; // if user given value is not completely divisible by count it will increase it till user input value 
// }
// if(prime){ // at the end if the prime variable is true it will print prime
//     console.log("Your number is prime");
// }
// else{
//     console.log("Your number is not prime"); // if the prime number is changed it will print not prime number
// }

// //Q3) Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// // Sample numbers : 3, -7, 2
// // Output : The sign is -

// let d = 3 * -7 * 2; // storing the product in d variable
// if(d < 0){ // if product is less than 0 it means value is negative so print -
//     alert('The sign of the product of your three values is -');
// }
// else if(d > 0){ // if product is greater than 0 it means value is positive so print +
//     alert('The sign of the product of your three values is +');
// }
// else{ // if the product is 0 print 0
//     alert('The product is equal to 0');
// }

// // Q4) We are given array of marks of students. Filter out the marks of the students that scored 90+
// let marks = [97, 64, 32, 49, 99, 96, 86]; // array to store marks of individual students
// let newarr = marks.filter((val)=>{ // filter method to return only the values which are greater than 90
//     return val > 90
// }) 
// console.log(newarr) // printing newly made array

// // Q5) Take a number n as a input from the user. Create an array of numbers from 1 to n.
// // Use the reduce method to calculate the sum of all the numbers in the array.
// // Use the reduce method to calculate the product of all the numbers in the array.

// let n = Number.parseInt(prompt('Enter your number')); // Taking user input 
// let arr = []; // Initializing empty array to store values according to user input
// for(let i = 1; i <= n; i++){ // Using for loop to add values in to empty array according to user input
//     arr[i-1] = i; 
// }
// console.log(arr); // Printing user created array
// let newarr1 = arr.reduce((i, n)=>{return i + n}); // Reducing array to a single value which will be the sum of all the values of array
// console.log(`The sum of user created array is ${newarr1}`); // Printing the sum of array
// let newarr2 = arr.reduce((i, n)=>{return i * n});// Reducing array to a single value which will be the product of all the values of array
// console.log(`The product of user created array is ${newarr2}`); // Printing the product of the array

// // Q6) Write a program that displays the largest integer among two integer.

// let i = prompt("Enter your first number: ");

// let j = window.prompt('Enter your second number: ');

// if (parseInt(i) > parseInt(j)) {
//     console.log(`The larger of ${i} and ${j} is ${i}`)
// }
// else if (parseInt(j) > parseInt(i)) {
//     console.log(`The larger of ${i} and ${j} is ${j}`)
// }
// else {
//     console.log(`Your both numbers are equal! `)
// }

// // Q7) Write to program to get user input for his name then in alert print hello, name but the catch is to only capitalize the first letter of the name of the user.

// let userName = prompt("Enter your name");
// let first = userName.slice(0, 1);
// first = first.toUpperCase()
// let last = userName.slice(1);
// last = last.toLowerCase();
// alert("Hello, " + first + last);

// // Q8) First ask for the dog age then convert it into its equivalent human age.

// let dogAge = Number.parseInt(prompt("Enter the age of your dog to convert it"));
// alert(`Your dog is ${(dogAge - 2) * 4 + 21} years old in human years`);

// // Q9) Create a snake water and gun game using javascript.

// console.log("***********Starting the game**************")

//         const user_input = prompt("Type 's' for snake, 'w' for water and 'g' for gun")

//         const randomno = Math.floor(Math.random() * 3) + 1;

//         if (randomno == 1){
//             computer_choice = 's'
//         }
//         else if (randomno == 2){
//             computer_choice = 'w'
//         }
//         else {
//             computer_choice = 'g'
//         }
        
//         if (user_input == computer_choice){
//             console.log("Its a tie\n", "Computer choose: ", computer_choice)
//             console.log("You choose: ", user_input)
//         } 
//         else if (user_input == 's'){
//             if (computer_choice = 'w'){
//                 console.log("You win!\n", "Computer choose: ", computer_choice)
//                 console.log("You choose: ", user_input)
//             }
//             else if (computer_choice == 'g'){
//                 console.log("Computer wins! ", "Computer choose ", computer_choice)
//                 console.log("You choose: ", user_input)
//             }
//         }
//         else if (user_input == 'w'){
//             if (computer_choice == 's'){
//                 console.log("You lose!", 'Computer choose: ', computer_choice)
//                 console.log("You choose: ", user_input)
//             }
//             else if (computer_choice == 'g')
//             console.log("You win!", 'Computer choose: ', computer_choice)
//             console.log("You choose: ", user_input)
//         }
//         else if (user_input == 'g'){
//             if (computer_choice == 's'){
//                 console.log("You Win! ", 'Computer choose: ', computer_choice)
//                 console.log("You choose: ", user_input)
//             }
//             else if (computer_choice == 'w'){
//                 console.log('You Lose', 'Computer choose: ', computer_choice);
//                 console.log("You choose: ", user_input);
//             }
//         }
//         else {
//             console.log("Follow the instruction carefully and try again by refreshing the page. LOL!");
//         }

// // Q10) Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
	
// function lifeInWeeks(age){
//     let years = 90 - age;
//     let months =  years * 12;
//     let weeks = years * 52;
//     let days = years * 365;
//     console.log(`You have ${days} days, ${weeks} weeks and ${days} days left.`);
// }
// lifeInWeeks(20);

// //Q11) Create a BMI calculator using functions.

// function bmi(weight, height){
//     return weight / Math.pow(height, 2);
// }
// let value = Math.round(bmi(65, 1.8));
// console.log(value);

// // Q12) Create love score generator that takes two inputs and then generate a random number between 1 and 100 and show it to user in alert.

// prompt("Write down the first name");
// prompt("Write the second name");
// let randNo = Math.floor(Math.random() * 100) + 1;
// alert("Your love score is " + randNo + "%");

// // Q13) Create a leap year calculator.

// function isLeap(year){
    
// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//         console.log(`Year ${year} is a leap year`);
//         } else{
//             console.log(`Year ${year} is not a leap year`);
//         }
//     } else{
//         console.log(`Year ${year} is a leap year`);
//     }
// } else{
// console.log(`Year ${year} is not a leap year`);
// }
// }
// isLeap(2004);

// // Q14) Print integers one-to-N, labeling any integers divisible by three as “Fizz,” integers divisible by five as “Buzz” and integers divisible by both three and five as “FizzBuzz.”.

// let arr = [];
// let i = 1;
// function fizzBuzz(){
// if(i % 3 == 0 &&  i % 5 == 0){
//     arr.push("FizzBuzz");
// } else if(i % 5 == 0){
//     arr.push("Buzz");
// } else if(i % 3 == 0){
//     arr.push("Fizz");
// } else{
//     arr.push(i);    
// }
// console.log(arr);
// i++;
// }
// fizzBuzz();

// // Q15) You are going to write a function which will select the name of random person from the list of names. The person selected will then have to pay for everybody's food bill.

// let names = ["Ali", "Asghar", "Chloe", "Angela", "Yu"];
// function whospaying (names){
//     let numberOfPeople = names.length
//     let randNo = Math.floor(Math.random() * numberOfPeople);
//     let NameOfRandomPerson = names[randNo];
//     return NameOfRandomPerson + " is going to pay for the lunch today."
// }
// whospaying(names);

// // Q16) Write a function with while loop to print all the lyrics of 99 bottle of beer on the wall.

// let i = 99;
// while (i >= 0){
//     if (i == 1){
//         console.log(`${i} bottles of beer on the wall, ${i} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`);
//     }
//     else if (i == 0){
//         console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,\n99 bottles of beer on the wall.`);
//     }
//     else{
//     console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i -1} bottles of beer on the wall.`);
//     }
//     i--;
// }

// // Q17 Create a fibonacci sequence generator inside a function.
    
//     function fg(n){
//     let earr = [];
//     if(n == 1){
//         earr = [0];
//     } else if (n == 2){
//         earr = [0, 1];
//     } else{
//         earr = [0, 1];
//         for (let i = 2; i < n; i++){
//             earr.push(earr.at(-1) + earr.at(-2))
//         }
//     }
//     return earr;
// }
// let output = fg(10);
// console.log(output);

// // Q18) Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// // Sample numbers : 0, -1, 4
// // Output : 4, 0, -1
// let a = 0;
// let b = -1;
// let c = 4;
//     if (a > b && a > c){
//         if(b > c){
//             alert(`${a}, ${b}, ${c}`);
//         } else{
//             alert(`${a}, ${c}, ${b}`)
//         }
//     } else if (b > a && b > c){
//         if(a > c){
//             alert(`${b}, ${a}, ${c}`)
//         }else{
//             alert(`${b}, ${c}, ${a}`)
//         }
//     } else if (c > b && c > a){
//         if(a > b){
//             alert(`${c}, ${a}, ${b}`)
//         } else{
//             alert(`${c}, ${b}, ${a}`)
//         }
//     }

// // Q19) Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// // Sample numbers : -5, -2, -6, 0, -1
// // Output : 0
// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let e = -1;

// if(a > b && a > c && a > d && a > e){
//     alert(`${a} is the greatest of all`);
// } else if(b > a && b > c && b > d && b > e){
//     alert(`${b} is the greatest of all`);
// } else if(c > a && c > b && c > d && c > e){
//     alert(`${c} is the greatest of all`);
// } else if(d > a && d > c && d > b && d > e){
//     alert(`${d} is the greatest of all`);
// } else {
//     alert(`${e} is the greatest of all`)
// }

// // Q20) Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// // Sample Output :
// // "0 is even"
// // "1 is odd"
// // "2 is even"

// for (let i = 0; i <= 15; i++){
//     if(i % 2 == 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
// }
// // Q21) Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// // David	80
// // Vinoth	77
// // Divya	88
// // Ishitha	95
// // Thomas	68
// // The grades are computed as follows :
// // <60	F // 0~59 = F
// // <70	D // 60~69 = D
// // <80	C // 70~79 = C
// // <90	B // 80~89 = B             
// // <100 A // 90~100 = A

// const students = {
//     David: 80,
//     Vinoth: 77,
//     Divya: 88,
//     Ishitha: 95,
//     Thomas: 68
// }

// for(let student in students){
//     if(students[student] < 60){
//         console.log(student + " got 'F' grade");
//     } else if(students[student] < 70 && students[student] >= 60){
//         console.log(student + " got 'D' grade");
//     } else if(students[student] < 80 && students[student] >= 70){
//         console.log(student + " got 'C' grade");
//     } else if(students[student] < 90 && students[student] >= 80){
//         console.log(student + " got 'B' grade");
//     } else if(students[student] <= 100 && students[student] >= 90){
//         console.log(student + " got 'A' grade");
//     }
// }
// // Second Attempt after a sneak peak at the solution

//     let average = (80 + 77 + 88 + 95 + 68) / 5
//     if(average < 60){
//         console.log("There collective grade is 'F' because the average is " + average);
//     } else if(average < 70 && average >= 60){
//         console.log("There collective grade is 'D' because the average is " + average);
//     } else if(average < 80 && average >= 70){
//         console.log("There collective grade is 'C' because the average is " + average);
//     } else if(average < 90 && average >= 80){
//         console.log("There collective grade is 'B' because the average is " + average);
//     } else if(average <= 100 && average >= 90){
//         console.log("There collective grade is 'A' because the average is " + average);
//     }

// // Q22)  Write a JavaScript program to construct the following pattern, using a nested for loop.
// // *  
// // * *  
// // * * *  
// // * * * *  
// // * * * * *
// let x = "";
// for(let i = 1; i < 6; i++){
//     x += "* ";
//     console.log(x);
// }

// // Q23) Create a website with a div tag containing a random joke from an array of jokes generate a random number till the length of an array and then on every page load your website should show a random joke from that array on that div tag.

// let array = [
//     "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.",
//     "I invented a new word! Plagiarism!",
//     "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
//     "Why do we tell actors to 'break a leg?' Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor.",
//     "Helvetica and Times New Roman walk into a bar.“Get out of here!” shouts the bartender. “We don’t serve your type.”",
//     "Knock! Knock! Who’s there? Control Freak. Con…OK, now you say, “Control Freak who?” ",
//     "Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.",
//     "A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!” “Don’t worry,” said the doc. “Those are just contractions.”",
//     "A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”",
//     "Did you hear about the actor who fell through the floorboards? He was just going through a stage."
// ];
// let randNo = Math.floor(Math.random() * array.length); 
// document.getElementById("first").innerHTML = `<p>${array[randNo]}</p>`

// // Q24) Write a javascript program to generate a random number. The program then takes a n input from the user to tell them whether the guess was correct, greater or lesser than the original number. 100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 and 100.

//     let randNo = Number.parseInt((Math.random() * 100) + 1);
//     let userInput = Number.parseInt(prompt("Enter the number you want")); 
//     let score = 100;
//     while(userInput !== randNo){
//         userInput = Number.parseInt(prompt("Enter the number you want"));
//         if(userInput > randNo){
//             alert("Your number is greater than the computer generated number");
//         } else if(userInput < randNo){
//             alert("Your number is lesser than the computer generated number");
//         }
//         score--;
//     }
//     console.log(`You guessed it right, The number was ${randNo} and your score is ${score}`);

