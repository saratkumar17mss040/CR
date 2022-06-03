'use strict';

// 1. hello world

console.log("hello world");

// 2. evaluating expressions

console.log(2 + 2) // 4
console.log(5 * 15) // 75
console.log(10 % 2) // 0
console.log(19 - 29) // -10
console.log('Hello' + 'World') // HelloWorld
console.log(3 + 10 * 2);   // logs 23
console.log((3 + 10) * 2); // logs 26


// 3. Calculate the grade if the marks are given

/* 0-40 - Fail
41-60 - C
61 - 80 B
81- 100 A */

const marks = 120;
console.log(calculateGrade(marks));


function calculateGrade(marks) {
    if (marks >= 0 && marks <= 40) {
        return 'Fail';
    }
    else if (marks >= 41 && marks <= 60) {
        return 'C';
    }
    else if (marks >= 61 && marks <= 80) {
        return 'B';
    }
    else if (marks >= 81 && marks <= 100) {
        return 'A';
    }
    else {
        return 'Next level';
    }
}


// 4. switch Case with default and fall - through
// 5. Creating and Calling Functions

const rank = 'A';
console.log(findRankValue(rank));

function findRankValue(rank) {
    switch (rank) {
        case 1:
        case "A":
        case "a":
            return "alpha";
        case 2:
        case "B":
        case "b":
            return "beta";
        case 3:
        case "c":
        case "C":
            return "gamma";
        default:
            return null;
    }
}

// 6. Playing with Strings and Indexes

const firstName = "sarath", lastName = "kumar", fullName = firstName + lastName;
console.log(firstName.length, lastName.length, fullName.length);
const fltFN = firstName[0], lltLN = lastName[0];
console.log(fltFN, lltLN);

const myObj = {
    name: 'Billy', weight: '45kg'
};

console.log(Object.create(myObj));
console.log(myObj.constructor.name);

// 7. CRUD our objects

const person = {
    name: 'Sam',
    jobTitle: 'Back-end dev',
    email: 'sam123@gmail.com',
    isVerified: false
};

console.log(person.name);
console.log(person.isVerified);

person.isVerified = true;

delete person.name;

person.firstName = "sarath";
person.lastName = "kumar";

console.log(person);


// 8. Updating Nested Objects

const userDetails = {
    name: {
        first: "Yash",
        last: "Gulati",
    },
    jobTitle: "JS Instructor @ Crio.do",
    email: {
        work: "",
        personal: "yashgulati.g1@gmail.com",
    },
    status: {
        isOnline: true,
        isVerified: false,
    }
};

userDetails.name.first = "sam";
userDetails.name.last = "son";
userDetails.jobTitle = "Full stack dev";
userDetails.email.personal = "sam456@gmail.com";
userDetails.status.isProMember = false;

console.log(userDetails);

// 9. Updating Nested Objects

const userDetails2 = {
    name: "Yash",
    jobTitle: "JS Instructor @ Crio.do",
    email: "yashgulati.g1@gmail.com",
    region: "Bengaluru",
    work: "Instructor"
};

const { name, jobTitle, work } = userDetails2;

console.log("%s %s %s", name, jobTitle, work);

// 10. Create an array with different values

const myArr = [];

myArr[0] = 1;
myArr[1] = "Hello";
myArr[2] = null;
myArr[5] = { name: "Yash" };

console.log(myArr);
myArr[5].name = "Sam";
console.log(myArr);


// 11. CRUD Todo with built-ins

/*
function Todo(todos) {
    this.todos = todos;

    this.getAllTodos = function () {
        return this.todos;
    }

    this.addTodo = function (todo, priority) {
        if (priority === "high") {
            this.todos.unshift(todo);
        }
        else {
            this.todos.push(todo);
        }
    }
    
    this.clearTodo = function (index) {
        this.todos[index] = null;
    }

    this.updateTodo = function (todo, index) {
        this.todos[index] = todo;
    }

    this.getTodo = function (index) {
        if (this.todos[index]) {
            return this.todos[index];
        }
        else {
            return this.todos;
        }
    }

    this.insertTodo = function (todo, index) {
        // [1,2,3,4,5]
        // 23 -> 2
        // [1,2,23,3,4,5]
        // let firstHalfArr = this.todos.slice(0, index);
        // firstHalfArr.push(todo);
        // let secondHalfArr = this.todos.slice(index);
        // this.todos = firstHalfArr.concat(secondHalfArr);
        this.todos.splice(index, 0, todo);
    }

    this.removeTodo = function (index) {
        this.todos.splice(index, 1);
    }
}


const todo = new Todo(["eggs", "milk"]);
console.log(todo.getAllTodos());
console.log(todo.addTodo("roast", "low"));
console.log(todo.getAllTodos());
console.log(todo.getTodo(1));
console.log(todo.clearTodo(1));
console.log(todo.getAllTodos());
console.log(todo.insertTodo("bill", 1));
console.log(todo.getAllTodos());
console.log(todo.getAllTodos());
console.log(todo.insertTodo("sam", 0));
console.log(todo.getAllTodos());
console.log(todo.removeTodo(2));
console.log(todo.getAllTodos());
console.log(todo.removeTodo(2));
console.log(todo.getAllTodos());

*/

// 12. CRUD Todo with own methods

function Todo(todos) {

    this.todos = todos;

    this.getAllTodos = function () {
        return this.todos;
    }

    this.addTodo = function (todo, priority) {
        if (priority === "high") {
            let index = 0;
            for (let i = this.todos.length; i > index; i--) {
                this.todos[i] = this.todos[i - 1];
            }
            this.todos[0] = todo;
        }
        else {
            this.todos[this.todos.length] = todo;
            // this.todos.push(todo);
        }
    }

    this.clearTodo = function (index) {
        this.todos[index] = null;
    }

    this.updateTodo = function (todo, index) {
        this.todos[index] = todo;
    }

    this.getTodo = function (index) {
        if (this.todos[index]) {
            return this.todos[index];
        }
        else {
            return this.todos;
        }
    }

    this.insertTodo = function (todo, index) {
        // [1,2,3,4,5]
        // 23 -> 2
        // [1,2,23,3,4,5]
        for (let i = this.todos.length; i > index; i--) {
            this.todos[i] = this.todos[i - 1];
        }
        this.todos[index] = todo;
    }

    this.removeTodo = function (index) {
        let newTodo = [];
        // let newTodoIndex = 0;
        for (let i = 0; i < this.todos.length; i++) {
            if (index !== i) {
                newTodo[i] = this.todos[i];
            }
        }
        this.todos = newTodo;
    }

    this.pop = function () {
        this.todos.length = this.todos.length - 1;
    }

}

const todo = new Todo(["1", "2", "3", "4"]);
todo.getAllTodos();
todo.insertTodo("bill", 0);
todo.addTodo("roast", "high");
todo.getAllTodos();
todo.removeTodo(2);
todo.pop();
todo.pop();
todo.getAllTodos();
// console.log(todo.getTodo(1));
// console.log(todo.clearTodo(1));
// console.log(todo.getAllTodos());
// console.log(todo.getAllTodos());
// console.log(todo.getAllTodos());
// console.log(todo.insertTodo("sam", 0));
// console.log(todo.getAllTodos());
// console.log(todo.removeTodo(2));
// console.log(todo.getAllTodos());
// console.log(todo.removeTodo(2));
// console.log(todo.getAllTodos());

// 13 - Destructuring Leads

const leads = ["Jim", "Jack", "Joel"];
const [name1, name2, name3] = leads;
console.log(name1, name2, name3);

// 14. Pig Latin

// 1. Mine

function translatePigLatin(str) {
    const vowels = "aeiouAEIOU";
    if (vowels.indexOf(str[0]) !== -1) {
        return str + 'way';
    }
    else {
        let newStr = "";
        let isVowelReached = false;
        for (let i = 0; i < str.length; i++) {
            if (isVowelReached) {
                break;
            }
            else if (vowels.indexOf(str[i]) === -1) {
                newStr += str[i];
            }
            else {
                isVowelReached = true;
            }
        }
        // console.log(newStr);
        // console.log(str.slice(newStr.length));
        return str.slice(newStr.length) + newStr + "ay";
        // newStr += "ay";
    }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));

// 2. Pig Latin - Other sol without indexOf

function translatePigLatin2(str) {
    if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u') return str + 'way';
    else {
        let i = 1;
        while (!(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')) {
            i++;
        }
        return str.slice(i) + str.slice(0, i) + 'ay';
    }
}

translatePigLatin2("consonant");


let str = "samson"

// 15. Reverse string

console.log(reverseString(str));

function reverseString(str) {

    // Cannot do this as strings are immutable in JS !
    // for (let i = 0; i < str.length/2; i++) {
    //     let letter = str[i];
    //     str[i] = str[str.length - i - 1];
    //     str[str.length - i - 1] = letter;
    // }
    // console.log(str);

    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

// 16. Find longest word

let sen = "The quick brown fox jumped over the lazy dog";

console.log(findLongestWordLength(sen));

function findLongestWordLength(sen) {
    let words = sen.split(" ");
    let lengthOfLongestWord = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > lengthOfLongestWord) {
            lengthOfLongestWord = words[i].length;
        }
    }
    return lengthOfLongestWord;
}

// 17. Transpose Matrix

function Matrix() {

    // Takes a double dimension array as an argument and prints it
    this.printMatrix = function () {
        return this.matrix;
    }

    // Generates and returns a matrix of given size
    this.generateMatrix = function (size) {
        let value = 0;
        let arr = Array(size);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Array(size);
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j] = value++;
            }
        }
        this.matrix = arr;
    }

    // Transposes the given matrix arr and returns the transposed matrix
    // [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ]
    this.transpose = function () {
        const result = [];
        // iteration for correct transpose
        for (let i = 0; i < this.matrix[0].length; i++) {
            const col = [];
            // column len = arr.length
            for (let j = 0; j < this.matrix.length; j++) {
                // console.log(j, i);
                col.push(this.matrix[j][i]);
            }
            result.push(col);
        }
        this.matrix = result;
    }

}

let matrix = new Matrix();
matrix.generateMatrix(4);
console.log(matrix.printMatrix());
matrix.transpose();
console.log(matrix.printMatrix());
matrix.transpose();
console.log(matrix.printMatrix());

console.log("=================");

let mat2 = new Matrix();
mat2.generateMatrix(2);
console.log(mat2.printMatrix());
mat2.transpose();
console.log(mat2.printMatrix());
mat2.transpose();
console.log(mat2.printMatrix());

// 18. Factorial

// 1. Mine

function factorialize(num) {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    console.log(fact);
    return fact;
}

factorialize(5);

// 2. Recursion

function factorialize2(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize2(5);


// 3. Tail call recursion

function factorialize3(num, factorial = 1) {
    if (num === 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

factorialize3(5);


// 4. Reduce

function factorialize4(num) {
    return num < 0 ? 1 :
        new Array(num)
            .fill(undefined)
            .reduce((product, _, index) => product * (index + 1), 1);
}

console.log(factorialize4(0));


// 19. Sort

// Bubble sort - Worst one

function largestOfFour(arr) {
    let largestOfFourArr = [], currArr = [];
    for (let i = 0; i < arr.length; i++) {
        currArr = arr[i];
        for (let j = 0; j < currArr.length; j++) {
            for (let k = 0; k < currArr.length - j - 1; k++) {
                if (currArr[k] < currArr[k + 1]) {
                    let temp = currArr[k];
                    currArr[k] = currArr[k + 1]
                    currArr[k + 1] = temp;
                }
            }
        }
        largestOfFourArr.push(currArr[0]);
    }
    return largestOfFourArr;
}

const arrForSort = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];
console.log(largestOfFour(arrForSort));

// 20. Repeat str

function repeatStringNumTimes(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    console.log(newStr);
}

repeatStringNumTimes("abc", 3);


function repeatStringNumTimes1(str, num) {
    return Array(num).fill(str).join("");
}

console.log(repeatStringNumTimes1("abc", 3));


function repeatStringNumTimes2(str, num) {
    return Array(num).fill(str).reduce((acc, str) => acc + str, "");
}

console.log(repeatStringNumTimes2("abc", 4));


// 21. Title case a sentence

// 1 

const titleCase = (str) => {
    const words = str.split(' ');
    const resArr = [];
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let resStr = '';
        for (let j = 0; j < currentWord.length; j++) {
            if (j === 0) resStr += currentWord[j].toUpperCase();
            else resStr += currentWord[j].toLowerCase();
        }
        resArr.push(resStr);
    }
    return resArr.join(' ');
};

console.log(titleCase("I'm a little tea pot"));


// 2

const titleCase2 = (str) => {
    const wordArr = str.split(' ');
    let newSenArr = [];
    for (let i = 0; i < wordArr.length; i++) {
        // [I'm,]
        const currentWord = wordArr[i];
        const firstLetter = currentWord[0].toUpperCase();
        const remainingLetter = currentWord.slice(1).toLowerCase();
        newSenArr.push(firstLetter + remainingLetter);
    }
    return newSenArr.join(" ");
}

console.log(titleCase2("I'm a little tea pot"));


// 22. Falsy Bouncer

function bouncer(arr) {
    return arr.filter(ele => ele);
}

// console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// 23. Slice and Splice

// 1

function frankenSplice(arr1, arr2, n) {

    let arr2Copy = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        arr2Copy.splice(n, 0, arr1[i])
        n++;
    }
    return arr2Copy;
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));

// 2

function frankenSplice2(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

console.log(frankenSplice2([1, 2], ["a", "b"], 1));

// 24. Profile Lookup

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

// 1 

function lookUpProfile(name, prop) {
    for (let contact of contacts) {
        if (contact.firstName === name) {
            if (contact.hasOwnProperty(prop)) {
                return contact[prop];
            }
            return "No such property";
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Kristia", "likes"));


// 25. Record collection

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// 1

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (records[id].hasOwnProperty(prop) && prop === "tracks" && value !== "") {
        console.log("hmm");
        records[id][prop].push(value);
    }
    else if (prop === "tracks" && value !== "") {
        records[id][prop] = [];
        const record = records[id][prop];
        record.push(value);
    }
    else if (value !== "") {
        records[id][prop] = value;
    }
    else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', ''));
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.log(updateRecords(recordCollection, 2548, "tracks", ""));

// 2

function updateRecords2(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (prop === 'tracks') {
        // this is called shortcircuit evaluation
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
    return records;
}

console.log(updateRecords2(recordCollection, 5439, 'artist', ''));
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.log(updateRecords2(recordCollection, 2548, "tracks", ""));


// 26. Reverse a number

// 1

function revNumber(num) {

    let revNum = 0;
    while (num !== 0) {
        let rem = num % 10;
        revNum = revNum * 10 + rem;
        num = Math.floor(num / 10);
    }
    return revNum;
}

console.log(revNumber(123));


// 2

function revNumber2(num) {

    let revNum = 0;
    while (num !== 0) {
        let rem = num % 10;
        revNum = revNum * 10 + rem;
        num -= rem;
        num /= 10;
    }
    return revNum;
}

console.log(revNumber2(123));

// 27. sort()

// sort() tries to convert the array elements to strings first and sorts lexicographically(dictionary order)

const nums = ["4", "20", "12", "1", "100"];
console.log(nums.sort());

// const strings = ["a", "B", "ac", "aa", "ab", "AB"];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], " ", nums[i].charCodeAt(0));
}

// console.log(strings.sort()); // Q. What would this print?

// 28. Sort an array of objects with the given key

const array = [
    {
        name: "Arnold",
        age: 25,
    },
    {
        name: "Tim",
        age: 6,
    },
    {
        name: "Sheila",
        age: 56,
    },
    {
        name: "Zack",
        age: 32,
    },
    {
        name: "Tom",
        age: 82,
    },
];

const sortedArrBasedOnAge = array.sort((a, b) => a.age - b.age);
console.log(sortedArrBasedOnAge);


// 29. Sort with complex logic - doubt ?

const objectArr = [
    { first_name: 'Lazslo', last_name: 'Jamf' },
    { first_name: 'Pirate', last_name: 'Bodine' },
    { first_name: 'Pirate', last_name: 'Prentice' }
];


const sortedArr = objectArr.sort((a, b) => {
    if (a.first_name === b.first_name) {
        return b.last_name - a.last_name;
    }
    return b.first_name - a.first_name;
});

console.log(sortedArr);

// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.


// 30. pairElement

function pairElement(str) {
    const pairObj = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };
    let dnaArr = [];
    for (let i = 0; i < str.length; i++) {
        // pairObj[str[i]]
        if (pairObj.hasOwnProperty(str[i])) {
            dnaArr.push([str[i], pairObj[str[i]]]);
        }
    }
    console.log(dnaArr);
    return str;
}

console.log(pairElement("GCG"));


// 31. Sum of all primes

function sumPrimes(num) {
    function isPrime(num) {
        // i < num or beter -> i <= Math.sqrt(num)
        for (let i = 2; i < num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    console.log(sum);
    return sum;
}

console.log(sumPrimes(10));


// 32. diff arrays

function diffArray(arr1, arr2) {
    const newArr = [];
    function diff(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i])) {
                newArr.push(arr1[i]);
            }
        }
    }
    diff(arr1, arr2);
    diff(arr2, arr1);
    return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


// 33. Mutations

function mutation(arr) {
    const firstWord = arr[0].toLowerCase();
    const secondWord = arr[1];
    let isFirstWordContainsAllLettersLikeSecond = true;
    for (let i = 0; i < secondWord.length; i++) {
        if (firstWord.indexOf(secondWord[i].toLowerCase()) === -1) {
            isFirstWordContainsAllLettersLikeSecond = false;
            return isFirstWordContainsAllLettersLikeSecond;
        }
    }
    return isFirstWordContainsAllLettersLikeSecond;
}

console.log(mutation(["hello", "hey"]));

// 34. FCC Palindrome

function palindrome(str) {
    let regex = /[^A-Z0-9]/ig;
    str = str.replace(regex, '').toLowerCase();
    let revStr = str.split("").reverse().join('');
    console.log(str, revStr)
    return str === revStr;
}

console.log(palindrome("eye"));