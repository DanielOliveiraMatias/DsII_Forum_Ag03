document.querySelectorAll('.reset').forEach(resetButton => {
    resetButton.addEventListener('click', () => {
        const listItem = resetButton.closest('li');
        const rangeInput = listItem.querySelector('input[type="range"]');
        const sliderValue = listItem.querySelector('.sliderValue span');

        if (rangeInput && sliderValue) {
            switch (listItem.id) {
                case 'eixo_x':
                    rangeInput.value = 1.00;
                    break;
                case 'eixo_y':
                    rangeInput.value = 1.75;
                    break;
                case 'eixo_z':
                    rangeInput.value = 1.00;
                    break;
                default:
                    rangeInput.value = 160;
            }

            sliderValue.textContent = rangeInput.value;
        }

        const resetEvent = new CustomEvent('rangeReset', { bubbles: true });
        window.dispatchEvent(resetEvent);
    });
});
