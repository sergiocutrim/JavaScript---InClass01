//Challenge 1

const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();

console.log('Challenge 1 answer is:');
console.log(arr);


//Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2.splice(1,5));

console.log('Challenge 2 answer is: ');
console.log(arr3);

