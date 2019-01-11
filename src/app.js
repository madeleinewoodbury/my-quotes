import { ui } from "./ui";
import { http } from "./http";

//
// EVENT LISTENERS
//

// Load all quotes in db on DOM load
document.addEventListener("DOMContentLoaded", getQuotes);

// Listen for add quote
document.querySelector(".quote-submit").addEventListener("click", addQuotes);

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
    }
  }
}
