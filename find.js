//find Array elemrnts using .indexOf(), .find()

//.indexof() ###used for simple conditions
//it takes 2 argumets, the value you are looking for 
//and an optional start position. It returns the index of the
//first matching element
const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];
console.log(cards.indexOf('ace of spades', 2))
console.log(cards.indexOf('jack of clubs', 2)) //returns -1 since the start position is after the element


//.find
//you pass a callback function to the method. The method will automatically
//iterate through the array, call the callback on each value, and return the first
//element in the array that satisfies the condition defined by the function.
//If no matching element is found, undefined is returned.

//find odd values
function isOdd(element, index, array){
    return element % 2 === 1;
}

console.log([4, 6, 8, 10].find(isOdd))
console.log([4, 3, 5, 10].find(isOdd))

//find numbers greater that 7
function greaterThanSeven(element){
    return element > 7;
}
console.log([6,7,9,11,12].find(greaterThanSeven))