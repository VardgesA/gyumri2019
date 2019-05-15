class GrassEater extends LivingCreator {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 7;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
 
    move() {

        var newcell = this.chooseCell(0);
        var Newcell = random(newcell);
        if (Newcell) {
            var x = Newcell[0];
            var y = Newcell[1];
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.energy--;
        }
    }
    eat() {
        var newcell = this.chooseCell(1);
        var Newcell = random(newcell);
        if (Newcell) {
            var x = Newcell[0];
            var y = Newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = this.index;
            for (var i in GrassArr) {
                if (x == GrassArr[i].x && y == GrassArr[i].y) {
                    GrassArr.splice(i, 1)
                    break;
                }
            }
            this.x = x;
            this.y = y;
            this.energy += 3;
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell && this.energy >= 8) {
            var x = newCell[0];
            var y = newCell[1];
            var pusheater = new GrassEater(x, y, this.index);
            GrassEaterArr.push(pusheater);
            this.energy = 5;
        }
    }

    die() {
        if (this.energy <= 0 ) {
            matrix[this.y][this.x] = 0
            for (var i in GrassEaterArr) {
                if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}