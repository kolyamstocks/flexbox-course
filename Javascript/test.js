// String interpolation
const lyrics = "Never gonna give you up";
console.log(`I'm ${lyrics + ' ' + 2}`);


const page = 'Home';
console.log(`class=${page === 'Home' ? 'master layout' : 'secondary layout'}`);


// Arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

firstName = fName => { console.log(fName.toUpperCase()); }
firstName("Kristine");

fullName = (fName, lName) => {
    console.log(`${fName} ${lName}`);
};
fullName("Kristine", "Hudgens");


// Good use of arrow function
function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;

    this.total = setInterval(() => {
        console.log((this.taxRate * this.subTotal) + this.subTotal);
    }, 2000);
}
const inv = Invoice(200);


// Swapping variables
let playerOne = "Guy";
let playerTwo = "Girl";

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player one: ${playerOne}
Player two: ${playerTwo}
`);


// Array destructuring
const apiList = [
    '1st link',
    '2nd link',
    '3rd link'
];

const [posts, repos, profile] = apiList;
console.log(posts);
console.log(repos);
console.log(profile);


// cool implementation
const user = {
    name: 'Kolya',
    email: 'guy@website.com'
};

const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
};

renderUser(user);


// spread operator

//combining arrays
let shoppingCart = [345, 375, 234, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [ 345, 375, 234, 123, 98, 123 ]

// copying arrays
const shoppingCart2 = [345, 375, 234, 123];
// can use ... in front of shopping cart instead of slice 
const updatedCart = shoppingCart2.slice();
updatedCart.push(5);

console.log(updatedCart);
console.log(shoppingCart2);

// using spread operator with max
const orderTotals = [1, 2, 7, 4, 3];
// spread operator passes nums spread instead of array
console.log(Math.max(...orderTotals));

// the spread operator is breaking the system
const { starter, closer, /*...*/ relievers } = {
    starter: 'Guy',
    closer: 'Jeff',
    relief_1: 'Hal',
    relief_2: 'Bill'
};
console.log(starter);
console.log(closer);
console.log(relievers);


// 
const blog =  {
    title: "My Post",
    summary: "The summary to the post"
};

const openGraphMetadata = ({ title, summary = "This is the default post" }) => {
    console.log(`
        og-title=${title}
        og-description=${summary}
        `);
};

openGraphMetadata(blog);