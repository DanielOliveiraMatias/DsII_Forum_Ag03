let x = 1.00, y = 1.75, z = 1.00;
let hexLeft, hexRight, hexFront, hexBack, hexBase;
let styleBorder = document.querySelector('.style_borders');
let styleMesh = document.querySelector('.style_mesh');
let btnOrtografica = document.querySelector('#ortografica');
let btnPerspectiva = document.querySelector('#perspectiva');
let track = document.querySelector(".triangle_track");
let perspectiva = true;
let border = false;

function mode() {
    if (perspectiva) {
        btnPerspectiva.classList.add('select_op');
        btnOrtografica.classList.remove('select_op');
        track.style.right = '5em';
    } else {
        btnOrtografica.classList.add('select_op');
        btnPerspectiva.classList.remove('select_op');
        track.style.right = '.2em';
    }
}

btnOrtografica.addEventListener('click', function () {
    perspectiva = false;
    mode()
});

btnPerspectiva.addEventListener('click', function () {
    perspectiva = true;
    mode()
});

styleBorder.addEventListener('click', function () {
    border = !border;
    if (border) {
        styleBorder.classList.add('triangle_op_selected');
    } else {
        styleBorder.classList.remove('triangle_op_selected');
    }
});

function setup() {
    let containerTriangle = document.querySelector('.container-triangle');
    let canvas = createCanvas(containerTriangle.offsetWidth - 2, containerTriangle.offsetHeight - 2, WEBGL);
    canvas.parent(document.querySelector('.container-triangle'));

    let colorLeft = document.querySelector('#eixo_x #left');
    let colorRight = document.querySelector('#eixo_x #right');
    let colorFront = document.querySelector("#eixo_y #front");
    let colorBack = document.querySelector("#eixo_y #back");
    let colorBase = document.querySelector("#eixo_z #bottom");

    colorLeft.addEventListener('input', () => hexLeft = colorLeft.value);
    colorRight.addEventListener('input', () => hexRight = colorRight.value);
    colorFront.addEventListener('input', () => hexFront = colorFront.value);
    colorBack.addEventListener('input', () => hexBack = colorBack.value);
    colorBase.addEventListener('input', () => hexBase = colorBase.value);

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
    resetX.addEventListener('click', () => x = 1.00);

    eixoYSlider.addEventListener('input', updateScale);
    resetY.addEventListener('click', () => y = 1.75);

    eixoZSlider.addEventListener('input', updateScale);
    resetZ.addEventListener('click', () => z = 1.00);
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

    if (border) {
        stroke(0);
    } else {
        noStroke();
    }

    if (perspectiva) {
        perspective();
    } else {
        ortho();
    }

    angleMode(DEGREES);
    let angle = millis() * 0.03;
    rotateY(angle);
    scale(x, y, z);
    triangle3d();
}