document.getElementById('login').addEventListener('click', function(){
    const accNumber = document.getElementById("acc-num").value;
    const accPin = document.getElementById('pin').value;
    const pinNumber = parseInt(accPin);
    console.log(pinNumber, "pin", accNumber, "accNumber", accNumber.length);
    if(accNumber.length === 11) {
        if(pinNumber === 1234) {
            window.location.href = "./pages.html";
        } else {
            alert("wrong pin number");
        }
    } else{
        alert('Wrong account number');
    }
})