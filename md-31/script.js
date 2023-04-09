const user = {
    id: 323,
    name:'Myra',
    address:{
        street: {
            first:'pilkuni',
            second:'jora mosjid'
        }
    }
    
};
// console.log(user.address.street.first)
// console.log(user.address.stret?.first) ///optional chaining


/* map */
const nums = [2, 6, 4, 8, 3];
const makeDouble = nums.map(a => a *2);
// console.log(makeDouble)

const nums1 = [2, 6, 4, 8, 10];
const half = nums1.map(n => n/2);
// console.log(half)

/* get first letter */
const names = ['Tom','Shanta','Jerry', 'Stephen','Myra', 'Maru' , 'Robi', 'Bebol'];
const firstLetter = names.map(friend => friend[0]);
// console.log(firstLetter);
const maxName = names.map(friend => friend.length);
// console.log(maxName);

const products = [
    {id:1, name:'mobile', price: 80000},
    {id:1, name:'watch', price: 30000},
    {id:1, name:'tablet', price: 50000}
];
const items1 = products.map(p => p.name);
// console.log(items1)
const items = products.map(p => p.price);
// console.log(items);

// /* forEach */   ata return dey na
const products1 = [
    {id:1, name:'mobile', price: 80000},
    {id:1, name:'watch', price: 30000},
    {id:1, name:'tablet', price: 50000}
];
// products1.forEach(p => console.log(p))



/* filter & find */

const nums2 = [12, 55, 63, 34, 23, 21, 33] ;
const bigNums = nums2.filter(num => num % 2 === 0);
// console.log(bigNums)


// const products2 = [
//     {id:1, name:'mobile', price: 80000},
//     {id:1, name:'watch', price: 30000},
//     {id:1, name:'tablet', price: 50000}
// ];
// const bigPrice = products2.filter(product => product.price > 30000);
// console.log(bigPrice); /// filter sob gula dibe array er modde but find sudu first element ta dey

/* find */
const products2 = [
    {id:1, name:'mobile', price: 80000},
    {id:1, name:'watch', price: 30000},
    {id:1, name:'tablet', price: 50000}
];
const bigPrice = products2.find(product => product.price > 30000);
// console.log(bigPrice); /// filter sob gula dibe array er modde but find sudu first element ta dey

const nums3 = [12, 24, 63, 34, 23, 21, 33] ;
const bigNums3 = nums3.find(num => num % 2 === 0);////find
// console.log(bigNums3)
// const nums3 = [12, 22 , 24, 36, 63, 34, 23, 21, 33] ;
// const bigNums3 = nums3.filter(num => num % 2 === 0);
// console.log(bigNums3)

/* reduce */

const nums4 = [1, 2, 3, 4, 5];
//.reduce (accumulation, initial value)
//accumulation use two parameters
// const total = nums4.reduce((previous, current) => previous + current, 0)
// const total = nums4.reduce( (previous, current) => {
//    console.log(previous, current);
//     return previous + current
// }, 0);
// console.log(total)



/* syntactic sugar :::: class */
class Instructor{
    name;
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quize for module ${module}`)
    }
};
    // const aamir = new Instructor('aamir', 'mumbai');
    // console.log(aamir);
    // aamir.startSupportSession(6.00);
    // aamir.createQuiz(31);

    const myra = new Instructor('Myra', 'mumbai');
    // console.log(myra);

    