const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

//   //print everyones first name
//   function firstNamePrinter(collection) {
//     for (const user of collection) {
//         console.log(user.firstName)
//     }
//   }
//   //firstNamePrinter(users)

//   //users according to attributes and value
//   function filter(collection, attribute1, value1, attribute2, value2){
//     for (const user of collection){
//         if (user[attribute1] === value1 && user[attribute2] === value2){
//             console.log(user.firstName)
//         }
//     }
//   }
//   filter(users, "favoriteAnimal", "Jaguar", "favoriteColor", "Yellow")

// function filter(collection, callback) {
//     for (const user of collection) {
//         if (callback(user)) {
//             console.log(user.firstName);
//         }
//     }
// }

// filter(users, function(user) {return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin"})


function filter(collection, cb){
    for (const user of collection) {
        if(cb(user)) {
            console.log(user.firstName)
        }
    }
}

filter(users, (user) => user.favoriteAnimal === "Jaguar" && user.favoriteColor === "Blue")