function complexNumber(realPart, imaginaryPart) {
    this.realPart = realPart;
    this.imaginaryPart = imaginaryPart;
    this.add = function () {
        console.log("The addtition of real and imaginary part is " + (realPart + imaginaryPart));
    }
    this.sub = function () {
        console.log("The subtraction of real and imaginary part is " + (realPart - imaginaryPart));
    }
    this.multiply = function () {
        console.log("The multiplication of real and imaginary part is " + (realPart * imaginaryPart));
    }
    this.division = function () {
        console.log("The division of real and imaginary part is " + (realPart / imaginaryPart));
    }


}

var numbers = new complexNumber(10, 2);

console.log(numbers);
console.log(numbers.add());
console.log(numbers.sub());
console.log(numbers.multiply());
console.log(numbers.division());