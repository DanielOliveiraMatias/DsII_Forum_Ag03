const sliders = document.querySelectorAll('.range');

sliders.forEach(slider => {
    const slideValue = slider.querySelector('span');
    const inputSlider = slider.querySelector('input');

    inputSlider.step = 0.01;

    let timeout;

    function hideSlideValue() {
        slideValue.classList.remove("show");
    }

    function resetTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout(hideSlideValue, 3000);
    }

    inputSlider.oninput = () => {
        let value = inputSlider.value;

        slideValue.textContent = value;

        const thumbWidth = 20;
        const rangeWidth = inputSlider.offsetWidth;
        const percentage = (value - inputSlider.min) / (inputSlider.max - inputSlider.min);
        const leftPosition = percentage * (rangeWidth - thumbWidth);

        slideValue.style.left = `${leftPosition + thumbWidth / 1}px`;
        slideValue.classList.add("show");

        resetTimeout();
    };

    inputSlider.onblur = () => {
        slideValue.classList.remove("show");
    };

    document.addEventListener('click', () => {
        resetTimeout();
    });

    slider.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
