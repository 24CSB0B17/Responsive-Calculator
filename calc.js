
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.button');
  let currentInput = '';
  let memory = 0;

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const buttonValue = event.target.innerText;

      if (buttonValue === 'C') {
        currentInput = '';
        display.value = '0';
      } else if (buttonValue === 'M+') {
        memory += parseFloat(currentInput || '0');
        currentInput = '';
        display.value = '0';
      } else if (buttonValue === 'M-') {
        memory -= parseFloat(currentInput || '0');
        currentInput = '';
        display.value = '0';
      } else if (buttonValue === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
      } else if (buttonValue === '=') {
        try {
          currentInput = eval(currentInput).toString();
          display.value = currentInput;
        } catch (error) {
          display.value = 'Error';
        }
      } else {
        if (currentInput === '0' && !['+', '-', '*', '/'].includes(buttonValue)) {
          currentInput = buttonValue;
        } else {
          currentInput += buttonValue;
        }
        display.value = currentInput;
      }
    });
  });
