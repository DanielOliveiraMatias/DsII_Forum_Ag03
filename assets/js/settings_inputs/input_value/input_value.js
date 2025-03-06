const sliders = document.querySelectorAll('.range');

sliders.forEach(slider => {
    const slideValue = slider.querySelector('span');
    const inputSlider = slider.querySelector('input');

    inputSlider.oninput = () => {
        let value = inputSlider.value;
        slideValue.textContent = value;
        slideValue.style.left = (value / (inputSlider.max - inputSlider.min)) * 97 + "%";
        slideValue.classList.add("show");
    };

    inputSlider.onblur = () => {
        slideValue.classList.remove("show");
    };
});
