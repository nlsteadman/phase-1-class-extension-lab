// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        return this.array.reduce((total, num) => total + num, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.array.length === 3){
            let a = this.array[0];
            let b = this.array[1];
            let c = this.array[2];
            if (a + b >= c && a + c >= b && b + c >= a) {
                return true;
            }
            else {
                return false;
            }
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.array.length === 4) {
            let a = this.array[0];
            let b = this.array[1];
            let c = this.array[2];
            let d = this.array[3];
            if ((a === b) && (a === c) && (a === d)) {
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }

    get area() {
        if (this.array.length === 4) {
            return this.array[0] ** 2;
        }
    }
}