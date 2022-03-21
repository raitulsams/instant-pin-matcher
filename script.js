// Generating PIN 
let generatePin = document.querySelector(".generate-btn")
generatePin.addEventListener("click", function () {
    let randomNumber = Math.floor(1000 + Math.random() * 9000)
    document.querySelector('#generated-pin').value = parseFloat(randomNumber)
})
// Generating PIN ends



// Veryfing PIN
const numberButtons = document.querySelectorAll('[data-number]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')
let input = document.getElementById('inputPin').value
const submit = document.getElementById('submit-btn')
const randomNum = document.querySelector('#generated-pin')

deleteButton.addEventListener('click', () => {
    console.log('clicked')
    deleteNum()
    updateDisplay()
})

allClearButton.addEventListener('click', () => {
    console.log('hi')
    clrDisplay()
    updateDisplay()
})

function deleteNum() {
    this.input = this.input.slice(0, -1)
    console.log(this.input)
}

function clrDisplay() {
    this.input = ""
}

function updateDisplay() {
    document.getElementById('inputPin').value = this.input
}

numberButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        // console.log('clicked')
        document.getElementById('inputPin').value = appendNumber(button.innerText)
    })
});

function appendNumber(number) {
    if (this.input == null) {
        this.input = ''
    }
    this.input = this.input + number
    return this.input

}

submit.addEventListener('click', () => {
    let submitNum = parseFloat(document.getElementById('inputPin').value)
    let randomNum = parseFloat(document.getElementById('generated-pin').value)
    let action = parseFloat(document.getElementById('action-lef').innerText)
    console.log(action)
    // console.log(submitNum)
    // console.log(randomNum)
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    if (action <= 3 && action > 0) {
        if (submitNum === randomNum) {
            console.log('verified')
            n2.style.display = "inline-block"
            n1.style.display = "none"
            document.getElementById('action-lef').innerText = '3'
        } else {
            console.log(action)
            console.log('not verified')
            n1.style.display = "inline-block"
            n2.style.display = "none"
            document.getElementById('action-lef').innerText = action - 1
        }
    } else {
        return -1
    }
})
// Veryfing PIN ends









/* Multiplying by 9000 results in a range of [0, 9000).
    Adding 1000 results in a range of [1000, 10000).
    Flooring chops off the decimal value to give you an integer.Note that it does not round. */

/* If you want to generate an integer in the range [x, y), you can use the following code:
Math.floor(x + (y - x) * Math.random()); */