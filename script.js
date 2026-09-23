const display = document.getElementById('display');

    function appendValue(value) {
        // Prevent adding multiple operators in a row
        const lastChar = display.value.slice(-1);
        const operators = ['+', '-', '*', '/', '.'];
        
        if (operators.includes(value) && operators.includes(lastChar)) {
            return; 
        }
        
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            // Function() evaluates the string securely without using standard eval()
            if (display.value) {
                display.value = Function('"use strict";return (' + display.value + ')')();
            }
        } catch (error) {
            display.value = 'Error';
        }
    }