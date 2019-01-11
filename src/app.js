import { ui } from "./ui";
import { http } from "./http";

//
// EVENT LISTENERS
//

// Load all quotes in db on DOM load
document.addEventListener("DOMContentLoaded", getQuotes);
// Listen for add quote
document.querySelector(".quote-submit").addEventListener("click", addQuotes);
// Listen for delete
document.querySelector("#quotes").addEventListener("click", deleteQuote);
// Listen for edit
document.querySelector("#quotes").addEventListener("click", editQuote);
// Listen for cancel edit
document.querySelector(".card-form").addEventListener("click", cancelEdit);

//
// FUNCTIONS
//

// Get Quotes
function getQuotes() {
  http
    .get("http://localhost:3000/quotes")
    .then(data => ui.showQuotes(data))
    .catch(err => console.log(err));
}

// Add Quote
function addQuotes() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#id").value;

  const data = {
    title,
    body
  };

  // Validate input
  if (title === "" || body === "") {
    ui.showAlert("Please fill in all fields", "alert alert-danger");
  } else {
    // Check for hidden id
    if (id === "") {
      // Create quote
      http
        .post("http://localhost:3000/quotes", data)
        .then(data => {
          ui.showAlert("Quote Added", "alert alert-success");
          ui.clearFields();
          getQuotes();
        })
        .catch(err => console.log(err));
    } else {
      // Update quote
      http
        .put(`http://localhost:3000/quotes/${id}`, data)
        .then(data => {
          ui.showAlert("Quote Updated", "alert alert-success");
          ui.changeFormState("add");
          getQuotes();
        })
        .catch(err => console.log(err));
    }
  }
}

// Edit Quote
function editQuote(e) {
  if (e.target.parentElement.classList.contains("edit")) {
    // Get the quote data
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    };

    // Fill form with current data
    ui.fillForm(data);
  }

  e.preventDefault();
}

// Cancel Edit
function cancelEdit(e) {
  if (e.target.classList.contains("quote-cancel")) {
    ui.changeFormState("add");
  }
  e.preventDefault();
}

// Delete Quote
function deleteQuote(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    // Get the id of the quote to delete
    const id = e.target.parentElement.dataset.id;
    // Display confirm message to the user
    if (confirm("Are you sure you want to delete this quote?")) {
      http
        .delete(`http://localhost:3000/quotes/${id}`)
        .then(data => {
          ui.showAlert("Quote was deleted", "alert alert-success");
          getQuotes();
        })
        .catch(err => console.log(err));
    }
  }

  e.preventDefault();
}
