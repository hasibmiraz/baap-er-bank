// Handle deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = parseInt(
      document.getElementById("deposit-input").value
    );
    const totalDeposit =
      parseInt(document.getElementById("deposit-amount").innerText) +
      depositAmount;

    document.getElementById("deposit-amount").innerText = totalDeposit;

    const totalAmount = parseInt(
      document.getElementById("total-amount").innerText
    );
    document.getElementById("total-amount").innerText =
      totalAmount + totalDeposit;
    document.getElementById("deposit-input").value = "";
  });

// Handle withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-input").value
    );

    const totalWithdraw =
      parseInt(document.getElementById("withdraw-amount").innerText) +
      withdrawAmount;
    document.getElementById("withdraw-amount").innerText = totalWithdraw;

    const totalAmount = parseInt(
      document.getElementById("total-amount").innerText
    );
    document.getElementById("total-amount").innerText =
      totalAmount - totalWithdraw;

    document.getElementById("withdraw-input").value = "";
  });
