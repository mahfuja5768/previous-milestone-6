// const std = {
//     name: 'kabir shing',
//     money: 5000,
//     study: 'Chemistry',
//     subjects: ['calculus', 'algebra','geometry'],
//     exam: function(){
//         return this.name + ' is participating in an exam';
//     },
//     improveExam: function(subject){
//         this.exam();
//         return this.name + 'is taking improvement exam on ' +  subject;
//     },

//     treatDay: function(amount , tips){
//         this.money = this.money - amount - tips;
//         return this.money;
//     }
// }

// // const output = std.exam();
// // console.log(output);
// // const reExam = std.improveExam('calculus');
// // console.log(reExam);
// const remaining = std.treatDay(900 , 100);
// // console.log(remaining);


// // const dress = {color: 'gray', price: 1400, isCleaned: true, height: 40};
// const keys = Object.keys(dress)
// // console.log(keys)
// const values = Object.values(dress)
// // console.log(values)
// const pair = Object.entries(dress)
// // console.log(pair )
// const twoDimension = [ [ 'color', 'gray' ], [ 'price', 1400 ], [ 'isCleaned', true ] ];

/* seal */  //value change hbe 
// delete dress.isCleaned;
// Object.seal(dress);
// delete dress.isCleaned;
// dress.price = 1500;
// dress.height = 38;
// console.log(dress)

// /* freeze */  //kono value change hbe na
// Object.freeze(dress);
// delete dress.isCleaned;
// dress.price = 1500;
// dress.height = 38;
// console.log(dress)


// const dress = {color: 'gray', price: 1400, isCleaned: true, height: 40};
// for(const key in dress){
//     console.log(key)
// }
// console.log(dress)

const first = {a: 5, b: 2, d:5};
const second = {a: 5, c:5, b: 2};

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
       for(const key of firstKeys){
        if(first[key] !== second[key]){
           return false
        }
       }
       return true
    }
}

// const isSame = compareObject(first, second);
// console.log(isSame)

const kabir = {
    name: 'kabir singh',
    money: 5000,
    study: 'Chemistry',
    subjects: ['calculus', 'algebra','geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return this.name + 'is taking improvement exam on ' +  subject;
    },

    treatDay: function(amount , tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
};

const badamAli = {
    name: 'baddam singh',
    money: 8000
}

/* call r apply sorasori & apply te array er modde arguments thakebv   r bind alada function call korete hoy abr */
// const result2 = kabir.exam.call(badamAli);
// console.log(result2)
// const result2 = kabir.treatDay.call(badamAli, 400, 40);
// console.log(result2)
// const result2 = kabir.treatDay.apply(badamAli, [400, 40]);/* apply */
// console.log(result2)

const result2 = kabir.treatDay.bind(badamAli);/* bind */
// const remaining = result2(400, 40)
// console.log(remaining)