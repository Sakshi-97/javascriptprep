let test = 80;
console.log(test);

var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2); /*The map() returns a new array with applied function*/
const map2 = array1.map(function(x){ return x * 2 });
console.log(map1);
console.log(map2);

var array1 = ['apple','banana','mango'];
var array2 = ['pear','grapes','guava'];
console.log(`the list of fruits is :- ${array1.concat(array2)}`); /*The concat() merge two array*/


var array1 = ['zero', 'one', 'two'];
var iterator1 = array1.entries();
console.log(iterator1.next().value); /*The entires() returns a new array with key and value pair*/
console.log(iterator1.next().value);
console.log(iterator1.next().value);


var words = ['spray', 'future', 'elite', 'experience', 'destruction', 'pool'];
const result = words.filter(word => word.length == 6);
console.log(result);


var array1 = [5, 12, 8, 130, 44];
function isLargeNumber(element) 
{
  return element < 13;
}
console.log(array1.findIndex(isLargeNumber)); /*The findindex() returns the index of first element that satisfy the condition*/


var games = ['chess', 'badminton', 'hockey', 'badminton', 'cricket'];
console.log(games.indexOf('badminton')); /*The indexof() returns the index of first index at which element can be found*/
console.log(games.indexOf('badminton', 2));
console.log(games.indexOf('ludo'));

var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); /*The join() returns a string by joining all the elements of the array by comma or a particular seperator*/
console.log(elements.join('/'));
console.log(elements.join('->'));

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);/*The pop() method removes the last element from an array and returns that element.*/
plants.pop();
console.log(plants);

var animals = ['pigs', 'goats', 'sheep'];
console.log(animals.push('cows'));/*The push() method adds one or more elements to the end of an array and returns the new length of the array*/
console.log(animals);
animals.push('chickens');
console.log(animals);

var array1 = ['one', 'two', 'three'];
console.log('original array is: ', array1);
var reversed = array1.reverse(); /*The reverse() reverse the whole array*/
console.log('the reverse array is: ', reversed);

var array1 = [1,2,3]
var shifted_element = array1.shift();/*The shift() removes the first element of the array and returns that element*/
console.log(array1);
console.log(shifted_element);

var animals = ['cow','dog','elephant','camel','tiger'];
console.log(animals.slice(1));/*The slice() returns the portion of the array into a new array*/
console.log(animals.slice(1,4));

const array6 = [1, 2, 3, 4];
const reducer = function(accumulator, currentValue){
console.log(accumulator,currentValue);
return accumulator + currentValue
};
console.log(array6.reduce(reducer));/*work like fibnocci series*/


function isBelowThreshold(currentValue) {
  return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.*/


var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');/*The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements*/
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

