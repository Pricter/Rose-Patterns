var d = 8;
var n = 5;

var sliderD;
var sliderD;

function setup() {
    createCanvas(400, 400);
    sliderD = createSlider(1, 10, 5);
    sliderN = createSlider(1, 10, 5);
}

function draw() {
    d = sliderD.value();
    n = sliderN.value();

    var k = n / d;

    background(51);
    translate(width / 2, height / 2);

    stroke(255);
    strokeWeight(4);
    noFill();

    beginShape();
    for(var a = 0; a < TWO_PI * d; a += 0.02) {
        var r = 200 * cos(k * a);

        var x = r * cos(a);
        var y = r * sin(a);

        vertex(x, y);
    }
    endShape(CLOSE);
}
