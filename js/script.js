document.getElementById("login-submit").addEventListener("click", function () {
  // Get user email
  const emailField = document.getElementById("email-address");
  const userEmail = emailField.value;

  // Get user password
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value;

  // Email and password validation
  if (userEmail === "bank@money.com" && userPassword === "secret") {
    window.location.href = "banking.html";
  }
});
