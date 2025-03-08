document.querySelectorAll('.reset').forEach(resetButton => {
    resetButton.addEventListener('click', () => {
        // Encontrar o elemento 'li' pai
        const listItem = resetButton.closest('li');
        const rangeInput = listItem.querySelector('input[type="range"]');
        const sliderValue = listItem.querySelector('.sliderValue span');

        if (rangeInput && sliderValue) {
            // Resetando os valores para os eixos específicos
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
                    rangeInput.value = 160;  // Valor padrão caso o id não seja identificado
            }

            // Atualizando o texto da exibição do valor do slider
            sliderValue.textContent = rangeInput.value;
        }

        // Disparando o evento de reset
        const resetEvent = new CustomEvent('rangeReset', { bubbles: true });
        window.dispatchEvent(resetEvent);
    });
});
