class Shape{
  constructor(){
    this.color = "green";
  }
  drawShape(){
    console.log("drawShape in shape");
  }
  calculateArea(){
    console.log("calculateArea in shape");
  }
  
}

module.exports = {Shape:Shape);
