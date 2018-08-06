//import { multiply, greeting } from './helper';
//import * as helper from './helper';
//import navigation from './navigation';
import navigation, { greeting, multiply } from './navigation';

// use this syntax with star import
//console.log(helper.multiply(2, 4));
//console.log(helper.greeting);

console.log(multiply(2, 4));
console.log(greeting);

console.log(navigation());