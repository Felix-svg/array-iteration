//forEach
// let studentNames = ["Spongebob", "Patrick", "Sandy", "Mr Krab", "Plankton"];

// studentNames.forEach(logEachStudentName);

// function logEachStudentName(student) {
//   console.log(student);
// }

// //.map
// let nums = [2, 4, 6, 8, 10];
// let square = nums.map(squareNumbers);
// let cube = nums.map(cubeNumbers);
// console.log(square);
// console.log(cube);

// function squareNumbers(number) {
//   return Math.pow(number, 2);
// }
// function cubeNumbers(number) {
//   return Math.pow(number, 3);
// }

//.filter
//creates a new array with all elements that pass the test provided by a function

// let studentAges = [16, 15, 21, 18, 25, 19];
// let isAdult = studentAges.filter(checkAge);
// console.log(isAdult);

// function checkAge(ages) {
//   return ages >= 18;
// }

// //.reduce
// //reduces an array to a single value
// let price = [5, 10, 15, 20, 25, 30];
// let totalPrice = price.reduce(checkOut);
// console.log(`The total is:\n\t\t $${totalPrice}`);

// function checkOut(acc, curr) {
//   return acc + curr;
// }

// //https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// function alphabetPosition(text) {
//   let letters = ["a","b","c","d", "e", "f", "g", "h", "i", "j",
//    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
//  ];

//  let letCount = 1;
//  letters.forEach(function (char){
//   for (let i = 0; i < char.length; i++) {
//     console.log(letCount[i])
//   }
//  })

//  const letterCount = text.split('')
//  for(const letter of letterCount) {

//  }
//  return text;
// }
// alphabetPosition('felix');

//.reduce
//find the max number
// const nums = [10, 25, 43, 30, 79];

// const output = nums.reduce(function(acc, curr){
//  if(curr > acc){
//   acc = curr
//  }
//  return acc;
// }, 0)

// console.log(output)

// const users = [
//   {
//     firstName: "Felix",
//     lastName: "Omondi",
//     age: 25,
//   },
//   {
//     firstName: "Jeff",
//     lastName: "Justus",
//     age: 13,
//   },
//   {
//     firstName: "Justus",
//     lastName: "Jeff",
//     age: 13,
//   },
//   {
//     firstName: "Astra",
//     lastName: "Star",
//     age: 1,
//   },
//   {
//     firstName: "Ed",
//     lastName: "Oz",
//     age: 27,
//   },
//   {
//     firstName: "Mini",
//     lastName: "Star",
//     age: 24,
//   },
// ];

// //1. get first and last names
// const fullName = users.map(user => user.firstName + " " + user.lastName)
// console.log(fullName)

// //2. get how many people have a particular age
// const ageGroup = users.reduce(function(acc, curr){
//   if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age]
//   }else{
//     acc[curr.age] = 1
//   }
//   return acc
// }, {})
// console.log(ageGroup)

// //3. find the first name of people with age less than 15
// const lessFifteen = users.filter(y => y.age < 15).map(y => y.firstName)
// console.log(lessFifteen)



const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
    personalQuote: "You're never too old to learn something new",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
    personalQuote: "I just got lost in thought - it was unfamiliar territory",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote: "Always remember you’re unique, just like everyone else",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
    personalQuote: "Behind every great man is a woman rolling her eyes",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote:
      "You don’t have to see the whole staircase, just take the first step",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
    personalQuote:
      "Failure is not the opposite of success: it’s part of success",
  },
];