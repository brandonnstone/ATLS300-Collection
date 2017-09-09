
function setup() {
    createCanvas(1000, 500);
    background(255,255,255);
}

var r = 0;
var g = 0;
var b = 0;
function draw() {
    r = r + 1;
    g = g + 5;
    b = b + 10;
    if(r > 255){
        r = 0;
    }
    if(g > 255){
        g = 0;
    }
    if(b > 255){
        b = 0;
    }
    fill(r,g,b);
    textSize(50);
    text("Hello, World!", 500, 250);
}