class Joker extends LivingCreator {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 30;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 5, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 4, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 3, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x - 4, this.y + 4],
            [this.x + 4, this.y + 4],
            [this.x - 5, this.y + 5],
            [this.x + 5, this.y + 5]


        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {

        var newc = this.chooseCell(0);
        var newcell = random(newc);
        var cellnew = this.chooseCell(1);
        var Cell = random(cellnew);
        JokerMoveArr.push(newcell);
        JokerMoveArr.push(Cell);
        var rand = random(JokerMoveArr);
        if (rand) {
            if (newcell) {
                var x = rand[0];
                var y = rand[1];
                matrix[y][x] = this.index;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y;

            }
            if (Cell) {
            
                var x1 = rand[0];
                var y1 = rand[1];
                matrix[this.y][this.x] = 1;
                matrix[y1][x1] = this.index;
                var newgrass = new Grass(this.x, this.y, 1);
                GrassArr.push(newgrass);
                this.x = x1;
                this.y = y1;
            }
            this.energy -= 2;
        }
    }
    eat() {
        var newCell = this.chooseCell(4);
        var NewCell = random(newCell);
        var newcell = this.chooseCell(5);
        var Newcell = random(newcell);
        JokerEaterArr.push(NewCell);
        JokerEaterArr.push(Newcell);

        var rand = random(JokerEaterArr);
        if (rand) {

            if (NewCell) {
                var x = rand[0];
                var y = rand[1];
                matrix[this.y][this.x] = 0;
                matrix[y][x] = this.index;
                for (var i in XotpashtpanArr) {
                    if (x == XotpashtpanArr[i].x && y == XotpashtpanArr[i].y) {
                        XotpashtpanArr.splice(i, 1);
                        break;
                    }
                }

                this.x = x;
                this.y = y;
            }
            else if (Newcell) {
                var x1 = rand[0];
                var y1 = rand[1];
                matrix[this.y][this.x] = 0;
                matrix[y1][x1] = this.index;

                for (var i in KendanineripashtpanArr) {
                    if (x1 == KendanineripashtpanArr[i].x && y1 == KendanineripashtpanArr[i].y) {
                        KendanineripashtpanArr.splice(i, 1);
                        break;
                    }
                }

                this.x = x1;
                this.y = y1;
            }
            this.energy += 5;
        }


    }
    die() {
        if (this.energy <= 0 || KendanineripashtpanArr.length == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in JokerArr) {
                if (this.x == JokerArr[i].x && this.y == JokerArr[i].y) {
                    JokerArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}