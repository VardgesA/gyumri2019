var matrix = [];
var side = 6;
var GrassArr = [];
var GrassEaterArr = [];
var GishatichArr = [];
var XotpashtpanArr = [];
var Xotpashtpaneat=[];
var KendanineripashtpanArr=[];
var JokerArr=[];
var JokerEaterArr=[];
var JokerMoveArr=[];


function setup() {
    frameRate(5);
    for (var y = 0; y < 121; y++) {
        matrix[y] = [];
        for (var x = 0; x < 121; x++) {
        matrix[y][x] = Math.round(random(6));
        }
        }
  createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                GrassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y, 2);
                GrassEaterArr.push(grassEater);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y, 3);
                GishatichArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var xpasht = new Hhbuys(x, y, 4);
                XotpashtpanArr.push(xpasht);
            }
            else if (matrix[y][x] == 5) {
                var kpasht = new Hhkendani(x, y, 5);
                KendanineripashtpanArr.push(kpasht);
            }
            else if (matrix[y][x] == 6) {
                var jokerr = new Joker(x, y, 6);
                JokerArr.push(jokerr);
            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red")

            }
            else if (matrix[y][x] == 4) {
                fill("whait")

            }
            else if (matrix[y][x] == 5) {
                fill("blue")

            }
            else if (matrix[y][x] == 6) {
                fill("black")

            }
            rect(x * side, y * side, side, side);
        }
    }

    for (var i in GrassArr) {
        GrassArr[i].mul();
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].move();
        GrassEaterArr[i].eat();
        GrassEaterArr[i].mul();
        GrassEaterArr[i].die();
    }
    for (var i in GishatichArr) {
        GishatichArr[i].move();
        GishatichArr[i].eat();
        GishatichArr[i].mul();
        GishatichArr[i].die();
    }
    for (var i in XotpashtpanArr) {
        XotpashtpanArr[i].move();
        XotpashtpanArr[i].eatxotaker();
        XotpashtpanArr[i].die();
        
    }
    for (var i in KendanineripashtpanArr) {
        KendanineripashtpanArr[i].move();
        KendanineripashtpanArr[i].eathhbuys();
        KendanineripashtpanArr[i].die();
    }
    for (var i in JokerArr) {
        JokerArr[i].move();
        JokerArr[i].eat();
        JokerArr[i].die();
    }
}






