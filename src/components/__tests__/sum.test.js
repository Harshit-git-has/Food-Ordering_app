 import { sum } from "../sum.js";
 
test( "sum function should  calculate the sum of the two numbers",() => {
     
     const result = sum( 3, 4);


     // Assertion
     expect(result).toBe(7);

});