class Square {
  constructor(side) {
    this.side = side;
  }

  // Method that returns perimeter of square
  perimeter() {
    return 4 * this.side;
  }

  // Method that returns area of square
  area() {
    return this.side ** 2;
  }

  // Method that returns diagonal of square
  diagonal() {
    return Math.sqrt(2 * this.side ** 2).toFixed(3);
  }

describe() {
  const perimeter = this.perimeter();
  const area = this.area();
  const diagonal = this.diagonal();
  console.log(`Square with side ${this.side} has perimeter of ${perimeter}, area of ${area}, and diagonal of ${diagonal}`);
}
}

// Create three square objects
const square1 = new Square(2);
const square2 = new Square(3);
const square3 = new Square(4);

// Show information for each square
square1.describe();
square2.describe();
square3.describe();