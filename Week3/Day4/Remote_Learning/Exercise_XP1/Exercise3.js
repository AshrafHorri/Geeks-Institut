document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const display = document.getElementById('display');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const clearButton = document.getElementById('clear');
    const backspaceButton = document.getElementById('backspace');
    const equalsButton = document.getElementById('equals');
    const decimalButton = document.getElementById('decimal');
    const percentButton = document.getElementById('percent');

    // Memory buttons
    const mcButton = document.getElementById('mc');
    const mrButton = document.getElementById('mr');
    const mPlusButton = document.getElementById('m-plus');
    const mMinusButton = document.getElementById('m-minus');

    // Calculator state
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetScreen = false;
    let memory = 0;

    // Update display
    function updateDisplay() {
        display.textContent = currentInput;
    }

    // Handle number button clicks
    function handleNumberClick(number) {
        if (currentInput === '0' || resetScreen) {
            currentInput = number;
            resetScreen = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    // Handle operator button clicks
    function handleOperatorClick(op) {
        if (operation !== null) {
            calculate();
        }

        previousInput = currentInput;
        operation = op;
        resetScreen = true;
    }

    // Calculate result
    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    result = 'Error';
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operation = null;
        updateDisplay();
    }

    // Clear calculator
    function clearCalculator() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        updateDisplay();
    }

    // Handle backspace
    function handleBackspace() {
        if (currentInput.length === 1) {
            currentInput = '0';
        } else {
            currentInput = currentInput.slice(0, -1);
        }
        updateDisplay();
    }

    // Handle decimal point
    function handleDecimal() {
        if (resetScreen) {
            currentInput = '0.';
            resetScreen = false;
        } else if (!currentInput.includes('.')) {
            currentInput += '.';
        }
        updateDisplay();
    }

    // Handle percent
    function handlePercent() {
        const current = parseFloat(currentInput);
        currentInput = (current / 100).toString();
        updateDisplay();
    }

    // Memory functions
    function memoryAdd() {
        memory += parseFloat(currentInput) || 0;
        // Briefly flash the display to indicate memory operation
        const originalValue = currentInput;
        currentInput = "M+";
        updateDisplay();
        setTimeout(() => {
            currentInput = originalValue;
            updateDisplay();
        }, 300);
    }

    function memorySubtract() {
        memory -= parseFloat(currentInput) || 0;
        // Briefly flash the display to indicate memory operation
        const originalValue = currentInput;
        currentInput = "M-";
        updateDisplay();
        setTimeout(() => {
            currentInput = originalValue;
            updateDisplay();
        }, 300);
    }

    function memoryRecall() {
        currentInput = memory.toString();
        updateDisplay();
    }

    function memoryClear() {
        memory = 0;
        // Briefly flash the display to indicate memory operation
        const originalValue = currentInput;
        currentInput = "MC";
        updateDisplay();
        setTimeout(() => {
            currentInput = originalValue;
            updateDisplay();
        }, 300);
    }

    // Event listeners for number buttons
    numberButtons.forEach(button => {
        if (button.id !== 'clear' && button.id !== 'backspace' && 
            button.id !== 'equals' && button.id !== 'decimal' && 
            button.id !== 'percent') {
            button.addEventListener('click', () => {
                handleNumberClick(button.textContent);
            });
        }
    });

    // Event listeners for operator buttons
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperatorClick(button.textContent);
        });
    });

    // Event listeners for other buttons
    clearButton.addEventListener('click', clearCalculator);
    backspaceButton.addEventListener('click', handleBackspace);
    equalsButton.addEventListener('click', calculate);
    decimalButton.addEventListener('click', handleDecimal);
    percentButton.addEventListener('click', handlePercent);

    // Event listeners for memory buttons
    mcButton.addEventListener('click', memoryClear);
    mrButton.addEventListener('click', memoryRecall);
    mPlusButton.addEventListener('click', memoryAdd);
    mMinusButton.addEventListener('click', memorySubtract);

    // Initialize display
    updateDisplay();
});
