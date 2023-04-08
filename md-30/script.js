function addNum(first, second = 0){   ///default perametre
    return first + second;
};
// console.log(addNum(2, 3));


////template literal & backtik:::

const person1 = 'Tom';
const person2 = 'Dom';
const person3 = 'Bom';

const multiline = `
${person1} is taller than ${person3},
& ${person2} is taller than ${person1}
`;
// console.log(multiline);

/* arrow function:::: */

const add = (first, second) => first + second;
const result = add(10, 20);
// console.log(result)

const doubleIt = (num) => num * 2;
// console.log(doubleIt(2))


/* spread::::  */
const max = Math.max(12, 93, 22, 111, 44, 98);
// console.log(max)
const numbers = [18 ,42, 344, 4];
const largest = Math.max(1, 6, ...numbers, 1111, 66);
// console.log(largest)


/* obj-destructuring ::::: */

const fish = {
    name: 'Rupchada',
    address: 'coxs-bazar',
    color: 'silver',
    phn: '01342244312',
    supply: 'Dhaka'
};


const address = fish.address;
// console.log(address)

// const phn = fish.phn; /// method-1
// console.log(phn)  
const {phn} = fish;  /// method-1
// console.log(phn)

const {age} = {name:'Tom', age: 20, job: 'std'};
// console.log(age)

/* array-destructuring ::::: */
const [a, b] = [22, 3, 11, 44]; /// ONLY TWO NUMS WILL BE GETTED
// console.log(a, b)
// console.log(b)

// const [a, b, ...c] = [22, 3, 11, 44]; ///WITH SPREAD CAN GET ALL NUMS
// console.log(a, b, ...c)