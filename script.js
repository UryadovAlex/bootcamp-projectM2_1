let amount = document.querySelector('#amount');
let monthly = document.querySelector('#monthly');
let percent = document.querySelector('#percent');
let days = document.querySelector('#days');

let button = document.querySelector('#btn');


function calculate(event) {
    let months = Math.floor(+days.value / 30);
    let initialAmount = +amount.value;
    let monthlyPercent = +percent.value / 12 / 100;
    let errCheck = 0;

    if (+amount.value < 0
        || !Number.isInteger(+amount.value)
        || !amount.value) {
        console.log('Начальная сумма - не положительно число или пустое значение');
        amount.className = 'err';
        amount.value = 'Incorrect';
        errCheck++;
    } if (+monthly.value < 0
        || !Number.isInteger(+monthly.value)
        || !monthly.value) {
        console.log('Сумма пополнения - отрицательное число или пустое значение');
        monthly.className = 'err';
        monthly.value = 'Incorrect';
        errCheck++;
    } if (+percent.value < 0
        || +percent.value > 100
        || !Number.isInteger(+percent.value)
        || !percent.value) {
        console.log('Процент - положительное число (до 100). Или не пустое значение');
        percent.className = 'err';
        percent.value = 'Incorrect';
        errCheck++;
    } if (+days.value < 0
        || !((+days.value ^ 0) === +days.value)
        || !Number.isInteger(+days.value)
        || !days.value) {
        console.log('Срок - должен быть положительное целое число. Или не пустое значение');
        days.className = 'err';
        days.value = 'Incorrect';
        errCheck++;
    } if (errCheck > 0) {
        let error = document.querySelector('#error');
        error.className = 'err';
        return NaN;
    } else {
        for (let i = 1; i < months; i++) {
            initialAmount += initialAmount * monthlyPercent + +monthly.value;
        }
        alert(Math.round(initialAmount));
    }
}

let allIn = document.querySelectorAll('input');
for (let i = 0; i < allIn.length; i++) {
    allIn[i].addEventListener('focus', function (e) {
        if (this.className == 'err' || this.nextElementSibling.className == 'empty') {
            this.value = '';
            this.className = '';
            this.nextElementSibling.className = '';
            document.querySelector('#error').className = '';
        }
    })
    allIn[i].addEventListener('blur', function () {
        console.log(this.value)
        if (!this.value) {
            this.nextElementSibling.className = 'empty';
        }
    })
}



document.body.addEventListener('keyup', function(e){
    console.log(this)
    
    if(e.keyCode == 13){
        calculate.call(button);
    }
})
button.addEventListener('click', calculate);