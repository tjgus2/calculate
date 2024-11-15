document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button_grid button');

    let currentInput = '';
    let isEvaluated = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent; 

            if (!isNaN(value) || ['+', '-', '*', '/'].includes(value)) {
                if (isEvaluated) {
                    currentInput = '';
                    isEvaluated = false;
                }

                currentInput += value;
                display.value = currentInput;
            } else if (value === '=') {

                try {

                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                    isEvaluated = true; 
                } catch {
                    display.value = 'Error';
                }
            } else if (value === 'C') {
                currentInput = '';
                display.value = '';
            }
        });
    });
});
