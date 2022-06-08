'use strict';

// Problem
// 1. https://javascript.info/task/closure-sum

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(5)(5));

// 2. https://javascript.info/task/filter-through-function

function inBetween(startRan, endRan) {
    return function (ele) {
        return ele >= startRan && ele <= endRan;
    }
}

const inArray = (arrVal) => {
    return function (ele) {
        return arrVal.includes(ele);
    }
}

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];


console.log((arr.filter((ele) => ele >= 3 && ele <= 6)));
console.log((arr.filter(inBetween(3, 6))));
// 3,4,5,6

let arrVal = [1, 2, 10];
console.log(arr.filter((ele) => arrVal.includes(ele)));
console.log((arr.filter(inArray([1, 2, 10]))));
// 1,2

// 3. https://javascript.info/task/sort-by-field

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// by name (Ann, John, Pete)
console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));

// by age (Pete, Ann, John)
console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));

function byField(fieldName) {
    return (a, b) => {
        return a[fieldName] - b[fieldName];
    }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {// create a shooter function,
            console.log(j); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

// That’s essentially the same, because for on each iteration generates a new lexical environment, with its own variable i.So shooter generated in every iteration references its own i, from that very iteration.

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

console.log(army.forEach(shooter => {
    return shooter();
}));
