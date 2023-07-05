document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const previousWithdrawTotal = getElementValueByInnerText('withdraw-total');

    // calculate withdraw:-
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // set withdraw total value:-
    // this line will be set after 'not enough balance' condition:-

    // using the function for balance area:-
    const previousBalanceTotal = getElementValueByInnerText('balance-total');

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You have not enough balance.');
        return;
    }
    // set here this line of code from upper:-
    setInnerTextForElementValue('withdraw-total', newWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setInnerTextForElementValue('balance-total', newBalanceTotal);
})