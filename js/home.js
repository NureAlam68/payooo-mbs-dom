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

});