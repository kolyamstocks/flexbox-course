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
}
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