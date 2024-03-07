const anArray = [];
for (i = 1; i <= 10; i++) {
    anArray.push(i);
}

// a. An array of all the odd numbers
const oddNumbers = anArray.filter(element => element %2 === 1);

console.log(oddNumbers);  

// b. An array of all the numbers divisible by 2 OR 5
const divBy2or5 = anArray.filter(idx => idx % 2 === 0 || idx %5 === 0);
console.log(divBy2or5); 

// c. An array of numbers divible by 3 that are squared by 3
const divBy3SquaredBy3 = anArray.filter(x => x % 3 === 0).map(y => y ** 3);
console.log(divBy3SquaredBy3); 

// d. The sum of the following: square the numbers divisible by 5
const sumDivBy5 = anArray.filter(idx => idx %5 === 0).reduce((total, idx) => total + idx, 0);;
console.log(sumDivBy5); 