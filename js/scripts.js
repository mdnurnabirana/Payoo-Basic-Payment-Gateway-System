// Login Button Functionality
document.getElementById("loginBtn").addEventListener("click", function(e){
    e.preventDefault();
    const mobileNumber = "01305592904";
    const pinNumber = "1234";

    const userInputMobileNumber = document.getElementById("mobile").value;
    const userInputPin = document.getElementById("pin").value;

    if(mobileNumber === userInputMobileNumber && pinNumber === userInputPin) {
        window.location.href="./home.html";
    } else {
        window.alert("Invalid Credentials! Please Try Again!");
    }
});