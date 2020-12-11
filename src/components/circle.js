// import using require

// declare class


// export class using module.exports

let Shape = require("./shape.js");
class Circle extends Shape{
  constructor(){
    super();
  }
  calculateArea(){
    console.log("calculateArea in circle");
  }
  
}

module.exports = Circle;
