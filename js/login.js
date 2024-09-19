//input number and pin

//step-1 set event handler
document.getElementById('btn-login').addEventListener('click', function(event) {
        //step-2 stop loading browser
        event.preventDefault();
        console.log('log in')

        //step-3 get the phone number
        const phoneNumber = document.getElementById('phone-num').value;
        console.log(phoneNumber)
})