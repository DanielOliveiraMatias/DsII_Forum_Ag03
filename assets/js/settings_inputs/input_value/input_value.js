const sliders = document.querySelectorAll('.range');

sliders.forEach(slider => {
    const slideValue = slider.querySelector('span');
    const inputSlider = slider.querySelector('input');

    inputSlider.step = 0.01;

    inputSlider.oninput = () => {
        let value = inputSlider.value;

        slideValue.textContent = value;

        const thumbWidth = 20;
        const rangeWidth = inputSlider.offsetWidth;
        const percentage = (value - inputSlider.min) / (inputSlider.max - inputSlider.min);
        const leftPosition = percentage * (rangeWidth - thumbWidth);

        slideValue.style.left = `${leftPosition + thumbWidth / 1}px`;
        slideValue.classList.add("show");
    };

    inputSlider.onblur = () => {
        slideValue.classList.remove("show");
    };
});
