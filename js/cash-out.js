

document.getElementById('btn-out-money').addEventListener('click', function(even) {
    even.preventDefault();

    const cashOut = document.getElementById('input-out-money').value;
    console.log(cashOut);
    const pinNumber = document.getElementById('cash-out-pin').value;
    console.log(pinNumber)

    if(pinNumber === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const cash0utMoney = parseFloat(cashOut);
        const newBalance = balanceNumber - cash0utMoney;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to cash out money ! Try again.')
    }
});