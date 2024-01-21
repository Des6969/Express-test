const validatePassword = () => {
  const password = document.getElementById("Password").value;
  const passwordResult = document.getElementById("passwordResult");

  const criteria =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (criteria.test(password)) {
    passwordResult.textContent = "Password meets criteria";
    passwordResult.style.color = "green";
  } else {
    passwordResult.textContent = "Password does not meet criteria";
    passwordResult.style.color = "red";
  }
};

// You might want to call this function when, for example, a form is submitted or a button is clicked.
// Example: <button onclick="validatePassword()">Check Password</button>
