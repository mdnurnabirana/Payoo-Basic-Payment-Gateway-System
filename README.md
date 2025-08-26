# Payooo - Payment Gateway (Practice Project)

🚀 A **basic payment gateway simulation** built with **HTML, TailwindCSS, DaisyUI, and Vanilla JavaScript (DOM manipulation)**.  
This project was created as a hands-on practice exercise to understand **form handling, event listeners, DOM updates, and basic transaction history tracking** in JavaScript.  

👉 Live Demo: [Payooo Payment Gateway](https://pay-gateway-app.netlify.app/)  

---

## 📌 Features

- **Add Money**  
  - Select a bank  
  - Enter account number, amount, and pin  
  - Updates available balance  

- **Cash Out**  
  - Withdraw funds from the available balance  
  - Validates account number, pin, and sufficient balance  

- **Transfer Money**  
  - Send funds to another account  
  - Checks input validation and updates balance  

- **Get Bonus**  
  - Apply coupon codes (e.g., `BONUS100`)  
  - Instantly credits bonus amount  

- **Pay Bill**  
  - Select a bank  
  - Enter bill account number, amount, and pin  
  - Deducts amount from balance  

- **Transaction History**  
  - Displays a simple log of all transactions with timestamp  

---

## 🛠️ Tech Stack

- **HTML5** – Markup for structuring  
- **TailwindCSS + DaisyUI** – UI styling  
- **Vanilla JavaScript** – Core logic, DOM manipulation  
- **Netlify** – Deployment  

---

## ⚙️ How It Works

- Each feature is linked to a **form container** that is toggled dynamically.  
- Inputs are validated (account number = 11 digits, minimum amount = 10, pin = `1234`).  
- Balance is updated live on the navbar.  
- Each transaction is stored in an array and rendered dynamically in the **Transaction History** section.  

---

## 🚧 Limitations

- This is a **practice project only** (not a real payment gateway).  
- No backend / database connection – everything runs **in-memory**.  
- Hardcoded pin (`1234`) and coupon (`BONUS100`).  

---
