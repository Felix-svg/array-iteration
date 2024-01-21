// const originalNumbers = [3, 5, 7, 9]

// function map(array, callback) {
//   const newArr = [];

//   for (const element of array) {
//     newArr.push(callback(element));
//   }
//   return newArr
// }

// const squaredNumbers = map(originalNumbers, function(num) {
//     return num * num
// })

// // const squaredNumbers = originalNumbers.map(nums => nums * nums)

// console.log(originalNumbers)
// console.log(squaredNumbers)

const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];

const updatedRoles = oldAccounts.map(account => Object.assign({}, account, { accessLevel: "admin" }));
console.log(updatedRoles);

// Using the spread operator
// const updatedRoles = oldAccounts.map(account => ({ ...account, accessLevel: "admin" }));
// console.log(updatedRoles);

const equippedEngineers = oldAccounts.map(function (eng) {
  return Object.assign({}, eng, { equipment: "Laptop" });
});
// console.log(oldAccounts)
// console.log(newEngineers)
// console.log(userIds)
console.log(equippedEngineers);
