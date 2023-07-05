document.getElementById('btn-deposit').addEventListener('click', function () {
    // call the function for "input area" :-
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // call the function for "deposit area" :-
    const previousDepositTotal = getElementValueByInnerText('deposit-total');
    // calculate deposit:-
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value:-
    setInnerTextForElementValue('deposit-total', newDepositTotal);


    // using the function for "balance area" :-
    const previousBalanceTotal = getElementValueByInnerText('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setInnerTextForElementValue('balance-total', newBalanceTotal);

})