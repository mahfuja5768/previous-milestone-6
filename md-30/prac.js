/* pblm-1: */
/* a */
const sum = (num1, num2, num3) => num1 * num2 * num3;
// console.log(sum(2, 3, 4));

/* b */
const sentence = `
I am aweb developer.
I love to code.
I love to eat kathlichu.
`;
// console.log(sentence);

/* c */
const sum1 = (num1, num2 = 2) => num1 * num2;
// console.log(sum1(2));


/* pblm-2: */
// function getName(names){
//   let evenNumberName = [];
//   for(const name of names){
//     const lengthOfNames = name.length;
//     if(lengthOfNames % 2 === 0){
//       evenNumberName.push(name)
//     }
//   }
//   return evenNumberName;
// }
// const names = ['Tom','Shanta','Jerry', 'Stephen','Myra', 'Robi', 'Bebol'];
// const evenNumberName = getName(names);
// console.log(evenNumberName);

const getName = (names) => {
  let evenNumberName = [];
  for(const name of names){
    const lengthOfNames = name.length;
    if(lengthOfNames % 2 === 0){
      evenNumberName.push(name)
    }
  }
  return evenNumberName;
};

// const names = ['Tom','Shanta','Jerry', 'Stephen','Myra', 'Maru' , 'Robi', 'Bebol'];
// const evenNumberName = getName(names);
// console.log(evenNumberName);



/* pblm-3: */

const sumResult = (nums) => {
  const squareElements = [];
    for(const num of nums){
    const getSquareResult  = Math.pow(num, 2);
    squareElements.push(getSquareResult);
  };
  let sum = 0;
  for(const element of squareElements){
    sum += element
  }
  const average = sum / squareElements.length;
  return average;
}
const numbers = sumResult([2, 2, 2]);
// console.log(numbers)


/* pblm-4: */

const num1 = [1, 3, 5, 35, 2];
const num2 = [13, 3, 54, 34, 12];

const joinNums = [...num1, ...num2];
const maxNum = Math.max(...joinNums);
// console.log(maxNum)
