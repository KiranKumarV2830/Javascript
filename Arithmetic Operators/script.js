// Arithemetic Operators = Operands (values,variables,etc)
//                         Operators(+,-,*,etc)
//                         Example 11 = x / 5

let student = 30 ;
// student =student + 1;  Addition arithmetic operator
// student =student - 1;  Subtraction arithmetic Operator
// student = student * 2;  Multiplication arithemetic Operator
// student = student / 2; Divison arithemetic Operator
// student = student **2; Expotenial arithmetic Operator
// student = student %2 Modulus arithemetic Operator : Gives remainder.

//Augemented arithemetic Operator
// student +=1; Addition operator
// student -=1; Subtraction operator
// student *= 2; Multiplication operator
// student /=2; Divison operator
// student **= 2; Expotential operator
// student %= 2; Modulus operator

// student++ Increment operator
// student-- Decrement operator

console.log(student);

/* Operator precedence 
  1 . Parenthesis()
  2 . Exponents
  3 . Multiplication & Divison & Modulus
  4 . Addition & Subtraction*/
// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 / 2;
let result = 6 / 2 ** ( 2 + 5 );

console.log(result)