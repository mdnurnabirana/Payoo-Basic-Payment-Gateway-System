// Add Money Functionality
document.getElementById("addMoneyBtn").addEventListener("click", function(e){
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const account = document.getElementById("add-account").value;
    const amount = parseFloat(parseFloat(document.getElementById("add-amount").value).toFixed(2));
    const pin = document.getElementById("add-pin").value;

    const availableBalance = parseFloat(parseFloat(document.getElementById("available-balance").innerText).toFixed(2));

    const totalBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText = totalBalance;
})