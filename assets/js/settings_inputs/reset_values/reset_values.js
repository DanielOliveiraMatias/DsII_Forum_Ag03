document.querySelectorAll('.reset').forEach(resetButton => {
    resetButton.addEventListener('click', () => {
        const rangeInput = resetButton.closest('li').querySelector('input[type="range"]');
        if (rangeInput) {
            rangeInput.value = 160;

            const sliderValue = resetButton.closest('li').querySelector('.sliderValue span');
            if (sliderValue) {
                sliderValue.textContent = rangeInput.value;
            }
        }

        const resetEvent = new CustomEvent('rangeReset', { bubbles: true });
        window.dispatchEvent(resetEvent);
    });
});
