let x = 1.00, y = 1.75, z = 1.00;
let hexLeft, hexRight, hexFront, hexBack, hexBase;

function setup() {
    let containerTriangle = document.querySelector('.container-triangle');
    let canvas = createCanvas(containerTriangle.offsetWidth - 2, containerTriangle.offsetHeight - 2, WEBGL);
    canvas.parent(document.querySelector('.container-triangle'));

    let colorLeft = document.querySelector('#eixo_x #left');
    let colorRight = document.querySelector('#eixo_x #right');
    let colorFront = document.querySelector("#eixo_y #front");
    let colorBack = document.querySelector("#eixo_y #back");
    let colorBase = document.querySelector("#eixo_z #bottom");

    colorLeft.addEventListener('input', function () {
        hexLeft = colorLeft.value;
    });

    colorRight.addEventListener('input', function () {
        hexRight = colorRight.value;
    });

    colorFront.addEventListener('input', function () {
        hexFront = colorFront.value;
    });

    colorBack.addEventListener('input', function () {
        hexBack = colorBack.value;
    });

    colorBase.addEventListener('input', function () {
        hexBase = colorBase.value;
    });

    hexLeft = colorLeft.value;
    hexRight = colorRight.value;
    hexFront = colorFront.value;
    hexBack = colorBack.value;
    hexBase = colorBase.value;

    let eixoXSlider = document.querySelector('#eixo_x input');
    let resetX = document.querySelector('#eixo_x .reset');

    let eixoYSlider = document.querySelector('#eixo_y input');
    let resetY = document.querySelector('#eixo_y .reset');

    let eixoZSlider = document.querySelector('#eixo_z input');
    let resetZ = document.querySelector('#eixo_z .reset');

    eixoXSlider.addEventListener('input', updateScale);
    resetX.addEventListener('click', function () { x = 1.00 });

    eixoYSlider.addEventListener('input', updateScale);
    resetY.addEventListener('click', function () { y = 1.75 });

    eixoZSlider.addEventListener('input', updateScale);
    resetZ.addEventListener('click', function () { z = 1.00 });
}

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

function updateScale() {
    let eixoXValue = parseFloat(document.querySelector('#eixo_x input').value);
    let eixoYValue = parseFloat(document.querySelector('#eixo_y input').value);
    let eixoZValue = parseFloat(document.querySelector('#eixo_z input').value);

    x = eixoXValue;
    y = eixoYValue;
    z = eixoZValue;
}

function base(r, g, b, a) {
    beginShape();
    fill(r, g, b, a);
    vertex(-100, 0, -100);
    vertex(100, 0, -100);
    vertex(100, 0, 100);
    vertex(-100, 0, 100);
    endShape(CLOSE);
}

function lado1(r, g, b, a) {
    beginShape();
    fill(r, g, b, a);
    vertex(-100, 0, -100);
    vertex(100, 0, -100);
    vertex(0, -100, 0);
    endShape(CLOSE);
}

function lado2(r, g, b, a) {
    beginShape();
    fill(r, g, b, a);
    vertex(100, 0, 100);
    vertex(-100, 0, 100);
    vertex(0, -100, 0);
    endShape(CLOSE);
}

function lado3(r, g, b, a) {
    beginShape();
    fill(r, g, b, a);
    vertex(-100, 0, 100);
    vertex(-100, 0, -100);
    vertex(0, -100, 0);
    endShape(CLOSE);
}

function lado4(r, g, b, a) {
    beginShape();
    fill(r, g, b, a);
    vertex(100, 0, -100);
    vertex(100, 0, 100);
    vertex(0, -100, 0);
    endShape(CLOSE);
}

function triangle3d() {
    let baseColor = hexToRgb(hexBase);
    let leftColor = hexToRgb(hexLeft);
    let rightColor = hexToRgb(hexRight);
    let frontColor = hexToRgb(hexFront);
    let backColor = hexToRgb(hexBack);

    base(baseColor.r, baseColor.g, baseColor.b, 128);
    lado1(leftColor.r, leftColor.g, leftColor.b, 128);
    lado2(rightColor.r, rightColor.g, rightColor.b, 128);
    lado3(frontColor.r, frontColor.g, frontColor.b, 128);
    lado4(backColor.r, backColor.g, backColor.b, 128);
}

function draw() {
    background(33, 37, 41);
    orbitControl();
    debugMode();
    noStroke();
    angleMode(DEGREES);
    let angle = millis() * 0.03;
    rotateY(angle);
    scale(x, y, z);
    triangle3d();
}