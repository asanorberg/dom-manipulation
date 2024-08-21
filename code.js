document.getElementById("form").addEventListener("submit", validateForm);

function validateForm(e) {
  let isValid = true;

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let nameError = document.getElementById("name-error");
  let emailError = document.getElementById("email-error");
  let messageError = document.getElementById("message-error");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (name === "") {
    isValid = false;
    nameError.textContent = "Name cannot be empty";
  }

  if (email === "") {
    isValid = false;
    emailError.textContent = "Email cannot be empty";
  }

  if (message === "") {
    isValid = false;
    messageError.textContent = "Message cannot be empty";
  }

  if (isValid) {
    document.getElementById("form").submit();
  } else {
    alert("Please fill in all required fields.");
  }

  e.preventDefault();
}
