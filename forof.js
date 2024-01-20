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

//Chceck first name of user
function printFirstName(data) {
  for (const user of data) {
    console.log(user.firstName);
  }
}
printFirstName(users);

// //Check users who's favorite color is blue
// function blueUsers(data) {
//   for (const user of data) {
//     if (user.favoriteColor === "Blue") {
//         console.log(user.firstName);
//     }
//   }
// }
// blueUsers(users);

//Check users who's favorite color is red
// function redUsers(data) {
//     for (const user of data) {
//         if(user.favoriteColor === "Red"){
//             console.log(user.firstName)
//         }
//     }
// }
// redUsers(users)

// Put the color as a variable to get any user color by passing it as a second argument
function colorFilter(data, color){
    for (const user of data) {
        if(user.favoriteColor === color){
            console.log(user.firstName)
        }
    }
}
colorFilter(users, "Blue")
