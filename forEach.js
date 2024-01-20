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

function printFirstName(collection) {
  collection.forEach((user) => {
    const container = document.getElementById("container");
    const namesList = document.createElement("ul");
    const names = document.createElement("li");

    names.textContent = `${user.firstName + " " + user.lastName}`;
    names.style.listStyle = "none";

    namesList.appendChild(names);
    container.append(names);

    console.log(user.firstName);
  });
}
printFirstName(users);
