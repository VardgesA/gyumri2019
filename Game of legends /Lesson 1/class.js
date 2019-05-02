class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            GrassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}
/////////////////////////////////////////////
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 7;
        this.index = index;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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


//////////////////////////////////////////////
class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
///////////////////////////////////////////
class Hhbuys {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.tariq = 0;
        this.kerqanak = 0;
        this.index = index;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var newcell = this.chooseCell(0);
        var Newcell = random(newcell);
        if (Newcell) {
            var x = Newcell[0];
            var y = Newcell[1];
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0
            this.x = x;
            this.y = y;
            this.tariq++;
        }
    }
    eatxotaker() {
        var newcell = this.chooseCell(2);
        var Newcell = random(newcell);
        if (Newcell) {
            var x = Newcell[0];
            var y = Newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = this.index;
            for (var i in GrassEaterArr) {
                if (x == GrassEaterArr[i].x && y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1)
                    break;
                }
            }
            this.x = x;
            this.y = y;
        }
    }
    die() {
        if (this.tariq >= 40 ) {
            matrix[this.y][this.x] = 0
            for (var i in XotpashtpanArr) {
                if (this.x == XotpashtpanArr[i].x && this.y == XotpashtpanArr[i].y) {
                    XotpashtpanArr.splice(i, 1)
                    break;
                }
            }
        }
    }

}
/////////////////////////////////////
class Hhkendani {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.tariq = 0;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {

        var newcell = this.chooseCell(0);
        var Newcell = random(newcell);
        if (Newcell) {
            var x = Newcell[0];
            var y = Newcell[1];
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0
            this.x = x;
            this.y = y;
            this.tariq++;
        }
    }
    eathhbuys() {
        var newcell = this.chooseCell(4);
        var Newcell = random(newcell);
        if (Newcell) {
            var x = Newcell[0];
            var y = Newcell[1];
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
    }
    die() {
        if (this.tariq >= 40 || XotpashtpanArr.length==0 ) {
            matrix[this.y][this.x] = 0
            for (var i in KendanineripashtpanArr) {
                if (this.x == KendanineripashtpanArr[i].x && this.y == KendanineripashtpanArr[i].y) {
                    KendanineripashtpanArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
//////////////////////////////////////
class Joker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

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


























