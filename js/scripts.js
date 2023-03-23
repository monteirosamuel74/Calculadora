const previousOperationText = document.getElementById("previous-operation");
const currentOperationText = document.getElementById("current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = '';
    }
    addDigit(digit) {

        if(digit === '.' && this.currentOperationText.innerText.includes('.')){
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    processOperation(operations){
        let operationValue;
        let previous = +this.previousOperationText.innerText;
        let current = +this.currentOperationText.innerText;
    }
    //change values of the calculator screen
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});