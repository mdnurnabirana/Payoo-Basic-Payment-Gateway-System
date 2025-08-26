const validPin = '1234';

// Reusable function for getting input value (as number)
function getInputMoney(id) {
  const input = document.getElementById(id);
  return parseFloat(input.value);
}

// Reusable function for getting innerText (as number)
function getMoney(id) {
  const el = document.getElementById(id);
  return parseFloat(el.innerText);
}

// Reusable function for setting innerText (formatted)
function setMoney(id, amount) {
  const el = document.getElementById(id);
  el.innerText = parseFloat(amount).toFixed(2);
}

// Add Money Functionality
document.getElementById("addMoneyBtn").addEventListener("click", function(e){
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const account = document.getElementById("add-account").value;

    if(account.length !== 11){
        alert("Your bank account number must be 11 digits!");
        return;
    }
    
    const amount = getInputMoney("add-amount"); // ✅ fixed, should be amount input not pin
    if(amount < 10){
        alert("Amount must be 10 or above!");
        return;
    }

    const pin = document.getElementById("add-pin").value;
    if(pin !== validPin){
        alert("Invalid Pin");
        return;
    }

    const availableBalance = getMoney("available-balance");
    const totalBalance = availableBalance + amount;

    setMoney("available-balance", totalBalance);

    alert("Amount added successfully!");
});

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
    const amount = getInputMoney("cashout-amount");
    const pin = document.getElementById("cashout-pin").value;

    if (account.length !== 11) {
        alert("Your account number must be 11 digits!");
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

    const availableBalance = getMoney("available-balance");

    if (amount > availableBalance) {
        alert("Insufficient balance!");
        return;
    }

    const totalBalance = availableBalance - amount;
    setMoney("available-balance", totalBalance);

    alert("Cashout money successful!");
});