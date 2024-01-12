let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let history = [];

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                let result = eval(string);
                if (isNaN(result) || !isFinite(result)) {
                    input.value = 'Error';
                } else {
                    input.value = result;
                    history.push({ expression: string, result });
                }
            } catch (error) {
                input.value = 'Error';
            }
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (buttonText === 'C') {
            string = "";
            input.value = "";
        } else if (buttonText === '.') {
            // Allowing only one decimal point in the input
            if (!string.includes('.')) {
                string += buttonText;
                input.value = string;
            }
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
function updateHistory() {
    let historySection = document.getElementById('historySection');
    historySection.innerHTML = '';
    history.forEach(item => {
        let historyItem = document.createElement('div');
        historyItem.textContent = `${item.expression} = ${item.result}`;
        historySection.appendChild(historyItem);
    });
}

