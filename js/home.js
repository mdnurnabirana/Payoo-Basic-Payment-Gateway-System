const validPin = '1234';

// Get input value as number
function getInputMoney(id) {
  const input = document.getElementById(id);
  return parseFloat(input.value) || 0;
}

// Get innerText as number
function getMoney(id) {
  const el = document.getElementById(id);
  return parseFloat(el.innerText) || 0;
}

// Set innerText with 2 decimals
function setMoney(id, amount) {
  const el = document.getElementById(id);
  el.innerText = parseFloat(amount).toFixed(2);
}

// Toggle form containers
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Toggle active button
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0808081a]", "bg-white", "border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  const activeBtn = document.getElementById(id);
  if (activeBtn) {
    activeBtn.classList.remove("border-gray-300");
    activeBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  }
}

// Add Money
document.getElementById("addMoneyBtn").addEventListener("click", function(e){
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const account = document.getElementById("add-account").value;

    if(account.length !== 11){
        alert("Your bank account number must be 11 digits!");
        return;
    }
    
    const amount = getInputMoney("add-amount");
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

// Transfer Money
document.getElementById("transfer-btn").addEventListener("click", function(e) {
    e.preventDefault();

    const account = document.getElementById("transfer-account").value;
    const amount = getInputMoney("transfer-amount");
    const pin = document.getElementById("transfer-pin").value;

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

    alert("Transfer money successful!");
});

// Card click events
document.getElementById("addmoney-card").addEventListener("click", function() {
  handleToggle("addmoney-container");
  handleButtonToggle("addmoney-card");
});

document.getElementById("cashout-card").addEventListener("click", function() {
  handleToggle("cashout-container");
  handleButtonToggle("cashout-card");
});

document.getElementById("transfermoney-card").addEventListener("click", function() {
  handleToggle("transfermoney-container");
  handleButtonToggle("transfermoney-card");
});

document.getElementById("getbonus-card").addEventListener("click", function() {
  handleToggle("getbonus-container");
  handleButtonToggle("getbonus-card");
});


window.addEventListener("DOMContentLoaded", function() {
  handleToggle(""); // hide all at start
});


// Get Bonus
document.getElementById("getbonus-btn").addEventListener("click", function(e) {
  e.preventDefault();

  const coupon = document.getElementById("coupon").value.trim();

  if (!coupon) {
    alert("Please enter a coupon code!");
    return;
  }

  // Example: hardcoded valid coupon for demo
  const validCoupon = "BONUS100";
  const bonusAmount = 100;

  if (coupon === validCoupon) {
    const availableBalance = getMoney("available-balance");
    setMoney("available-balance", availableBalance + bonusAmount);
    alert("Bonus added successfully!");
  } else {
    alert("Invalid coupon code!");
  }
});