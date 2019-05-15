class Gishatich extends LivingCreator {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 10;
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
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
        var newcell = this.chooseCell(2);
        var Newcell = random(newcell);
        if (Newcell) {
            var x = Newcell[0];
            var y = Newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = this.index;
            for (var i in GrassEaterArr) {
                if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
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
        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            var pushgishatich = new Gishatich(newX, newY, this.index);
            GishatichArr.push(pushgishatich);
            this.energy = 5;
        }
    }
    die() {
        if (this.energy <= 0 || GrassEaterArr.length==0) {
            matrix[this.y][this.x] = 0
            for (var i in GishatichArr) {
                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}