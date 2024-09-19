// show the cash out form

document.getElementById('btn-show-cash-out').addEventListener('click', function() {
    // hidden property remove from cash out when click cash out button
    document.getElementById('cash-out-form').classList.remove('hidden');

    //hidden property add when click cash out button
    document.getElementById('add-money-form').classList.add('hidden');

});


document.getElementById('btn-show-add-money').addEventListener('click', function() {
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})