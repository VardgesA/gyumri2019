class Hhkendani extends LivingCreator {
    constructor(x, y, index){
        super(x, y, index);
        this.tariq = 0;
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