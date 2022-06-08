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
        // [1,2,3,4,5] -> [1,2,3,4, ,5] -> [1,2,3, ,4,5] -> [1,2, ,3,4,5]
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

    this.pop = () => {
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
console.log(translatePigLatin("glove")); // -> oveglay

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

// 2. Recursion - https://stackoverflow.com/questions/33923/what-is-tail-recursion

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
                    currArr[k] = currArr[k + 1];
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

// 35. Using Arrow functions

let todoDB = [];

function addTodo(item, priority) {
    if (priority === "high") {
        todoDB.unshift(item);
    } else {
        todoDB.push(item);
    }
}

addTodo("Item 1");
addTodo("Item 2");
addTodo("Item 3", "high");

console.log(todoDB) // Prints [ 'Item 3', 'Item 1', 'Item 2' ]

const addTodo1 = (item, priority) =>
    priority === "high" ?
        todoDB.unshift(item) :
        todoDB.push(item);


addTodo1("Item 1");
addTodo1("Item 2");
addTodo1("Item 3", "high");

console.log(todoDB) // Prints [ 'Item 3', 'Item 1', 'Item 2' ]

// 36. Feature update!

let todoDBMultiple = [];

const addMultipleTodos = (...item) => todoDBMultiple = todoDBMultiple.concat(item);

console.log(addMultipleTodos("Item 1", "Item 4"));
console.log(todoDBMultiple);


// 37. Filesystem Validators


const files = [
    { id: 1, size: 2000, filename: "1.txt" },
    { id: 2, size: 4000, filename: "2.txt" },
    { id: 3, size: 3000, filename: "3.html" },
];

const blockedExt = [".psd", ".js"];


function isPayloadSizeValid(files, limit) {
    const aboveLimitFile = files.find((file) => file.size > limit);
    if (aboveLimitFile) {
        return false;
    }
    return true;
}

// 1

function getFileExtension(fileName) {
    const fileExtensionRegex = /\.[0-9a-z]+$/ig;
    return fileName.match(fileExtensionRegex)[0];
}

// 2

function getFileExtension1(fileName) {
    const extension = fileName.slice(fileName.lastIndexOf("."));
    return extension;
}

const fileName = "note.txt";

function hasInvalidFiles(files, blockedExt) {
    for (const element of files) {
        const invalidFile = blockedExt.find(extension =>
            extension === getFileExtension1(element.filename));
        if (invalidFile) {
            return true;
        }
    }
    return false;
}

console.log(getFileExtension(fileName));
console.log(getFileExtension1(fileName));
console.log(isPayloadSizeValid(files, 4001));
console.log(hasInvalidFiles(files, blockedExt));

// 38. Unique array

function uniteUnique(...arr) {
    let newArr = [];
    let uniqueArr = [];
    newArr = newArr.concat(...arr);
    for (let i = 0; i < newArr.length; i++) {
        if (!uniqueArr.includes(newArr[i])) {
            uniqueArr.push(newArr[i]);
        }
    }
    return uniqueArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// 39. flatten array
// flatten arr with reduce - https://stackoverflow.com/questions/67138390/use-reduce-and-recursion-in-javascript-to-flatten-nested-array
// https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
// 1

function steamrollArray(arr) {
    let flattenedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenedArr = flattenedArr.concat(steamrollArray(arr[i]));
        }
        else {
            flattenedArr.push(arr[i]);
        }
    }
    console.log(flattenedArr);
    return flattenedArr;
}

// 2

function Flat(arr = []) {
    return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), [])
}

Flat([1, [2], [3, [[4]]]]);
steamrollArray([1, [2], [3, [[4]]]]);

// 40. LCM / SCM between range
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-smallest-common-multiple/16075

function smallestCommons(arr) {
    const [maxNum, minNum] = arr.sort((a, b) => b - a);
    const noOfDivisors = maxNum - minNum + 1;
    let upperBound = 1;
    for (let i = minNum; i <= maxNum; i++) {
        upperBound *= i;
    }

    for (let multiple = maxNum; multiple <= upperBound; multiple += maxNum) {
        let divisorCount = 0;
        for (let i = minNum; i <= maxNum; i++) {
            if (multiple % i === 0) {
                divisorCount++;
            }
        }
        if (divisorCount === noOfDivisors) {
            return multiple;
        }
    }
}

console.log(smallestCommons([1, 5]));

// 41. Map the Debris


function orbitalPeriod(arr) {

    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function (obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

// 42.https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {

    const arr = collection.filter(collect => {
        let isSourcePresentInCurrColl = true;
        for (const key in source) {
            if (!(collect.hasOwnProperty(key)) ||
                !(collect[key] === source[key])) {
                isSourcePresentInCurrColl = false;
            }
        }
        if (isSourcePresentInCurrColl) {
            return collect;
        }
    });

    return arr;
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
], { last: "Capulet" }));


// 43. Spinal case

function spinalCase(str) {
    const regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
}

console.log(spinalCase("AllThe - small Things"));

// 44. Numeronyms

function maskSentence(str) {
    let words = str.split(' ');
    // let maskedSen = '';
    // for (let i = 0; i < words.length; i++) {
    //     maskedSen += createNumeronym(words[i]);
    // }
    words = words.map(word => {
        return createNumeronym(word);
    }).join(' ');
    return words;
}

function createNumeronym(str) {
    if (str.length > 4) {
        let numeronymWord = str[0] + (str.length - 2).toString() + str[str.length - 1];
        return numeronymWord;
    }
    return str;
}

const input = 'Every developer likes to mix kubernetes and javascript';
console.log(maskSentence(input));

// 45. Mean and Median and Mode

// 1

const statValueArr = [4, 53, 22, 13, -88, -8, 44, 41, 2];

const calcMean = (statValueArr) => statValueArr.reduce(
    (meanAcc, value) => meanAcc + value) / statValueArr.length;

console.log(calcMean(statValueArr));

const calcMedian = (statValueArr) => {

    statValueArr.sort((firstVal, secVal) => firstVal - secVal);

    if (statValueArr.length % 2 === 0) {
        // dividing by 2 to get the first mid index -> [1,2,3,4,5,6] -> 6 - 1 / 2 -> 2,3
        // () - Are important order of precdence - BODMAS RULE !
        const firstMidIndex = Math.floor((statValueArr.length - 1) / 2);
        const medVal = Math.floor((statValueArr[firstMidIndex] + statValueArr[firstMidIndex + 1]) / 2);
        return medVal;
    }
    return statValueArr[Math.floor(statValueArr.length / 2)];
}

const calcMedian2 = (statValueArr) => {
    statValueArr.sort((a, b) => a - b);
    if (statValueArr.length % 2 === 0) {
        return statValueArr[parseInt((statValueArr.length) / 2)];
    }
    let term1 = statValueArr[(statValueArr.length / 2) - 1];
    let term2 = statValueArr[(statValueArr.length / 2 + 1) - 1];
    return term1 + term2 / 2;
}

console.log(calcMedian2(statValueArr));
console.log(calcMedian(statValueArr));

const median = arr => {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

const calcMode = (statValueArr) => {
    let numCounterObj = {};
    for (let val of statValueArr) {
        if (numCounterObj.hasOwnProperty([val])) {
            numCounterObj[val] += 1;
        }
        else {
            numCounterObj[val] = 1;
        }
    }
    const sortBasedOnCounterArr = Object.entries(numCounterObj)
        .filter((arr) => arr[1] > 1)
        .sort((firstArr, secondArr) => secondArr[1] - firstArr[1]);
    if (sortBasedOnCounterArr.length === 0) {
        return "All values appeared just once";
    }
    else {
        let [highCountOfNum, highPossibleCounter] = sortBasedOnCounterArr[0];
        let similarCountArr = sortBasedOnCounterArr.filter(arr => arr[1] === highPossibleCounter);
        if (similarCountArr.length > 0) {
            const numsWithSimilarCounter = similarCountArr.map(arr => arr[0]).join(',');
            return `${numsWithSimilarCounter} appeared ${highPossibleCounter} times`;
        }
        return `${highCountOfNum} appeared ${highPossibleCounter} times`;
    }
}

console.log(calcMode(statValueArr));

// 2 Better constructor pattern

function Stats(statValueArr) {
    this.statValueArr = statValueArr;
}

Stats.prototype.calcMean = function () {
    const { statValueArr } = this;
    return parseInt(statValueArr.reduce((meanAcc, value) => meanAcc + value) / statValueArr.length);
}

Stats.prototype.calcMedian = function () {
    const { statValueArr } = this;
    statValueArr.sort((firstVal, secVal) => firstVal - secVal);
    statValueArr.sort((a, b) => a - b);
    if (statValueArr.length % 2 !== 0) {
        return statValueArr[parseInt((statValueArr.length) / 2)];
    }
    let term1 = statValueArr[parseInt((statValueArr.length) / 2) - 1];
    let term2 = statValueArr[parseInt((statValueArr.length) / 2 + 1) - 1];
    return (term1 + term2) / 2;
}

Stats.prototype.calcMode = function () {
    let numCounterObj = {};
    for (let val of this.statValueArr) {
        if (numCounterObj.hasOwnProperty([val])) {
            numCounterObj[val] += 1;
        }
        else {
            numCounterObj[val] = 1;
        }
    }
    const sortBasedOnCounterArr = Object.entries(numCounterObj)
        .filter((arr) => arr[1] > 1)
        .sort((firstArr, secondArr) => secondArr[1] - firstArr[1]);
    if (sortBasedOnCounterArr.length === 0) {
        return "All values appeared just once";
    }
    else {
        let [highCountOfNum, highPossibleCounter] = sortBasedOnCounterArr[0];
        let similarCountArr = sortBasedOnCounterArr.filter(arr => arr[1] === highPossibleCounter);
        if (similarCountArr.length > 0) {
            const numsWithSimilarCounter = similarCountArr.map(arr => arr[0]).join(',');
            return `${numsWithSimilarCounter} appeared ${highPossibleCounter} times`;
        }
        return `${highCountOfNum} appeared ${highPossibleCounter} times`;
    }
}

const stats = new Stats(statValueArr);
console.log(stats.calcMedian());
console.log(stats.calcMean());
console.log(stats.calcMode());

// 46. Handling errors

function logicRunner(x) {
    try {
        getX(x)
        console.log(x);
    }
    catch (err) {
        console.error(err.stack);
    }
}

function getX(x) {
    if (x === 5) {
        throw new Error("Error occurred");
    }
    return x;
}

logicRunner(0) // displays 0
logicRunner(3) // displays 3
logicRunner(5) // displays "Error occurred"

// 47. Use the reduce Method to Analyze Data

// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// 1

function getRating(watchList) {
    let filteredMovies = watchList
        .filter(movie => movie.Director === "Christopher Nolan");
    let avgRat = filteredMovies
        .reduce((avg, movie) => avg + Number(movie.imdbRating), 0)
        / filteredMovies.length;
    return avgRat;
}

console.log(getRating(watchList));

// 2

function getRating2(watchList) {
    // Add your code below this line
    const nolanData = watchList
        .reduce((data, { Director: director, imdbRating: rating }) => {
            if (director === 'Christopher Nolan') {
                data.count++;
                data.sum += Number(rating);
            }
            return data;
        }, { sum: 0, count: 0 });
    const averageRating = nolanData.sum / nolanData.count;
    // Add your code above this line
    return averageRating;
}

console.log(getRating2(watchList));
