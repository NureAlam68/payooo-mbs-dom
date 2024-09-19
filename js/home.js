// add money to the account


// step-1 add money even handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event) {
    //prevent page reload stop after submit form
    event.preventDefault();

    //step-2 get money to be added to the account and pin number
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // step-3 verify pin number wrong way.. next a right ta sikbo
    if(pinNumberInput === '1234') {
        console.log('adding money to your account')

        // step-4 get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step-5 add moneyMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);  //string to number
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step-6 add money in dom or website
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money ! Please try again.')
    }

});