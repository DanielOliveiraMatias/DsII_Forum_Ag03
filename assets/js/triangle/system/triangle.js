const ranges = {
    x: document.querySelector('#eixo_x input[type="range"]'),
    y: document.querySelector('#eixo_y input[type="range"]'),
    z: document.querySelector('#eixo_z input[type="range"]')
};

const colors = {
    front: document.querySelector('#front'),
    back: document.querySelector('#back'),
    left: document.querySelector('#left'),
    right: document.querySelector('#right'),
    bottom: document.querySelector('#bottom')
};

const faces = {
    triangle: document.querySelector('.triangle'),
    front: document.querySelector('.front'),
    back: document.querySelector('.back'),
    left: document.querySelector('.left'),
    right: document.querySelector('.right'),
    bottom: document.querySelector('.bottom')
};

const sizeLimits = { min: 80, max: 240 };

window.addEventListener('rangeReset', () => {
    updateTriangle();
});


function updateTriangle() {
    const { x, y, z } = ranges;
    const { front, back, left, right, bottom } = faces;

    const sizeX = x.value;
    const sizeY = y.value;
    const sizeZ = z.value;

    updateTriangleClass(sizeX);
    updateFaceStyles(sizeX, sizeY, sizeZ);
    updateColors();
    updateSliderValues(sizeX, sizeY, sizeZ);
}

function updateTriangleClass(sizeX) {
    const { triangle } = faces;
    if (sizeX <= sizeLimits.min) {
        triangle.classList.add('triangle-mini');
        triangle.classList.remove('triangle-3x');
    } else if (sizeX >= sizeLimits.max) {
        triangle.classList.add('triangle-3x');
        triangle.classList.remove('triangle-mini');
    } else {
        triangle.classList.remove('triangle-mini', 'triangle-3x');
    }
}

function updateFaceStyles(sizeX, sizeY, sizeZ) {
    const { left, right, front, back, bottom } = faces;
    const shadow = document.querySelector('.shadow');

    const sideSize = clamp(sizeX, sizeLimits.min, sizeLimits.max);
    const frontBackSize = clamp(sizeY, sizeLimits.min, sizeLimits.max);
    const bottomSize = clamp(sizeZ, sizeLimits.min, sizeLimits.max);

    left.style.borderBottomWidth = `${sideSize}px`;
    right.style.borderBottomWidth = `${sideSize}px`;
    front.style.borderBottomWidth = `${frontBackSize}px`;
    back.style.borderBottomWidth = `${frontBackSize}px`;
    bottom.style.height = `${bottomSize}px`;

    shadow.style.height = `${bottomSize}px`;
    shadow.style.bottom = `${25 + bottomSize - 10}px`;
}

function updateColors() {
    const { front, back, left, right, bottom } = faces;

    const frontColor = colors.front.value;
    const backColor = colors.back.value;
    const leftColor = colors.left.value;
    const rightColor = colors.right.value;
    const bottomColor = colors.bottom.value;

    front.style.borderBottomColor = `rgba(${hexToRgb(frontColor)}, 0.5)`;
    back.style.borderBottomColor = `rgba(${hexToRgb(backColor)}, 0.5)`;
    left.style.borderBottomColor = `rgba(${hexToRgb(leftColor)}, 0.5)`;
    right.style.borderBottomColor = `rgba(${hexToRgb(rightColor)}, 0.5)`;
    bottom.style.backgroundColor = `rgba(${hexToRgb(bottomColor)}, 0.5)`;
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

function updateSliderValues(sizeX, sizeY, sizeZ) {
    document.querySelector('#eixo_x .sliderValue span').innerText = sizeX;
    document.querySelector('#eixo_y .sliderValue span').innerText = sizeY;
    document.querySelector('#eixo_z .sliderValue span').innerText = sizeZ;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

Object.values(ranges).forEach(range => range.addEventListener('input', updateTriangle));
Object.values(colors).forEach(color => color.addEventListener('input', updateTriangle));

updateTriangle();
