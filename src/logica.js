document.addEventListener('DOMContentLoaded', () => {
    // Obtém o display onde os números e operações serão exibidos
    const display = document.querySelector('#result');  // Corrigido de '#view' para '#result'

    // Função para adicionar números ao display
    function appendNumber(number) {
        // Impede que o número seja iniciado com 0, como "07" ou "09"
        if (display.value === '0' && number !== '.') {
            display.value = number;
        } else {
            display.value += number; // Adiciona o número ao display
        }
    }

    // Função para adicionar operadores (+, -, *, /, %)
    function appendOperator(operator) {
        const lastChar = display.value[display.value.length - 1];

        // Impede operadores consecutivos
        if (!['+', '-', '*', '/', '%'].includes(lastChar)) {
            display.value += operator;
        }
    }

    // Função para calcular o resultado
    function calculate() {
        try {
            // Avalia a expressão e mostra o resultado no display
            display.value = eval(display.value);
        } catch (error) {
            // Se houver erro na avaliação (como uma expressão inválida), exibe "Erro"
            display.value = 'Erro';
        }
    }

    // Função para limpar o display
    function clearDisplay() {
        display.value = ''; // Limpa o conteúdo do display
    }

    // Função para apagar o último caractere
    function deleteLast() {
        display.value = display.value.slice(0, -1); // Remove o último caractere
    }

    // Associe as funções aos botões da calculadora
    window.appendNumber = appendNumber;
    window.appendOperator = appendOperator;
    window.calculate = calculate;
    window.clearDisplay = clearDisplay;
    window.deleteLast = deleteLast;
});
