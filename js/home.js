const validPin = '1234';

// Add Money Functionality
document.getElementById("addMoneyBtn").addEventListener("click", function(e){
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const account = document.getElementById("add-account").value;

    if(account.length !== 11){
        alert("Your bank account number must be 11 digit!");
        return;
    }
    
    const amount = parseFloat(parseFloat(document.getElementById("add-amount").value).toFixed(2));

    if(amount < 10){
        alert("Amount must be 10 or Avobe!");
        return;
    }

    const pin = document.getElementById("add-pin").value;

    if(pin !== validPin){
        alert("Invalid Pin");
        return;
    }

    const availableBalance = parseFloat(parseFloat(document.getElementById("available-balance").innerText).toFixed(2));

    const totalBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText = totalBalance;

    alert("Amount added successfully!");
})

// All card IDs
const cardIds = [
  "addmoney-card",
  "cashout-card",
  "transfermoney-card",
  "getbonus-card",
  "paybill-card",
  "transaction-card"
];

// Hide all containers
function hideAllContainers() {
  cardIds.forEach(id => {
    const containerId = id.replace("-card", "-container"); // auto map
    const container = document.getElementById(containerId);
    if (container) container.style.display = "none";
  });
}

// Reset card styles
function resetCards() {
  cardIds.forEach(id => {
    const card = document.getElementById(id);
    if (card) card.style.background = "";
  });
}

// Track active card
let activeCard = null;

// Initially hide all
hideAllContainers();

// Add listeners
cardIds.forEach(id => {
  const card = document.getElementById(id);
  if (card) {
    card.addEventListener("click", function () {
      const containerId = id.replace("-card", "-container");
      const container = document.getElementById(containerId);

      if (activeCard === id) {
        // Toggle off if same card clicked again
        resetCards();
        hideAllContainers();
        activeCard = null;
      } else {
        resetCards();
        hideAllContainers();

        // Highlight and show
        card.style.background = "#f4f5f7";
        if (container) container.style.display = "block";

        activeCard = id;
      }
    });
  }
});

// Cashout 
document.getElementById("cashout-btn").addEventListener("click", function(e) {
    e.preventDefault();

    const account = document.getElementById("cashout-account").value;
    const amount = parseFloat(parseFloat(document.getElementById("cashout-amount").value).toFixed(2));
    const pin = document.getElementById("cashout-pin").value;

    if (account.length !== 11) {
        alert("Your account number must be 11 digit!");
        return;
    }

    if (amount < 10) {
        alert("Amount must be 10 or above!");
        return;
    }

    if (pin !== validPin) {
        alert("Invalid Pin");
        return;
    }

    const availableBalance = parseFloat(parseFloat(document.getElementById("available-balance").innerText).toFixed(2));

    if (amount > availableBalance) {
        alert("Insufficient balance!");
        return;
    }

    const totalBalance = availableBalance - amount;
    document.getElementById("available-balance").innerText = totalBalance;
    alert("Cashout money successfull!");
});