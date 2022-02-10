const callToAction = function (action) {
  const moneyInAction = parseInt(
    document.getElementById(`${action}-input`).value
  );
  const totalMoneyInAction =
    parseInt(document.getElementById(`${action}-amount`).innerText) +
    moneyInAction;

  document.getElementById(`${action}-amount`).innerText = totalMoneyInAction;

  const totalAmount = parseInt(
    document.getElementById("total-amount").innerText
  );

  if (action === "deposit") {
    document.getElementById("total-amount").innerText =
      totalAmount + moneyInAction;
  } else {
    document.getElementById("total-amount").innerText =
      totalAmount - moneyInAction;
  }
  document.getElementById(`${action}-input`).value = "";
};

// Handle deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", () => callToAction("deposit"));

// Handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", () => callToAction("withdraw"));
