/*
Brandon Stone
Wylie Wells
Nikolai Martinovic
*/

function setup() {
    createCanvas(500, 500);
    background('#f9e2c2');

    var triColor1 = color(76, 178, 201);
    fill(triColor1);
    triangle(50, -50, 500, 350, 500, 475);

    var triColor2 = color(255, 248, 73);
    fill(triColor2);
    triangle(525, -75, 0, 375, -25, 525);

    for (var circleCount = 0; circleCount < 15; circleCount++) {
        var randomCircXPos = random(120, 400);
        var randomCircYPos = random(120, 400);
        var randomRColor = random(256);
        var randomGColor = random(256);
        var randomBColor = random(256);
        var randomSize = random(15, 110);
        strokeWeight(1);
        fill(randomRColor, randomGColor, randomBColor, 200);
        ellipse(randomCircXPos, randomCircYPos, randomSize, randomSize);
    }

    for (var lineCount = 0; lineCount < 30; lineCount++) {
        var randomLineX1Pos = random(100, 400);
        var randomLineY1Pos = random(100, 400);
        var randomLineX2Pos = random(100, 400);
        var randomLineY2Pos = random(100, 400);
        line(randomLineX1Pos, randomLineY1Pos, randomLineX2Pos, randomLineY2Pos);
    }

    ellipseMode(RADIUS);
    fill(255, 0);
    strokeWeight(20);
    ellipse(250,250, 225, 225);
}

var angle = 0;
function draw() {
    angle = angle + random(1, 15);
    rotate(angle);
    strokeWeight(3);
    rect(0, 0, 100, 100);
}

function mousePressed() {
    var r = random(256);
    var g = random(256);
    var b = random(256);
    stroke(r, g, b);
    rect(250, 250, 100, 100);
}