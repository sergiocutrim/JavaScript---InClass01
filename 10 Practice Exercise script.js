//#1

const studentGrade = [85, 97, 44, 37, 76, 60];
let size = studentGrade.length;
let sum =0;
for (let i=0;i<size;i++){
    sum += studentGrade[i];  
}
let average = sum / size;
console.log("The average is:" + average);


//#2

const prices = [250, 645, 300, 900, 50];
console.log("Normal prices:" + prices);
for (let i=0; i<prices.length; i++){
    prices[i] = prices[i]*0.9;
}
console.log("Prices with 10% discount: "+ prices);


//#3
const companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
console.log("All companies: " + companies);
companies.shift();
console.log("A) removing the first one: "+ companies);
const index = companies.indexOf('Uber');
companies.splice(index, 1, 'Ola');
console.log("B) removing Uber and adding Ola: "+ companies);
companies.push('Amazon');
console.log("C) pushing Amazon as the last one: "+ companies);

