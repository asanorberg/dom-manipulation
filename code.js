// FORMULÄR

document.getElementById("form").addEventListener("submit", validateForm);

function validateForm(e) {
  let isValid = true;

  //hämta input värde
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  //hämta error span element
  let nameError = document.getElementById("name-error");
  let emailError = document.getElementById("email-error");
  let messageError = document.getElementById("message-error");

  //if-satser för errors
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
    alert("Your form has been sent");
  } else {
    alert("Please fill in all required fields.");
  }
  e.preventDefault();
}

// LISTA / ANTECKNINGAR

document.querySelector("#add-btn").addEventListener("click", addItem);
let listEl = document.querySelector("ul");

function addItem(e) {
  let inputValue = document.querySelector("#note-input").value;
  let errorSpan = document.querySelector("#note-error");

  // Check if the error span already exists, if not, create it
  if (!errorSpan) {
    errorSpan = document.createElement("span");
    errorSpan.id = "note-error";
    errorSpan.className = "error"; // You can style this class in your CSS
    document.querySelector(".notes > div").insertBefore(errorSpan, listEl);
  }

  if (inputValue !== "") {
    listEl.appendChild(document.createElement("li")).innerHTML = inputValue;
    errorSpan.innerHTML = ""; // Clear the error message if input is valid
  } else {
    errorSpan.innerHTML = "You need to write something"; // Display error message
  }
}

listEl.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName === "LI") {
    removeItem(e);
  }
});
let listItem = listEl.querySelector("li");
console.log(listItem);

function removeItem(e) {
  console.log("you clicked a list item");
  e.target.remove();
}
