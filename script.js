document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    let currentInput = '';

    // 버튼 클릭 이벤트를 처리하는 함수
    document.querySelector('.button_grid').addEventListener('click', (event) => {
        const target = event.target;

        // 버튼이 아닌 요소는 무시
        if (target.tagName !== 'BUTTON') return;

        const value = target.textContent;

        // 숫자 처리
        if (!isNaN(value)) {
            handleNumber(value);
        }
        // 연산자 처리
        else if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
        }
        // 계산 결과 처리
        else if (value === '=') {
            handleEvaluation();
        }
        // 초기화 처리
        else if (value === 'C') {
            handleClear();
        }
    });

    // 숫자 입력 처리
    function handleNumber(value) {
        currentInput += value;
        display.value = currentInput;
    }

    // 연산자 입력 처리
    function handleOperator(value) {
        if (['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
            // 이미 연산자로 끝나있다면 교체
            currentInput = currentInput.slice(0, -1) + value;
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    }

    // 계산 처리
    function handleEvaluation() {
        try {
            // Math.js로 안전하게 계산
            currentInput = math.evaluate(currentInput).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
        }
    }

    // 초기화 처리
    function handleClear() {
        currentInput = '';
        display.value = '';
    }
});
