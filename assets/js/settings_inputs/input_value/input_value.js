const sliders = document.querySelectorAll('.range');

sliders.forEach(slider => {
    const slideValue = slider.querySelector('span');
    const inputSlider = slider.querySelector('input');

    const allowedValues = [80, 100, 130, 160, 200, 220, 240];

    inputSlider.oninput = () => {
        let value = inputSlider.value;

        let closestValue = allowedValues.reduce((prev, curr) => {
            return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
        });

        inputSlider.value = closestValue;

        slideValue.textContent = closestValue;

        const thumbWidth = 20;
        const rangeWidth = inputSlider.offsetWidth;
        const percentage = (closestValue - inputSlider.min) / (inputSlider.max - inputSlider.min);
        const leftPosition = percentage * (rangeWidth - thumbWidth);

        slideValue.style.left = `${leftPosition + thumbWidth / 1}px`;
        slideValue.classList.add("show_value");
    };

    inputSlider.onblur = () => {
        slideValue.classList.remove("show_value");
    };
});
