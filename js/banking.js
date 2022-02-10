// Handle deposit button
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    let depositAmount = parseInt(
      document.getElementById("deposit-input").value
    );
    const totalDeposit = parseInt(
      document.getElementById("deposit-amount").innerText
    );
    console.log(totalDeposit);
  });
